// app/modules/screen/native/DimensionsStore.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: getDimensionsStoreState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = argBar;
            option = {};
            report = _closure1_slot3;
            tangon = report.get;
            michal = 'window';
            sizing = tangon.bind(report)(michal);
            output = option;
            michal = copyDataProperties(output, sizing);
            report = _closure1_slot1;
            michal = _closure1_slot2;
            offset = 1;
            tangon = michal[offset];
            michal = undefined;
            tangon = report.bind(michal)(tangon);
            oscard = null;
            report = oscard == tangon;
            tangon = undefined;
            if(report) { _fun00002_ip = 98; continue _fun00001 }
 69:
            verify = _closure1_slot1;
            report = _closure1_slot2;
            report = report[offset];
            verify = verify.bind(michal)(report);
            report = verify.getWindowSize;
            tangon = report.bind(verify)();
 98:
            output = option;
            sizing = tangon;
            tangon = copyDataProperties(output, sizing);
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[offset];
            tangon = report.bind(michal)(tangon);
            tangon = oscard == tangon;
            verify = undefined;
            if(tangon) { _fun00002_ip = 163; continue _fun00001 }
 134:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[offset];
            report = report.bind(michal)(tangon);
            tangon = report.getScreenSize;
            verify = tangon.bind(report)();
 163:
            if(!(oscard == verify)) { _fun00002_ip = 185; continue _fun00001 }
 167:
            report = _closure1_slot3;
            tangon = report.get;
            zuuluu = 'screen';
            verify = tangon.bind(report)(zuuluu);
 185:
            report = option.fontScale;
            tangon = verify.width;
            zuuluu = verify.height;
            tangon = tangon > zuuluu;
            offset = oscard == entity;
            zuuluu = undefined;
            if(offset) { _fun00002_ip = 220; continue _fun00001 }
 214:
            zuuluu = entity.windowDimensions;
 220:
            kiloes = option.width;
            foxtra = option.height;
            option = verify.width;
            verify = verify.height;
            backup = option;
            yankee = verify;
            if(!(yankee === kiloes)) { _fun00002_ip = 256; continue _fun00001 }
 250:
            backup = verify;
            yankee = option;
 256:
            option = global;
            romeon = option.Math;
            offset = romeon.min;
            verify = golfie.left;
            kiloes = kiloes + verify;
            verify = golfie.right;
            verify = kiloes + verify;
            verify = offset.bind(romeon)(verify, backup);
            offset = option.Math;
            option = offset.min;
            romeon = golfie.top;
            foxtra = foxtra + romeon;
            romeon = golfie.bottom;
            romeon = foxtra + romeon;
            golfie = golfie.imeInsetsBottom;
            golfie = romeon - golfie;
            option = option.bind(offset)(golfie, yankee);
            offset = oscard == zuuluu;
            golfie = undefined;
            if(offset) { _fun00002_ip = 352; continue _fun00001 }
 347:
            golfie = zuuluu.width;
 352:
            if(!(golfie === verify)) { _fun00002_ip = 365; continue _fun00001 }
 356:
            golfie = zuuluu.height;
            if(!(golfie !== option)) { _fun00002_ip = 378; continue _fun00001 }
 365:
            golfie = {};
            golfie['width'] = verify;
            golfie['height'] = option;
            zuuluu = golfie;
 378:
            oscard = oscard == entity;
            michal = undefined;
            if(oscard) { _fun00002_ip = 393; continue _fun00001 }
 387:
            michal = entity.windowDimensions;
 393:
            if(!(michal === zuuluu)) { _fun00002_ip = 417; continue _fun00001 }
 397:
            michal = entity.fontScale;
            if(!(michal === report)) { _fun00002_ip = 417; continue _fun00001 }
 407:
            michal = entity.screenIsLandscape;
            if(!(michal !== tangon)) { _fun00002_ip = 437; continue _fun00001 }
 417:
            michal = {};
            michal['fontScale'] = report;
            michal['screenIsLandscape'] = tangon;
            michal['windowDimensions'] = zuuluu;
            entity = michal;
 437:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
        zuuluu = _closure1_slot5;
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
                tangon = _closure1_slot5;
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
                tangon = _closure1_slot5;
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