const template = {
  HTML:function test(title,list,body,control){
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body>
      <h1>test</h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>`;},
    list:function(filelist){
      let list='<ul>';
      let i = 0;
    }
}
module.exports=template;