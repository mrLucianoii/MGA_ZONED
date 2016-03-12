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
    
var loadData;
        $.ajax({
            url: 'json/builderStart.json',
            type: 'get',
            dataType: 'json',
            error: function(data){
            },
            success: function(data){
                loadData = data;
    
            }
        });  
            console.log("testing");
    
        for (var i=0; i < loadData.length; i++) {
            console.log(loadData[i].id);
            
            var $e = '[data-edit="'+loadData[i]+'"]';
            
            $($e).html( loadData[i].stringValue );
                
            console.log('success get: '+ $e);

        }
});