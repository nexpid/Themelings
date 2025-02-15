// app/uikit-native/color_picker/ColorPickerUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
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
    tango = 'function normalizeValue_ColorPickerUtilsTsx1(value){if(value<0)return 0;if(value>1)return 1;return value;}';
    entity['code'] = tango;
    var _closure1_slot0 = entity;
    tango = function() {
        entity = function(argFoo) { // Original name: normalizeValue
            _fun93160: for(var _fun93160_ip = 0; ; ) switch(_fun93160_ip) {
 0:
                zulu = argFoo;
                entity = 0;
                mike = zulu < entity;
                if(mike) { _fun93160_ip = 28; continue _fun93160 }
 12:
                mike = 1;
                tango = zulu > mike;
                if(tango) { _fun93160_ip = 25; continue _fun93160 }
 22:
                mike = zulu;
 25:
                entity = mike;
 28:
                return entity;
            }
        };
        mike = {};
        entity['__closure'] = mike;
        mike = 4078966449794.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot0;
        entity['__initData'] = mike;
        return entity;
    };
    entity = undefined;
    report = tango.bind(entity)();
    tango = {};
    oscar = 'function hsvToRgbWorklet_ColorPickerUtilsTsx2({h:h,s:s,v:v}){let r=0;let g=0;let b=0;h/=360;var i=Math.floor(h*6);var f=h*6-i;var p=v*(1-s);var q=v*(1-f*s);var t=v*(1-(1-f)*s);switch(i%6){case 0:r=v;g=t;b=p;break;case 1:r=q;g=v;b=p;break;case 2:r=p;g=v;b=t;break;case 3:r=p;g=q;b=v;break;case 4:r=t;g=p;b=v;break;case 5:r=v;g=p;b=q;break;}return[Math.round(r*255),Math.round(g*255),Math.round(b*255)];}';
    tango['code'] = oscar;
    var _closure1_slot1 = tango;
    tango = function() {
        entity = function(argFoo) { // Original name: hsvToRgbWorklet
            _fun93162: for(var _fun93162_ip = 0; ; ) switch(_fun93162_ip) {
 0:
                entity = argFoo;
                mike = entity.h;
                verify = entity.s;
                golf = entity.v;
                entity = 360;
                entity = mike / entity;
                zulu = global;
                tango = zulu.Math;
                mike = tango.floor;
                report = 6;
                entity = report * entity;
                tango = mike.bind(tango)(entity);
                oscar = entity - tango;
                entity = 1;
                mike = entity - verify;
                mike = golf * mike;
                options = oscar * verify;
                options = entity - options;
                options = golf * options;
                oscar = entity - oscar;
                oscar = oscar * verify;
                oscar = entity - oscar;
                oscar = golf * oscar;
                offset = tango % report;
                report = 0;
                if(!(report !== offset)) { _fun93162_ip = 200; continue _fun93162 }
 107:
                if(!(entity !== offset)) { _fun93162_ip = 189; continue _fun93162 }
 111:
                entity = 2;
                if(!(entity !== offset)) { _fun93162_ip = 178; continue _fun93162 }
 118:
                entity = 3;
                if(!(entity !== offset)) { _fun93162_ip = 167; continue _fun93162 }
 125:
                entity = 4;
                if(!(entity !== offset)) { _fun93162_ip = 156; continue _fun93162 }
 132:
                verify = 5;
                entity = 0;
                tango = 0;
                report = 0;
                if(!(verify === offset)) { _fun93162_ip = 209; continue _fun93162 }
 145:
                entity = golf;
                tango = mike;
                report = options;
                _fun93162_ip = 209; continue _fun93162;
 156:
                entity = oscar;
                tango = mike;
                report = golf;
                _fun93162_ip = 209; continue _fun93162;
 167:
                entity = mike;
                tango = options;
                report = golf;
                _fun93162_ip = 209; continue _fun93162;
 178:
                entity = mike;
                tango = golf;
                report = oscar;
                _fun93162_ip = 209; continue _fun93162;
 189:
                entity = options;
                tango = golf;
                report = mike;
                _fun93162_ip = 209; continue _fun93162;
 200:
                entity = golf;
                tango = oscar;
                report = mike;
 209:
                golf = zulu.Math;
                oscar = golf.round;
                mike = 255;
                entity = mike * entity;
                oscar = oscar.bind(golf)(entity);
                entity = new Array(3);
                entity[0] = oscar;
                golf = zulu.Math;
                oscar = golf.round;
                tango = mike * tango;
                tango = oscar.bind(golf)(tango);
                entity[1] = tango;
                tango = zulu.Math;
                zulu = tango.round;
                mike = mike * report;
                mike = zulu.bind(tango)(mike);
                entity[2] = mike;
                return entity;
            }
        };
        mike = {};
        entity['__closure'] = mike;
        mike = 14555937576302.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot1;
        entity['__initData'] = mike;
        return entity;
    };
    tango = tango.bind(entity)();
    oscar = {};
    golf = 'function hslToRgbWorklet_ColorPickerUtilsTsx3({h:h,s:s,l:l}){let r=0;let g=0;let b=0;const c=(1-Math.abs(2*l-1))*s;const x=c*(1-Math.abs(h/60%2-1));const m=l-c/2;if(h===360||0<=h&&h<60){r=c;g=x;b=0;}else if(60<=h&&h<120){r=x;g=c;b=0;}else if(120<=h&&h<180){r=0;g=c;b=x;}else if(180<=h&&h<240){r=0;g=x;b=c;}else if(240<=h&&h<300){r=x;g=0;b=c;}else if(300<=h&&h<360){r=c;g=0;b=x;}return[Math.round((r+m)*255),Math.round((g+m)*255),Math.round((b+m)*255)];}';
    oscar['code'] = golf;
    var _closure1_slot2 = oscar;
    mike = function() {
        entity = function(argFoo) { // Original name: hslToRgbWorklet
            _fun93164: for(var _fun93164_ip = 0; ; ) switch(_fun93164_ip) {
 0:
                entity = argFoo;
                yankee = entity.h;
                oscar = entity.s;
                mike = entity.l;
                zulu = global;
                options = zulu.Math;
                golf = options.abs;
                entity = 2;
                tango = entity * mike;
                report = 1;
                tango = tango - report;
                tango = golf.bind(options)(tango);
                tango = report - tango;
                options = tango * oscar;
                golf = zulu.Math;
                oscar = golf.abs;
                verify = 60;
                tango = yankee / verify;
                tango = tango % entity;
                tango = tango - report;
                tango = oscar.bind(golf)(tango);
                tango = report - tango;
                report = options * tango;
                entity = options / entity;
                oscar = mike - entity;
                golf = 0;
                offset = 360;
                entity = options;
                tango = report;
                mike = 0;
                if(!(offset !== yankee)) { _fun93164_ip = 286; continue _fun93164 }
 130:
                if(!(golf <= yankee)) { _fun93164_ip = 152; continue _fun93164 }
 134:
                romeo = yankee < verify;
                entity = options;
                tango = report;
                mike = 0;
                if(romeo) { _fun93164_ip = 286; continue _fun93164 }
 152:
                if(!(verify <= yankee)) { _fun93164_ip = 174; continue _fun93164 }
 156:
                verify = 120;
                verify = yankee < verify;
                entity = report;
                tango = options;
                mike = 0;
                if(verify) { _fun93164_ip = 286; continue _fun93164 }
 174:
                verify = 120;
                if(!(verify <= yankee)) { _fun93164_ip = 199; continue _fun93164 }
 181:
                verify = 180;
                verify = yankee < verify;
                entity = 0;
                tango = options;
                mike = report;
                if(verify) { _fun93164_ip = 286; continue _fun93164 }
 199:
                verify = 180;
                if(!(verify <= yankee)) { _fun93164_ip = 224; continue _fun93164 }
 206:
                verify = 240;
                verify = yankee < verify;
                entity = 0;
                tango = report;
                mike = options;
                if(verify) { _fun93164_ip = 286; continue _fun93164 }
 224:
                verify = 240;
                if(!(verify <= yankee)) { _fun93164_ip = 252; continue _fun93164 }
 231:
                verify = 300;
                verify = yankee < verify;
                entity = report;
                tango = 0;
                mike = options;
                if(verify) { _fun93164_ip = 286; continue _fun93164 }
 252:
                verify = 300;
                verify = verify <= yankee;
                if(!verify) { _fun93164_ip = 269; continue _fun93164 }
 265:
                verify = yankee < offset;
 269:
                entity = 0;
                tango = 0;
                mike = 0;
                if(!verify) { _fun93164_ip = 286; continue _fun93164 }
 278:
                entity = options;
                tango = 0;
                mike = report;
 286:
                options = zulu.Math;
                golf = options.round;
                report = 255;
                entity = entity + oscar;
                entity = report * entity;
                golf = golf.bind(options)(entity);
                entity = new Array(3);
                entity[0] = golf;
                options = zulu.Math;
                golf = options.round;
                tango = tango + oscar;
                tango = report * tango;
                tango = golf.bind(options)(tango);
                entity[1] = tango;
                tango = zulu.Math;
                zulu = tango.round;
                mike = mike + oscar;
                mike = report * mike;
                mike = zulu.bind(tango)(mike);
                entity[2] = mike;
                return entity;
            }
        };
        mike = {};
        entity['__closure'] = mike;
        mike = 13811670810842.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot2;
        entity['__initData'] = mike;
        return entity;
    };
    mike = mike.bind(entity)();
    golf = argPlugh;
    oscar = 0;
    golf = golf[oscar];
    oscar = argBar;
    options = oscar.bind(entity)(golf);
    golf = options.fileFinishedImporting;
    oscar = 'uikit-native/color_picker/ColorPickerUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['normalizeValue'] = report;
    zulu['hsvToRgbWorklet'] = tango;
    zulu['hslToRgbWorklet'] = mike;
    return entity;
})();