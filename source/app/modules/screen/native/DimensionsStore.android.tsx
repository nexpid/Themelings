// app/modules/screen/native/DimensionsStore.android.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: computeWindowDimensions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            option = argBar;
            michal = argCor;
            zuuluu = argGra;
            offset = michal.width;
            golfie = michal.height;
            michal = zuuluu.width;
            zuuluu = zuuluu.height;
            verify = michal;
            oscard = zuuluu;
            if(!(oscard === offset)) { _fun00002_ip = 48; continue _fun00001 }
 42:
            verify = zuuluu;
            oscard = michal;
 48:
            michal = global;
            report = michal.Math;
            tangon = report.min;
            zuuluu = option.left;
            offset = offset + zuuluu;
            zuuluu = option.right;
            zuuluu = offset + zuuluu;
            tangon = tangon.bind(report)(zuuluu, verify);
            report = michal.Math;
            zuuluu = report.min;
            michal = option.top;
            golfie = golfie + michal;
            michal = option.bottom;
            golfie = golfie + michal;
            verify = argBaz;
            michal = 0;
            if(verify) { _fun00002_ip = 128; continue _fun00001 }
 122:
            michal = option.imeInsetsBottom;
 128:
            michal = golfie - michal;
            zuuluu = zuuluu.bind(report)(michal, oscard);
            michal = null;
            report = michal == entity;
            michal = undefined;
            if(report) { _fun00002_ip = 154; continue _fun00001 }
 149:
            michal = entity.width;
 154:
            if(!(michal === tangon)) { _fun00002_ip = 167; continue _fun00001 }
 158:
            michal = entity.height;
            if(!(michal !== zuuluu)) { _fun00002_ip = 180; continue _fun00001 }
 167:
            michal = {};
            michal['width'] = tangon;
            michal['height'] = zuuluu;
            entity = michal;
 180:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo, argBar) { // Original name: getDimensionsStoreState
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            romeon = argBar;
            yankee = {};
            report = _closure1_slot3;
            tangon = report.get;
            michal = 'window';
            sizing = tangon.bind(report)(michal);
            output = yankee;
            michal = copyDataProperties(output, sizing);
            report = _closure1_slot1;
            michal = _closure1_slot2;
            oscard = 1;
            tangon = michal[oscard];
            michal = undefined;
            tangon = report.bind(michal)(tangon);
            golfie = null;
            report = golfie == tangon;
            tangon = undefined;
            if(report) { _fun00004_ip = 98; continue _fun00003 }
 69:
            option = _closure1_slot1;
            report = _closure1_slot2;
            report = report[oscard];
            option = option.bind(michal)(report);
            report = option.getWindowSize;
            tangon = report.bind(option)();
 98:
            output = yankee;
            sizing = tangon;
            tangon = copyDataProperties(output, sizing);
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[oscard];
            tangon = report.bind(michal)(tangon);
            tangon = golfie == tangon;
            offset = undefined;
            if(tangon) { _fun00004_ip = 163; continue _fun00003 }
 134:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[oscard];
            report = report.bind(michal)(tangon);
            tangon = report.getScreenSize;
            offset = tangon.bind(report)();
 163:
            if(!(golfie == offset)) { _fun00004_ip = 185; continue _fun00003 }
 167:
            oscard = _closure1_slot3;
            report = oscard.get;
            tangon = 'screen';
            offset = report.bind(oscard)(tangon);
 185:
            oscard = yankee.fontScale;
            report = offset.width;
            tangon = offset.height;
            report = report > tangon;
            tangon = golfie == entity;
            verify = undefined;
            if(tangon) { _fun00004_ip = 220; continue _fun00003 }
 214:
            verify = entity.windowDimensions;
 220:
            option = _closure1_slot5;
            kiloes = false;
            result = undefined;
            output = verify;
            sizing = romeon;
            backup = yankee;
            foxtra = offset;
            tangon = result[option](output, sizing, kiloes, backup, foxtra, romeon);
            kiloes = true;
            output = verify;
            sizing = romeon;
            backup = yankee;
            foxtra = offset;
            zuuluu = result[option](output, sizing, kiloes, backup, foxtra, romeon);
            golfie = golfie == entity;
            michal = undefined;
            if(golfie) { _fun00004_ip = 277; continue _fun00003 }
 271:
            michal = entity.windowDimensions;
 277:
            if(!(michal === tangon)) { _fun00004_ip = 301; continue _fun00003 }
 281:
            michal = entity.fontScale;
            if(!(michal === oscard)) { _fun00004_ip = 301; continue _fun00003 }
 291:
            michal = entity.screenIsLandscape;
            if(!(michal !== report)) { _fun00004_ip = 326; continue _fun00003 }
 301:
            michal = {};
            michal['fontScale'] = oscard;
            michal['screenIsLandscape'] = report;
            michal['windowDimensions'] = tangon;
            michal['windowDimensionsIgnoringKeyboard'] = zuuluu;
            entity = michal;
 326:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    verify = michal.Dimensions;
    var _closure1_slot3 = verify;
    michal = 2;
    michal = oscard[michal];
    offset = report.bind(entity)(michal);
    golfie = offset.create;
    michal = function() {
        zuuluu = _closure1_slot6;
        tangon = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 3;
        entity = michal[entity];
        michal = undefined;
        tangon = tangon.bind(michal)(entity);
        entity = tangon.getSafeAreaInsets;
        entity = entity.bind(tangon)();
        entity = zuuluu.bind(michal)(michal, entity);
        return entity;
    };
    michal = golfie.bind(offset)(michal);
    var _closure1_slot4 = michal;
    golfie = 4;
    golfie = oscard[golfie];
    option = option.bind(entity)(golfie);
    golfie = function(argFoo) {
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 5;
        zuuluu = zuuluu[michal];
        michal = undefined;
        zuuluu = tangon.bind(michal)(zuuluu);
        michal = zuuluu.batchUpdates;
        entity = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                tangon = _closure1_slot6;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    golfie = option.bind(entity)(golfie);
    option = verify.addEventListener;
    golfie = 'change';
    tangon = function() {
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.batchUpdates;
        entity = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                tangon = _closure1_slot6;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 3;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = michal.getSafeAreaInsets;
                michal = entity.bind(michal)();
                entity = argFoo;
                entity = tangon.bind(zuuluu)(entity, michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = option.bind(verify)(golfie, tangon);
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/screen/native/DimensionsStore.android.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();