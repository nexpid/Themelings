// app/uikit-native/color_picker/ColorPickerUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
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
    tangon = 'function normalizeValue_ColorPickerUtilsTsx1(value){if(value<0)return 0;if(value>1)return 1;return value;}';
    entity['code'] = tangon;
    var _closure1_slot0 = entity;
    tangon = function() {
        entity = function(argFoo) { // Original name: normalizeValue
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argFoo;
                entity = 0;
                michal = zuuluu < entity;
                if(michal) { _fun00002_ip = 28; continue _fun00001 }
 12:
                michal = 1;
                tangon = zuuluu > michal;
                if(tangon) { _fun00002_ip = 25; continue _fun00001 }
 22:
                michal = zuuluu;
 25:
                entity = michal;
 28:
                return entity;
            }
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 4078966449794.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot0;
        entity['__initData'] = michal;
        return entity;
    };
    entity = undefined;
    report = tangon.bind(entity)();
    tangon = {};
    oscard = 'function hsvToRgbWorklet_ColorPickerUtilsTsx2({h:h,s:s,v:v}){let r=0;let g=0;let b=0;h/=360;var i=Math.floor(h*6);var f=h*6-i;var p=v*(1-s);var q=v*(1-f*s);var t=v*(1-(1-f)*s);switch(i%6){case 0:r=v;g=t;b=p;break;case 1:r=q;g=v;b=p;break;case 2:r=p;g=v;b=t;break;case 3:r=p;g=q;b=v;break;case 4:r=t;g=p;b=v;break;case 5:r=v;g=p;b=q;break;}return[Math.round(r*255),Math.round(g*255),Math.round(b*255)];}';
    tangon['code'] = oscard;
    var _closure1_slot1 = tangon;
    tangon = function() {
        entity = function(argFoo) { // Original name: hsvToRgbWorklet
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                michal = entity.h;
                verify = entity.s;
                golfie = entity.v;
                entity = 360;
                entity = michal / entity;
                zuuluu = global;
                tangon = zuuluu.Math;
                michal = tangon.floor;
                report = 6;
                entity = report * entity;
                tangon = michal.bind(tangon)(entity);
                oscard = entity - tangon;
                entity = 1;
                michal = entity - verify;
                michal = golfie * michal;
                option = oscard * verify;
                option = entity - option;
                option = golfie * option;
                oscard = entity - oscard;
                oscard = oscard * verify;
                oscard = entity - oscard;
                oscard = golfie * oscard;
                offset = tangon % report;
                report = 0;
                if(!(report !== offset)) { _fun00004_ip = 200; continue _fun00003 }
 107:
                if(!(entity !== offset)) { _fun00004_ip = 189; continue _fun00003 }
 111:
                entity = 2;
                if(!(entity !== offset)) { _fun00004_ip = 178; continue _fun00003 }
 118:
                entity = 3;
                if(!(entity !== offset)) { _fun00004_ip = 167; continue _fun00003 }
 125:
                entity = 4;
                if(!(entity !== offset)) { _fun00004_ip = 156; continue _fun00003 }
 132:
                verify = 5;
                entity = 0;
                tangon = 0;
                report = 0;
                if(!(verify === offset)) { _fun00004_ip = 209; continue _fun00003 }
 145:
                entity = golfie;
                tangon = michal;
                report = option;
                _fun00004_ip = 209; continue _fun00003;
 156:
                entity = oscard;
                tangon = michal;
                report = golfie;
                _fun00004_ip = 209; continue _fun00003;
 167:
                entity = michal;
                tangon = option;
                report = golfie;
                _fun00004_ip = 209; continue _fun00003;
 178:
                entity = michal;
                tangon = golfie;
                report = oscard;
                _fun00004_ip = 209; continue _fun00003;
 189:
                entity = option;
                tangon = golfie;
                report = michal;
                _fun00004_ip = 209; continue _fun00003;
 200:
                entity = golfie;
                tangon = oscard;
                report = michal;
 209:
                golfie = zuuluu.Math;
                oscard = golfie.round;
                michal = 255;
                entity = michal * entity;
                oscard = oscard.bind(golfie)(entity);
                entity = new Array(3);
                entity[0] = oscard;
                golfie = zuuluu.Math;
                oscard = golfie.round;
                tangon = michal * tangon;
                tangon = oscard.bind(golfie)(tangon);
                entity[1] = tangon;
                tangon = zuuluu.Math;
                zuuluu = tangon.round;
                michal = michal * report;
                michal = zuuluu.bind(tangon)(michal);
                entity[2] = michal;
                return entity;
            }
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 14555937576302.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot1;
        entity['__initData'] = michal;
        return entity;
    };
    tangon = tangon.bind(entity)();
    oscard = {};
    golfie = 'function hslToRgbWorklet_ColorPickerUtilsTsx3({h:h,s:s,l:l}){let r=0;let g=0;let b=0;const c=(1-Math.abs(2*l-1))*s;const x=c*(1-Math.abs(h/60%2-1));const m=l-c/2;if(h===360||0<=h&&h<60){r=c;g=x;b=0;}else if(60<=h&&h<120){r=x;g=c;b=0;}else if(120<=h&&h<180){r=0;g=c;b=x;}else if(180<=h&&h<240){r=0;g=x;b=c;}else if(240<=h&&h<300){r=x;g=0;b=c;}else if(300<=h&&h<360){r=c;g=0;b=x;}return[Math.round((r+m)*255),Math.round((g+m)*255),Math.round((b+m)*255)];}';
    oscard['code'] = golfie;
    var _closure1_slot2 = oscard;
    michal = function() {
        entity = function(argFoo) { // Original name: hslToRgbWorklet
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                yankee = entity.h;
                oscard = entity.s;
                michal = entity.l;
                zuuluu = global;
                option = zuuluu.Math;
                golfie = option.abs;
                entity = 2;
                tangon = entity * michal;
                report = 1;
                tangon = tangon - report;
                tangon = golfie.bind(option)(tangon);
                tangon = report - tangon;
                option = tangon * oscard;
                golfie = zuuluu.Math;
                oscard = golfie.abs;
                verify = 60;
                tangon = yankee / verify;
                tangon = tangon % entity;
                tangon = tangon - report;
                tangon = oscard.bind(golfie)(tangon);
                tangon = report - tangon;
                report = option * tangon;
                entity = option / entity;
                oscard = michal - entity;
                golfie = 0;
                offset = 360;
                entity = option;
                tangon = report;
                michal = 0;
                if(!(offset !== yankee)) { _fun00006_ip = 286; continue _fun00005 }
 130:
                if(!(golfie <= yankee)) { _fun00006_ip = 152; continue _fun00005 }
 134:
                romeon = yankee < verify;
                entity = option;
                tangon = report;
                michal = 0;
                if(romeon) { _fun00006_ip = 286; continue _fun00005 }
 152:
                if(!(verify <= yankee)) { _fun00006_ip = 174; continue _fun00005 }
 156:
                verify = 120;
                verify = yankee < verify;
                entity = report;
                tangon = option;
                michal = 0;
                if(verify) { _fun00006_ip = 286; continue _fun00005 }
 174:
                verify = 120;
                if(!(verify <= yankee)) { _fun00006_ip = 199; continue _fun00005 }
 181:
                verify = 180;
                verify = yankee < verify;
                entity = 0;
                tangon = option;
                michal = report;
                if(verify) { _fun00006_ip = 286; continue _fun00005 }
 199:
                verify = 180;
                if(!(verify <= yankee)) { _fun00006_ip = 224; continue _fun00005 }
 206:
                verify = 240;
                verify = yankee < verify;
                entity = 0;
                tangon = report;
                michal = option;
                if(verify) { _fun00006_ip = 286; continue _fun00005 }
 224:
                verify = 240;
                if(!(verify <= yankee)) { _fun00006_ip = 252; continue _fun00005 }
 231:
                verify = 300;
                verify = yankee < verify;
                entity = report;
                tangon = 0;
                michal = option;
                if(verify) { _fun00006_ip = 286; continue _fun00005 }
 252:
                verify = 300;
                verify = verify <= yankee;
                if(!verify) { _fun00006_ip = 269; continue _fun00005 }
 265:
                verify = yankee < offset;
 269:
                entity = 0;
                tangon = 0;
                michal = 0;
                if(!verify) { _fun00006_ip = 286; continue _fun00005 }
 278:
                entity = option;
                tangon = 0;
                michal = report;
 286:
                option = zuuluu.Math;
                golfie = option.round;
                report = 255;
                entity = entity + oscard;
                entity = report * entity;
                golfie = golfie.bind(option)(entity);
                entity = new Array(3);
                entity[0] = golfie;
                option = zuuluu.Math;
                golfie = option.round;
                tangon = tangon + oscard;
                tangon = report * tangon;
                tangon = golfie.bind(option)(tangon);
                entity[1] = tangon;
                tangon = zuuluu.Math;
                zuuluu = tangon.round;
                michal = michal + oscard;
                michal = report * michal;
                michal = zuuluu.bind(tangon)(michal);
                entity[2] = michal;
                return entity;
            }
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 13811670810842.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot2;
        entity['__initData'] = michal;
        return entity;
    };
    michal = michal.bind(entity)();
    golfie = argPlu;
    oscard = 0;
    golfie = golfie[oscard];
    oscard = argBar;
    option = oscard.bind(entity)(golfie);
    golfie = option.fileFinishedImporting;
    oscard = 'uikit-native/color_picker/ColorPickerUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['normalizeValue'] = report;
    zuuluu['hsvToRgbWorklet'] = tangon;
    zuuluu['hslToRgbWorklet'] = michal;
    return entity;
})();