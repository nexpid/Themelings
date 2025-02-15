// app/modules/main_tabs_v2/native/settings/screens/appearance/hooks/getGradientStartPont.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    entity = {};
    tango = 'function getHorizontalOrVerticalStartPoint_getGradientStartPontTsx1(angle,width,height){switch(angle){case 0:return[-width/2,0];case 90:return[0,-height/2];case 180:return[width/2,0];default:return[0,height/2];}}';
    entity['code'] = tango;
    var _closure1_slot0 = entity;
    tango = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: getHorizontalOrVerticalStartPoint
            _fun97288: for(var _fun97288_ip = 0; ; ) switch(_fun97288_ip) {
 0:
                report = argFoo;
                entity = argBar;
                zulu = argBaz;
                mike = 0;
                if(!(mike !== report)) { _fun97288_ip = 99; continue _fun97288 }
 15:
                tango = 90;
                if(!(tango !== report)) { _fun97288_ip = 73; continue _fun97288 }
 22:
                tango = 180;
                if(!(tango !== report)) { _fun97288_ip = 52; continue _fun97288 }
 29:
                tango = 2;
                report = zulu / tango;
                tango = [0];
                tango[1] = report;
                return tango;
 52:
                tango = 2;
                report = entity / tango;
                tango = new Array(2);
                tango[0] = report;
                tango[1] = mike;
                return tango;
 73:
                tango = -zulu;
                zulu = 2;
                tango = tango / zulu;
                zulu = [0];
                zulu[1] = tango;
                return zulu;
 99:
                zulu = -entity;
                entity = 2;
                zulu = zulu / entity;
                entity = new Array(2);
                entity[0] = zulu;
                entity[1] = mike;
                return entity;
            }
        };
        mike = {};
        entity['__closure'] = mike;
        mike = 16439230263550.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot0;
        entity['__initData'] = mike;
        return entity;
    };
    entity = undefined;
    golf = tango.bind(entity)();
    var _closure1_slot1 = golf;
    tango = {};
    report = 'function getStartCornerToIntersect_getGradientStartPontTsx2(angle,width,height){const w=width/2;const h=height/2;if(angle<90){return[-w,-h];}else if(angle<180){return[w,-h];}else if(angle<270){return[w,h];}else{return[-w,h];}}';
    tango['code'] = report;
    var _closure1_slot2 = tango;
    tango = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: getStartCornerToIntersect
            _fun97290: for(var _fun97290_ip = 0; ; ) switch(_fun97290_ip) {
 0:
                mike = argFoo;
                entity = argBar;
                zulu = 2;
                tango = entity / zulu;
                entity = argBaz;
                zulu = entity / zulu;
                entity = 90;
                if(!(!(mike < entity))) { _fun97290_ip = 98; continue _fun97290 }
 27:
                entity = 180;
                if(!(!(mike < entity))) { _fun97290_ip = 78; continue _fun97290 }
 34:
                entity = 270;
                if(!(!(mike < entity))) { _fun97290_ip = 61; continue _fun97290 }
 44:
                entity = new Array(2);
                mike = -tango;
                entity[0] = mike;
                entity[1] = zulu;
                _fun97290_ip = 76; continue _fun97290;
 61:
                mike = new Array(2);
                mike[0] = tango;
                mike[1] = zulu;
                entity = mike;
 76:
                _fun97290_ip = 96; continue _fun97290;
 78:
                mike = new Array(2);
                mike[0] = tango;
                report = -zulu;
                mike[1] = report;
                entity = mike;
 96:
                _fun97290_ip = 119; continue _fun97290;
 98:
                mike = new Array(2);
                tango = -tango;
                mike[0] = tango;
                zulu = -zulu;
                mike[1] = zulu;
                entity = mike;
 119:
                return entity;
            }
        };
        mike = {};
        entity['__closure'] = mike;
        mike = 2348332324573.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot2;
        entity['__initData'] = mike;
        return entity;
    };
    oscar = tango.bind(entity)();
    var _closure1_slot3 = oscar;
    tango = {};
    report = 'function getGradientStartPoint_getGradientStartPontTsx3(angle,width,height){const{getHorizontalOrVerticalStartPoint,getStartCornerToIntersect}=this.__closure;angle=angle%360;if(angle<0){angle+=360;}if(angle%90===0){return getHorizontalOrVerticalStartPoint(angle,width,height);}const slope=Math.tan(angle*Math.PI/180);const perpendicularSlope=-1/slope;const startCorner=getStartCornerToIntersect(angle,width,height);const b=startCorner[1]-perpendicularSlope*startCorner[0];const startX=b/(slope-perpendicularSlope);const startY=slope*startX;return[startX,startY];}';
    tango['code'] = report;
    mike = function(argFoo, argBar, argBaz) { // Original name: t
        _fun97291: for(var _fun97291_ip = 0; ; ) switch(_fun97291_ip) {
 0:
            report = argBar;
            tango = argBaz;
            entity = argFoo;
            mike = 360;
            entity = entity % mike;
            options = 0;
            zulu = entity;
            if(!(zulu < options)) { _fun97291_ip = 32; continue _fun97291 }
 28:
            zulu = entity + mike;
 32:
            entity = 90;
            entity = zulu % entity;
            if(!(entity !== options)) { _fun97291_ip = 156; continue _fun97291 }
 43:
            entity = global;
            oscar = entity.Math;
            mike = oscar.tan;
            entity = entity.Math;
            entity = entity.PI;
            golf = zulu * entity;
            entity = 180;
            entity = golf / entity;
            oscar = mike.bind(oscar)(entity);
            entity = -1;
            entity = entity / oscar;
            golf = _closure1_slot3;
            mike = undefined;
            mike = golf.bind(mike)(zulu, report, tango);
            golf = 1;
            golf = mike[golf];
            mike = mike[options];
            mike = entity * mike;
            mike = golf - mike;
            entity = oscar - entity;
            mike = mike / entity;
            entity = new Array(2);
            entity[0] = mike;
            mike = oscar * mike;
            entity[1] = mike;
            return entity;
 156:
            mike = _closure1_slot1;
            entity = undefined;
            entity = mike.bind(entity)(zulu, report, tango);
            return entity;
        }
    };
    report = {};
    report['getHorizontalOrVerticalStartPoint'] = golf;
    report['getStartCornerToIntersect'] = oscar;
    mike['__closure'] = report;
    report = 11244204401624.0;
    mike['__workletHash'] = report;
    mike['__initData'] = tango;
    report = argPlugh;
    tango = 0;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/screens/appearance/hooks/getGradientStartPont.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();