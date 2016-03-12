/* #SOLID Designs 
	Author: Luciano S. Aldana II
	url: http://brandedsolid.com

/* SOLID CONFIDENTIAL
 * __________________
 * 
 *  [2013] - [2016] Property of Luciano Aldana dba SOLID 
 *  All Rights Reserved.
 * 
 * NOTICE:  All information contained herein is, and remains
 * the property of SOLID and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to SOLID
 * and its suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from SOLID.
 */


jQuery(document).ready(function ($) {
    

    var nameData;
        $.ajax({
            url: 'json/builderStart.json',
            type: 'get',
            dataType: 'json',
            error: function(data){
            },
            success: function(data){
                nameData = data; 
                
                var $par = $('p'),
                    $h = $('h1, h2, h3, h4, h5'),
                    $li = $('li'),
                    $a = $('a'),
                    contArr = [$par, $h, $li, $a];

            var    tagObj = {};

            //console.log(contArr[2]);
    
                for (var i=0; i< 3; i++) {
                    var content = contArr[i];
         
                        var y = 0;
            
        
                content.each(function () {
                    if ( y < content.length){
                
                        var tag;
                
                        switch(i) {
                            case 0:
                                tag = 'par';
                                break;
                            case 1:
                                tag = 'header';    
                                break;
                            case 2: 
                                tag = 'list';
                                break;
                            case 3:
                                tag = 'anchor';
                                break;
                            default:
                                break;
                }
                
                var targetTag = tag+y;
            
//                console.log(tag+y);
  //              console.log(targetTag);

                 var $e = '[data-edit="'+ targetTag +'"]';
                $($e).html( nameData[0][targetTag].stringValue );
                
            
                }
            y++;
        });
                }

        }  

        });
    
});