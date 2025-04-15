// app/modules/screen/native/DimensionsStore.android.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    offset = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: computeWindowDimensions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = argBaz;
            michal = argCor;
            romeon = zuuluu.width;
            offset = zuuluu.height;
            tangon = michal.width;
            report = michal.height;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            oscard = oscard.bind(michal)(zuuluu);
            zuuluu = oscard.getSafeAreaInsets;
            zuuluu = zuuluu.bind(oscard)();
            yankee = tangon;
            golfie = report;
            if(!(golfie === romeon)) { _fun00002_ip = 80; continue _fun00001 }
 74:
            yankee = report;
            golfie = tangon;
 80:
            report = global;
            option = report.Math;
            oscard = option.min;
            tangon = zuuluu.left;
            romeon = romeon + tangon;
            tangon = zuuluu.right;
            tangon = romeon + tangon;
            tangon = oscard.bind(option)(tangon, yankee);
            oscard = report.Math;
            report = oscard.min;
            option = zuuluu.top;
            option = offset + option;
            zuuluu = zuuluu.bottom;
            option = option + zuuluu;
            offset = argBar;
            zuuluu = 0;
            if(offset) { _fun00002_ip = 184; continue _fun00001 }
 154:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 4;
            verify = yankee[verify];
            offset = offset.bind(michal)(verify);
            verify = offset.getSystemKeyboardHeight;
            zuuluu = verify.bind(offset)();
 184:
            zuuluu = option - zuuluu;
            zuuluu = report.bind(oscard)(zuuluu, golfie);
            report = null;
            report = report == entity;
            michal = undefined;
            if(report) { _fun00002_ip = 210; continue _fun00001 }
 205:
            michal = entity.width;
 210:
            if(!(michal === tangon)) { _fun00002_ip = 223; continue _fun00001 }
 214:
            michal = entity.height;
            if(!(michal !== zuuluu)) { _fun00002_ip = 236; continue _fun00001 }
 223:
            michal = {};
            michal['width'] = tangon;
            michal['height'] = zuuluu;
            entity = michal;
 236:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo) { // Original name: getDimensionsStoreState
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            yankee = {};
            report = _closure1_slot3;
            tangon = report.get;
            michal = 'window';
            backup = tangon.bind(report)(michal);
            kiloes = yankee;
            michal = copyDataProperties(kiloes, backup);
            report = _closure1_slot1;
            michal = _closure1_slot2;
            oscard = 2;
            tangon = michal[oscard];
            michal = undefined;
            tangon = report.bind(michal)(tangon);
            golfie = null;
            report = golfie == tangon;
            tangon = undefined;
            if(report) { _fun00004_ip = 95; continue _fun00003 }
 66:
            option = _closure1_slot1;
            report = _closure1_slot2;
            report = report[oscard];
            option = option.bind(michal)(report);
            report = option.getWindowSize;
            tangon = report.bind(option)();
 95:
            kiloes = yankee;
            backup = tangon;
            tangon = copyDataProperties(kiloes, backup);
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[oscard];
            tangon = report.bind(michal)(tangon);
            tangon = golfie == tangon;
            offset = undefined;
            if(tangon) { _fun00004_ip = 160; continue _fun00003 }
 131:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[oscard];
            report = report.bind(michal)(tangon);
            tangon = report.getScreenSize;
            offset = tangon.bind(report)();
 160:
            if(!(golfie == offset)) { _fun00004_ip = 182; continue _fun00003 }
 164:
            oscard = _closure1_slot3;
            report = oscard.get;
            tangon = 'screen';
            offset = report.bind(oscard)(tangon);
 182:
            oscard = yankee.fontScale;
            report = offset.width;
            tangon = offset.height;
            report = report > tangon;
            option = golfie == entity;
            tangon = undefined;
            if(option) { _fun00004_ip = 217; continue _fun00003 }
 211:
            tangon = entity.windowDimensions;
 217:
            option = golfie == entity;
            verify = undefined;
            if(option) { _fun00004_ip = 232; continue _fun00003 }
 226:
            verify = entity.windowDimensionsIgnoringKeyboard;
 232:
            option = _closure1_slot5;
            backup = false;
            sizing = undefined;
            kiloes = tangon;
            foxtra = yankee;
            romeon = offset;
            tangon = sizing[option](kiloes, backup, foxtra, romeon, yankee);
            backup = true;
            kiloes = verify;
            foxtra = yankee;
            romeon = offset;
            zuuluu = sizing[option](kiloes, backup, foxtra, romeon, yankee);
            golfie = golfie == entity;
            michal = undefined;
            if(golfie) { _fun00004_ip = 283; continue _fun00003 }
 277:
            michal = entity.windowDimensions;
 283:
            if(!(michal === tangon)) { _fun00004_ip = 307; continue _fun00003 }
 287:
            michal = entity.fontScale;
            if(!(michal === oscard)) { _fun00004_ip = 307; continue _fun00003 }
 297:
            michal = entity.screenIsLandscape;
            if(!(michal !== report)) { _fun00004_ip = 332; continue _fun00003 }
 307:
            michal = {};
            michal['fontScale'] = oscard;
            michal['screenIsLandscape'] = report;
            michal['windowDimensions'] = tangon;
            michal['windowDimensionsIgnoringKeyboard'] = zuuluu;
            entity = michal;
 332:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function() { // Original name: updateDimensionsStoreState
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                zuuluu = _closure1_slot6;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    verify = michal.Dimensions;
    var _closure1_slot3 = verify;
    michal = 1;
    michal = oscard[michal];
    option = offset.bind(entity)(michal);
    michal = 6;
    michal = oscard[michal];
    yankee = report.bind(entity)(michal);
    golfie = yankee.create;
    michal = function() {
        michal = _closure1_slot6;
        entity = undefined;
        entity = michal.bind(entity)(entity);
        return entity;
    };
    michal = golfie.bind(yankee)(michal);
    var _closure1_slot4 = michal;
    golfie = 7;
    golfie = oscard[golfie];
    offset = offset.bind(entity)(golfie);
    golfie = function() {
        michal = _closure1_slot7;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    golfie = offset.bind(entity)(golfie);
    golfie = function() {
        michal = _closure1_slot7;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    golfie = option.bind(entity)(golfie);
    option = verify.addEventListener;
    golfie = 'change';
    tangon = function() {
        michal = _closure1_slot7;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    tangon = option.bind(verify)(golfie, tangon);
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/screen/native/DimensionsStore.android.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();