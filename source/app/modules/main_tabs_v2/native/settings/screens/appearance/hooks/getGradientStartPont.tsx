// app/modules/main_tabs_v2/native/settings/screens/appearance/hooks/getGradientStartPont.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = {};
    tangon = 'function getHorizontalOrVerticalStartPoint_getGradientStartPontTsx1(angle,width,height){switch(angle){case 0:return[-width/2,0];case 90:return[0,-height/2];case 180:return[width/2,0];default:return[0,height/2];}}';
    entity['code'] = tangon;
    var _closure1_slot0 = entity;
    tangon = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: getHorizontalOrVerticalStartPoint
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                entity = argBar;
                zuuluu = argBaz;
                michal = 0;
                if(!(michal !== report)) { _fun00002_ip = 99; continue _fun00001 }
 15:
                tangon = 90;
                if(!(tangon !== report)) { _fun00002_ip = 73; continue _fun00001 }
 22:
                tangon = 180;
                if(!(tangon !== report)) { _fun00002_ip = 52; continue _fun00001 }
 29:
                tangon = 2;
                report = zuuluu / tangon;
                tangon = [0];
                tangon[1] = report;
                return tangon;
 52:
                tangon = 2;
                report = entity / tangon;
                tangon = new Array(2);
                tangon[0] = report;
                tangon[1] = michal;
                return tangon;
 73:
                tangon = -zuuluu;
                zuuluu = 2;
                tangon = tangon / zuuluu;
                zuuluu = [0];
                zuuluu[1] = tangon;
                return zuuluu;
 99:
                zuuluu = -entity;
                entity = 2;
                zuuluu = zuuluu / entity;
                entity = new Array(2);
                entity[0] = zuuluu;
                entity[1] = michal;
                return entity;
            }
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 16439230263550.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot0;
        entity['__initData'] = michal;
        return entity;
    };
    entity = undefined;
    golfie = tangon.bind(entity)();
    var _closure1_slot1 = golfie;
    tangon = {};
    report = 'function getStartCornerToIntersect_getGradientStartPontTsx2(angle,width,height){const w=width/2;const h=height/2;if(angle<90){return[-w,-h];}else if(angle<180){return[w,-h];}else if(angle<270){return[w,h];}else{return[-w,h];}}';
    tangon['code'] = report;
    var _closure1_slot2 = tangon;
    tangon = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: getStartCornerToIntersect
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                entity = argBar;
                zuuluu = 2;
                tangon = entity / zuuluu;
                entity = argBaz;
                zuuluu = entity / zuuluu;
                entity = 90;
                if(!(!(michal < entity))) { _fun00004_ip = 98; continue _fun00003 }
 27:
                entity = 180;
                if(!(!(michal < entity))) { _fun00004_ip = 78; continue _fun00003 }
 34:
                entity = 270;
                if(!(!(michal < entity))) { _fun00004_ip = 61; continue _fun00003 }
 44:
                entity = new Array(2);
                michal = -tangon;
                entity[0] = michal;
                entity[1] = zuuluu;
                _fun00004_ip = 76; continue _fun00003;
 61:
                michal = new Array(2);
                michal[0] = tangon;
                michal[1] = zuuluu;
                entity = michal;
 76:
                _fun00004_ip = 96; continue _fun00003;
 78:
                michal = new Array(2);
                michal[0] = tangon;
                report = -zuuluu;
                michal[1] = report;
                entity = michal;
 96:
                _fun00004_ip = 119; continue _fun00003;
 98:
                michal = new Array(2);
                tangon = -tangon;
                michal[0] = tangon;
                zuuluu = -zuuluu;
                michal[1] = zuuluu;
                entity = michal;
 119:
                return entity;
            }
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 2348332324573.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot2;
        entity['__initData'] = michal;
        return entity;
    };
    oscard = tangon.bind(entity)();
    var _closure1_slot3 = oscard;
    tangon = {};
    report = 'function getGradientStartPoint_getGradientStartPontTsx3(angle,width,height){const{getHorizontalOrVerticalStartPoint,getStartCornerToIntersect}=this.__closure;angle=angle%360;if(angle<0){angle+=360;}if(angle%90===0){return getHorizontalOrVerticalStartPoint(angle,width,height);}const slope=Math.tan(angle*Math.PI/180);const perpendicularSlope=-1/slope;const startCorner=getStartCornerToIntersect(angle,width,height);const b=startCorner[1]-perpendicularSlope*startCorner[0];const startX=b/(slope-perpendicularSlope);const startY=slope*startX;return[startX,startY];}';
    tangon['code'] = report;
    michal = function(argFoo, argBar, argBaz) { // Original name: t
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argBar;
            tangon = argBaz;
            entity = argFoo;
            michal = 360;
            entity = entity % michal;
            option = 0;
            zuuluu = entity;
            if(!(zuuluu < option)) { _fun00006_ip = 32; continue _fun00005 }
 28:
            zuuluu = entity + michal;
 32:
            entity = 90;
            entity = zuuluu % entity;
            if(!(entity !== option)) { _fun00006_ip = 156; continue _fun00005 }
 43:
            entity = global;
            oscard = entity.Math;
            michal = oscard.tan;
            entity = entity.Math;
            entity = entity.PI;
            golfie = zuuluu * entity;
            entity = 180;
            entity = golfie / entity;
            oscard = michal.bind(oscard)(entity);
            entity = -1;
            entity = entity / oscard;
            golfie = _closure1_slot3;
            michal = undefined;
            michal = golfie.bind(michal)(zuuluu, report, tangon);
            golfie = 1;
            golfie = michal[golfie];
            michal = michal[option];
            michal = entity * michal;
            michal = golfie - michal;
            entity = oscard - entity;
            michal = michal / entity;
            entity = new Array(2);
            entity[0] = michal;
            michal = oscard * michal;
            entity[1] = michal;
            return entity;
 156:
            michal = _closure1_slot1;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu, report, tangon);
            return entity;
        }
    };
    report = {};
    report['getHorizontalOrVerticalStartPoint'] = golfie;
    report['getStartCornerToIntersect'] = oscard;
    michal['__closure'] = report;
    report = 11244204401624.0;
    michal['__workletHash'] = report;
    michal['__initData'] = tangon;
    report = argPlu;
    tangon = 0;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/screens/appearance/hooks/getGradientStartPont.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();