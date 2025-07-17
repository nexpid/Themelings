// app/modules/potions/components/web/utils/ConsumableUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot16;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot16;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    report = function(argFoo) { // Original name: useConsumableFetchUnconsumedEntitlement
        offset = argFoo;
        var _closure2_slot0 = offset;
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 12;
        michal = tangon[michal];
        option = undefined;
        golfie = zuuluu.bind(option)(michal);
        report = golfie.useUserCanPurchaseMessageConfetti;
        michal = 'Utils.tsx';
        verify = report.bind(golfie)(michal);
        var _closure2_slot1 = verify;
        michal = 10;
        michal = tangon[michal];
        report = zuuluu.bind(option)(michal);
        tangon = report.useStateFromStoresArray;
        michal = _closure1_slot11;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot11;
            entity = zuuluu.isEntitlementFetched;
            tangon = _closure2_slot0;
            zuuluu = entity.bind(zuuluu)(tangon);
            entity = new Array(5);
            entity[0] = zuuluu;
            report = _closure1_slot11;
            zuuluu = report.fetchPotionCount;
            zuuluu = zuuluu.bind(report)(tangon);
            entity[1] = zuuluu;
            report = _closure1_slot11;
            zuuluu = report.isEntitlementFetching;
            zuuluu = zuuluu.bind(report)(tangon);
            entity[2] = zuuluu;
            report = _closure1_slot11;
            zuuluu = report.getEntitlement;
            zuuluu = zuuluu.bind(report)(tangon);
            entity[3] = zuuluu;
            zuuluu = _closure1_slot11;
            michal = zuuluu.getErrored;
            michal = michal.bind(zuuluu)(tangon);
            entity[4] = michal;
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu, michal);
        zuuluu = _closure1_slot3;
        michal = 5;
        golfie = zuuluu.bind(option)(tangon, michal);
        michal = 0;
        zuuluu = golfie[michal];
        var _closure2_slot2 = zuuluu;
        michal = 1;
        tangon = golfie[michal];
        michal = 2;
        yankee = golfie[michal];
        var _closure2_slot3 = yankee;
        michal = 3;
        report = golfie[michal];
        michal = 4;
        michal = golfie[michal];
        var _closure2_slot4 = michal;
        golfie = _closure1_slot4;
        oscard = new Array(5);
        oscard[0] = zuuluu;
        oscard[1] = yankee;
        oscard[2] = offset;
        oscard[3] = verify;
        oscard[4] = michal;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = _closure2_slot4;
                michal = null;
                michal = michal != zuuluu;
                if(michal) { _fun00008_ip = 20; continue _fun00007 }
 16:
                michal = _closure2_slot2;
 20:
                if(michal) { _fun00008_ip = 27; continue _fun00007 }
 23:
                michal = _closure2_slot3;
 27:
                if(michal) { _fun00008_ip = 37; continue _fun00007 }
 30:
                zuuluu = _closure2_slot1;
                michal = !zuuluu;
 37:
                if(michal) { _fun00008_ip = 80; continue _fun00007 }
 40:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 11;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.fetchConsumableEntitlement;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
 80:
                entity = undefined;
                return entity;
            }
        };
        entity = golfie.bind(option)(entity, oscard);
        entity = {};
        entity['entitlement'] = report;
        entity['numPotions'] = tangon;
        entity['fetchedEntitlement'] = zuuluu;
        entity['error'] = michal;
        return entity;
    };
    var _closure1_slot17 = report;
    tangon = function(argFoo, argBar) { // Original name: useHDPotionTrigger
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            oscard = argBar;
            var _closure2_slot0 = oscard;
            golfie = _closure1_slot5;
            entity = undefined;
            report = true;
            report = golfie.bind(entity)(report);
            var _closure2_slot1 = report;
            report = null;
            golfie = report == tangon;
            report = undefined;
            if(golfie) { _fun00010_ip = 49; continue _fun00009 }
 43:
            report = tangon.hdStreamingUntil;
 49:
            var _closure2_slot2 = report;
            tangon = _closure1_slot5;
            tangon = tangon.bind(entity)(oscard);
            var _closure2_slot3 = tangon;
            oscard = _closure1_slot4;
            tangon = function() {
                michal = _closure2_slot3;
                entity = _closure2_slot0;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            tangon = oscard.bind(entity)(tangon);
            tangon = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = report;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot1;
                    michal = michal.current;
                    if(michal) { _fun00012_ip = 112; continue _fun00011 }
 15:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    zuuluu = michal != zuuluu;
                    michal = undefined;
                    if(!zuuluu) { _fun00012_ip = 110; continue _fun00011 }
 30:
                    zuuluu = global;
                    golfie = zuuluu.Date;
                    option = _closure2_slot2;
                    oscard = golfie.prototype;
                    oscard = Object.create(oscard, {constructor: {value: golfie}});
                    verify = oscard;
                    report = new verify[golfie](option, golfie);
                    report = report instanceof Object ? report : oscard;
                    zuuluu = zuuluu.Date;
                    oscard = zuuluu.prototype;
                    oscard = Object.create(oscard, {constructor: {value: zuuluu}});
                    verify = oscard;
                    zuuluu = new verify[zuuluu](option);
                    zuuluu = zuuluu instanceof Object ? zuuluu : oscard;
                    zuuluu = report > zuuluu;
                    michal = undefined;
                    if(!zuuluu) { _fun00012_ip = 110; continue _fun00011 }
 97:
                    tangon = _closure2_slot3;
                    zuuluu = tangon.current;
                    michal = zuuluu.bind(tangon)();
 110:
                    return michal;
 112:
                    michal = _closure2_slot1;
                    entity = false;
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        }
    };
    var _closure1_slot18 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    offset = oscard.useEffect;
    var _closure1_slot4 = offset;
    oscard = oscard.useRef;
    var _closure1_slot5 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot8 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot9 = oscard;
    oscard = 6;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot10 = oscard;
    oscard = 7;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot11 = oscard;
    oscard = 8;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.EntitlementTypes;
    var _closure1_slot12 = oscard;
    oscard = 9;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.ApplicationStreamFPS;
    var _closure1_slot13 = verify;
    oscard = oscard.ApplicationStreamResolutions;
    var _closure1_slot14 = oscard;
    oscard = 18;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/potions/components/web/utils/ConsumableUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: useConsumableFetchSkuPrice
        option = argFoo;
        var _closure2_slot0 = option;
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 10;
        michal = tangon[michal];
        golfie = undefined;
        oscard = zuuluu.bind(golfie)(michal);
        tangon = oscard.useStateFromStoresArray;
        michal = _closure1_slot11;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot11;
            entity = zuuluu.isFetchingPrice;
            tangon = _closure2_slot0;
            zuuluu = entity.bind(zuuluu)(tangon);
            entity = new Array(3);
            entity[0] = zuuluu;
            report = _closure1_slot11;
            zuuluu = report.getPrice;
            zuuluu = zuuluu.bind(report)(tangon);
            entity[1] = zuuluu;
            zuuluu = _closure1_slot11;
            michal = zuuluu.getErrored;
            michal = michal.bind(zuuluu)(tangon);
            entity[2] = michal;
            return entity;
        };
        tangon = tangon.bind(oscard)(zuuluu, michal);
        zuuluu = _closure1_slot3;
        michal = 3;
        oscard = zuuluu.bind(golfie)(tangon, michal);
        michal = 0;
        zuuluu = oscard[michal];
        var _closure2_slot1 = zuuluu;
        michal = 1;
        tangon = oscard[michal];
        var _closure2_slot2 = tangon;
        michal = 2;
        michal = oscard[michal];
        var _closure2_slot3 = michal;
        oscard = _closure1_slot4;
        report = new Array(4);
        report[0] = zuuluu;
        report[1] = tangon;
        report[2] = michal;
        report[3] = option;
        entity = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = _closure2_slot1;
                if(michal) { _fun00014_ip = 20; continue _fun00013 }
 10:
                tangon = _closure2_slot2;
                zuuluu = null;
                michal = zuuluu != tangon;
 20:
                if(michal) { _fun00014_ip = 27; continue _fun00013 }
 23:
                michal = _closure2_slot3;
 27:
                if(michal) { _fun00014_ip = 70; continue _fun00013 }
 30:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 11;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.fetchConsumablePrice;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
 70:
                entity = undefined;
                return entity;
            }
        };
        entity = oscard.bind(golfie)(entity, report);
        entity = {};
        entity['price'] = tangon;
        entity['fetchingPrice'] = zuuluu;
        entity['error'] = michal;
        return entity;
    };
    zuuluu['useConsumableFetchSkuPrice'] = oscard;
    zuuluu['useConsumableFetchUnconsumedEntitlement'] = report;
    zuuluu['useHDPotionTrigger'] = tangon;
    tangon = function(argFoo) { // Original name: useUpgradeOnHDPotionTrigger
        tangon = argFoo;
        var _closure2_slot0 = tangon;
        zuuluu = _closure1_slot18;
        entity = undefined;
        michal = function() {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = _closure1_slot7;
                michal = zuuluu.getCurrentUserActiveStream;
                zuuluu = michal.bind(zuuluu)();
                michal = null;
                if(!(michal != zuuluu)) { _fun00016_ip = 198; continue _fun00015 }
 26:
                tangon = zuuluu.channelId;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.id;
                if(!(tangon === zuuluu)) { _fun00016_ip = 198; continue _fun00015 }
 50:
                tangon = _closure1_slot8;
                zuuluu = tangon.getState;
                zuuluu = zuuluu.bind(tangon)();
                option = zuuluu.goLiveSource;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 11;
                zuuluu = tangon[zuuluu];
                tangon = undefined;
                report = report.bind(tangon)(zuuluu);
                zuuluu = report.savePreviousGoLiveSettings;
                oscard = michal == option;
                michal = undefined;
                if(oscard) { _fun00016_ip = 113; continue _fun00015 }
 107:
                michal = option.quality;
 113:
                michal = zuuluu.bind(report)(michal);
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 13;
                michal = report[michal];
                golfie = zuuluu.bind(tangon)(michal);
                oscard = golfie.constructGoLiveSource;
                michal = _closure1_slot14;
                zuuluu = michal.RESOLUTION_1440;
                michal = _closure1_slot13;
                michal = michal.FPS_60;
                zuuluu = oscard.bind(golfie)(zuuluu, michal, option);
                michal = _closure1_slot1;
                entity = 14;
                entity = report[entity];
                michal = michal.bind(tangon)(entity);
                entity = michal.setGoLiveSource;
                entity = entity.bind(michal)(zuuluu);
 198:
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    zuuluu['useUpgradeOnHDPotionTrigger'] = tangon;
    tangon = function() { // Original name: useSkipHDPotionAnimation
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 15;
            zuuluu = report[zuuluu];
            golfie = undefined;
            zuuluu = tangon.bind(golfie)(zuuluu);
            zuuluu = zuuluu.name;
            tangon = null;
            report = tangon != zuuluu;
            tangon = 'unknown';
            if(!report) { _fun00018_ip = 48; continue _fun00017 }
 45:
            tangon = zuuluu;
 48:
            zuuluu = tangon.toLowerCase;
            tangon = zuuluu.bind(tangon)();
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            report = 10;
            zuuluu = option[report];
            yankee = oscard.bind(golfie)(zuuluu);
            offset = yankee.useStateFromStores;
            zuuluu = _closure1_slot10;
            verify = new Array(1);
            verify[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot10;
                entity = michal.isFocused;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = offset.bind(yankee)(verify, zuuluu);
            report = option[report];
            oscard = oscard.bind(golfie)(report);
            report = oscard.useStateFromStores;
            golfie = _closure1_slot6;
            michal = new Array(1);
            michal[0] = golfie;
            entity = function() {
                entity = _closure1_slot6;
                entity = entity.useReducedMotion;
                return entity;
            };
            michal = report.bind(oscard)(michal, entity);
            entity = 'safari';
            entity = entity === tangon;
            if(entity) { _fun00018_ip = 163; continue _fun00017 }
 160:
            entity = !zuuluu;
 163:
            if(entity) { _fun00018_ip = 169; continue _fun00017 }
 166:
            entity = michal;
 169:
            return entity;
        }
    };
    zuuluu['useSkipHDPotionAnimation'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: canAddConfettiToMessageOnSend
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = argCor;
            entity = argBar;
            entity = !entity;
            if(!entity) { _fun00020_ip = 65; continue _fun00019 }
 12:
            tangon = null;
            michal = argBaz;
            michal = tangon == michal;
            if(!michal) { _fun00020_ip = 62; continue _fun00019 }
 24:
            oscard = '';
            zuuluu = argFoo;
            zuuluu = oscard !== zuuluu;
            if(zuuluu) { _fun00020_ip = 59; continue _fun00019 }
 38:
            tangon = tangon != report;
            if(!tangon) { _fun00020_ip = 56; continue _fun00019 }
 45:
            oscard = report.length;
            report = 0;
            tangon = oscard > report;
 56:
            zuuluu = tangon;
 59:
            michal = zuuluu;
 62:
            entity = michal;
 65:
            return entity;
        }
    };
    zuuluu['canAddConfettiToMessageOnSend'] = tangon;
    tangon = function(argFoo) { // Original name: constructCreateConfettiPotionRequest
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity == zuuluu)) { _fun00022_ip = 13; continue _fun00021 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = {};
            michal = {};
            tangon = zuuluu.emoji;
            tangon = tangon.id;
            michal['id'] = tangon;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 11;
            report = report[tangon];
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            tangon = report.convertEmojiToEmojiName;
            zuuluu = zuuluu.emoji;
            zuuluu = tangon.bind(report)(zuuluu);
            michal['name'] = zuuluu;
            entity['message_emoji'] = michal;
            return entity;
        }
    };
    zuuluu['constructCreateConfettiPotionRequest'] = tangon;
    tangon = function(argFoo) { // Original name: getSentConfettiPotionEmoji
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity != michal)) { _fun00024_ip = 250; continue _fun00023 }
 12:
            zuuluu = michal.potions;
            if(!(entity != zuuluu)) { _fun00024_ip = 248; continue _fun00023 }
 25:
            zuuluu = michal.potions;
            tangon = zuuluu.length;
            zuuluu = 0;
            if(!(zuuluu !== tangon)) { _fun00024_ip = 246; continue _fun00023 }
 45:
            tangon = _closure1_slot15;
            michal = michal.potions;
            offset = undefined;
            verify = tangon.bind(offset)(michal);
            tangon = verify.bind(offset)();
            michal = tangon.done;
            option = 16;
            golfie = tangon;
            oscard = undefined;
            report = undefined;
            if(michal) { _fun00024_ip = 244; continue _fun00023 }
 90:
            michal = golfie.value;
            foxtra = michal.type;
            romeon = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[option];
            tangon = romeon.bind(offset)(tangon);
            tangon = tangon.MessagePotionTypes;
            tangon = tangon.CONFETTI;
            romeon = report;
            if(!(foxtra === tangon)) { _fun00024_ip = 209; continue _fun00023 }
 136:
            foxtra = michal.used_by;
            backup = _closure1_slot9;
            tangon = backup.getCurrentUser;
            backup = tangon.bind(backup)();
            kiloes = entity == backup;
            tangon = undefined;
            if(kiloes) { _fun00024_ip = 169; continue _fun00023 }
 164:
            tangon = backup.id;
 169:
            oscard = backup;
            romeon = report;
            if(!(foxtra === tangon)) { _fun00024_ip = 209; continue _fun00023 }
 179:
            foxtra = michal.emoji;
            kiloes = entity == foxtra;
            tangon = undefined;
            if(kiloes) { _fun00024_ip = 199; continue _fun00023 }
 194:
            tangon = foxtra.length;
 199:
            oscard = backup;
            romeon = foxtra;
            if(!(!(tangon > zuuluu))) { _fun00024_ip = 232; continue _fun00023 }
 209:
            foxtra = verify.bind(offset)();
            tangon = foxtra.done;
            report = romeon;
            golfie = foxtra;
            if(tangon) { _fun00024_ip = 244; continue _fun00023 }
 227:
            _fun00024_ip = 90; continue _fun00023;
 232:
            michal = michal.emoji;
            michal = michal[zuuluu];
            return michal;
 244:
            return entity;
 246:
            return entity;
 248:
            return entity;
 250:
            return entity;
        }
    };
    zuuluu['getSentConfettiPotionEmoji'] = tangon;
    michal = function() {
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            zuuluu = _closure1_slot17;
            report = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 17;
            entity = michal[entity];
            michal = undefined;
            entity = report.bind(michal)(entity);
            entity = entity.CONFETTI_POTION_SKU_ID;
            entity = zuuluu.bind(michal)(entity);
            report = entity.entitlement;
            zuuluu = entity.numPotions;
            michal = null;
            entity = michal != report;
            if(!entity) { _fun00026_ip = 80; continue _fun00025 }
 61:
            report = report.type;
            tangon = _closure1_slot12;
            tangon = tangon.PURCHASE;
            entity = report === tangon;
 80:
            if(!entity) { _fun00026_ip = 87; continue _fun00025 }
 83:
            entity = michal != zuuluu;
 87:
            if(!entity) { _fun00026_ip = 96; continue _fun00025 }
 90:
            michal = 0;
            entity = zuuluu > michal;
 96:
            return entity;
        }
    };
    zuuluu['useHasRemainingConfettiPotions'] = michal;
    return entity;
})();