import Xml from "../index.js";

const noFileUrl   = "./nofile.xml"  
,     xmlUrl      = "./test.xml"    
,     txtUrl      = "./textxml.txt" 
,     xslUrl      = "./test.xsl"    
,CONTENT_TYPE_XML = "text/xml; charset=UTF-8";//"application/xml";

suite('browser-xml', () =>
{
    test( 'Xml API', function()
    {   assert(Xml              );
        assert(Xml.getXml       );
        assert(Xml.createXml    );
        assert(Xml.transform    );
        assert(Xml.XPath_node   );
        assert(Xml.XPath_nl     );
        assert(Xml.$            );
        assert(Xml.o2xml        );
        assert(Xml.createElement);
        assert(Xml.cleanElement );
    });
    test("Content-Type application/xml for test.xml", function()
    {
        let promise = Xml.getXml(xmlUrl);
        assert( promise.then );
        return promise.then( function( xmlDoc, xhr )
        {
            assert( CONTENT_TYPE_XML == promise.xhr.getResponseHeader("Content-type") );
        });

    });
    test("Content-Type text/plain for testxml.txt", function()
    {   let promise = Xml.getXml(txtUrl);
        assert( promise.then );
        return promise.then( function( xmlDoc, xhr )
        {
            assert( CONTENT_TYPE_XML != promise.xhr.getResponseHeader("Content-type") );
        });
    });
    test('Xml.getXml( 200 )', function()
    {   let promise = Xml.getXml(xmlUrl);
        return promise;
    });
    test('Xml.getXml( 200 ).then.then', function()
    {   let promise = Xml.getXml(xmlUrl);
        return promise
            .then( CHECK_XML() )
            .then( function( xmlDoc )
            {   assert( "root" == xmlDoc.documentElement.nodeName );
            });
    });
    test('Xml.getXml( 404 )', function()
    {   let promise = Xml.getXml(noFileUrl);
        return promise.then(   ERR()
            , function( err )
            {   assert( err.message.indexOf( "404" ) >= 0 );
            });
    });
    test('Xml.getXml( 404 ).then.then', function()
    {   var promise = Xml.getXml(noFileUrl);
        return promise.then( NOP, function(err){ throw err; }).then( ERR()
                , function( err )
                {   assert( err.message.indexOf( "404" ) >= 0 );
                });
    });
    test('Xml.load.then.transform( xml, xsl, el )', function()
    {   var promise = Xml.getXml(xmlUrl);
        return promise.then( function( xmlDoc )
        {
            return Xml.getXml(xslUrl).then( function( xslDoc )
            {
                var el = document.createElement("div");
                Xml.transform( xmlDoc, xslDoc, el );
                assert( el.innerHTML.indexOf("root") > 0 );
            });
        });
    });
    test('Xml.load.then( XPath_nl( leave ) )', function()
    {   var promise = Xml.getXml(xmlUrl);
        return promise.then( function( xmlDoc )
        {   var ret = Xml.XPath_nl("//leave", xmlDoc );
            assert( 2 == ret.length );
            assert( ret[1].nodeName == 'leave' );
        });
    });
    test('Xml.load.then( XPath_node( leave ) )', function()
    {   var promise = Xml.getXml(xmlUrl);
        return promise.then( function( xmlDoc )
        {   var ret = Xml.XPath_node( "//leave", xmlDoc );
            assert( ret.nodeName == 'leave' );
        });
    });
});

function NOP(a){ return a;}
function CHECK_XML(){ return function( xmlDoc )
{
    if( "root" !== xmlDoc.documentElement.nodeName )
        throw( new Error() );
    return xmlDoc;
} }
function ERR(){ return function()
{   debugger;
    throw( new Error() );
} }
