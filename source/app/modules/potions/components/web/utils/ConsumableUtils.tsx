// app/modules/potions/components/web/utils/ConsumableUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
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
            verify = _closure1_slot11;
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
            golfie = _closure1_slot11;
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
    var _closure1_slot10 = entity;
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
    var _closure1_slot11 = entity;
    tangon = function(argFoo) { // Original name: useConsumableFetchUnconsumedEntitlement
        offset = argFoo;
        var _closure2_slot0 = offset;
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 9;
        michal = tangon[michal];
        option = undefined;
        golfie = zuuluu.bind(option)(michal);
        report = golfie.useUserCanPurchaseMessageConfetti;
        michal = 'Utils.tsx';
        verify = report.bind(golfie)(michal);
        var _closure2_slot1 = verify;
        michal = 7;
        michal = tangon[michal];
        report = zuuluu.bind(option)(michal);
        tangon = report.useStateFromStoresArray;
        michal = _closure1_slot8;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot8;
            entity = zuuluu.isEntitlementFetched;
            tangon = _closure2_slot0;
            zuuluu = entity.bind(zuuluu)(tangon);
            entity = new Array(5);
            entity[0] = zuuluu;
            report = _closure1_slot8;
            zuuluu = report.fetchPotionCount;
            zuuluu = zuuluu.bind(report)(tangon);
            entity[1] = zuuluu;
            report = _closure1_slot8;
            zuuluu = report.isEntitlementFetching;
            zuuluu = zuuluu.bind(report)(tangon);
            entity[2] = zuuluu;
            report = _closure1_slot8;
            zuuluu = report.getEntitlement;
            zuuluu = zuuluu.bind(report)(tangon);
            entity[3] = zuuluu;
            zuuluu = _closure1_slot8;
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
                michal = 8;
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
    var _closure1_slot12 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.useEffect;
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.EntitlementTypes;
    var _closure1_slot9 = report;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/potions/components/web/utils/ConsumableUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: useConsumableFetchSkuPrice
        option = argFoo;
        var _closure2_slot0 = option;
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 7;
        michal = tangon[michal];
        golfie = undefined;
        oscard = zuuluu.bind(golfie)(michal);
        tangon = oscard.useStateFromStoresArray;
        michal = _closure1_slot8;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot8;
            entity = zuuluu.isFetchingPrice;
            tangon = _closure2_slot0;
            zuuluu = entity.bind(zuuluu)(tangon);
            entity = new Array(3);
            entity[0] = zuuluu;
            report = _closure1_slot8;
            zuuluu = report.getPrice;
            zuuluu = zuuluu.bind(report)(tangon);
            entity[1] = zuuluu;
            zuuluu = _closure1_slot8;
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
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = _closure2_slot1;
                if(michal) { _fun00010_ip = 20; continue _fun00009 }
 10:
                tangon = _closure2_slot2;
                zuuluu = null;
                michal = zuuluu != tangon;
 20:
                if(michal) { _fun00010_ip = 27; continue _fun00009 }
 23:
                michal = _closure2_slot3;
 27:
                if(michal) { _fun00010_ip = 70; continue _fun00009 }
 30:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 8;
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
    zuuluu['useConsumableFetchSkuPrice'] = report;
    zuuluu['useConsumableFetchUnconsumedEntitlement'] = tangon;
    tangon = function() { // Original name: useSkipHDPotionAnimation
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 10;
            zuuluu = report[zuuluu];
            golfie = undefined;
            zuuluu = tangon.bind(golfie)(zuuluu);
            zuuluu = zuuluu.name;
            tangon = null;
            report = tangon != zuuluu;
            tangon = 'unknown';
            if(!report) { _fun00012_ip = 48; continue _fun00011 }
 45:
            tangon = zuuluu;
 48:
            zuuluu = tangon.toLowerCase;
            tangon = zuuluu.bind(tangon)();
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            report = 7;
            zuuluu = option[report];
            yankee = oscard.bind(golfie)(zuuluu);
            offset = yankee.useStateFromStores;
            zuuluu = _closure1_slot7;
            verify = new Array(1);
            verify[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot7;
                entity = michal.isFocused;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = offset.bind(yankee)(verify, zuuluu);
            report = option[report];
            oscard = oscard.bind(golfie)(report);
            report = oscard.useStateFromStores;
            golfie = _closure1_slot5;
            michal = new Array(1);
            michal[0] = golfie;
            entity = function() {
                entity = _closure1_slot5;
                entity = entity.useReducedMotion;
                return entity;
            };
            michal = report.bind(oscard)(michal, entity);
            entity = 'safari';
            entity = entity === tangon;
            if(entity) { _fun00012_ip = 163; continue _fun00011 }
 160:
            entity = !zuuluu;
 163:
            if(entity) { _fun00012_ip = 169; continue _fun00011 }
 166:
            entity = michal;
 169:
            return entity;
        }
    };
    zuuluu['useSkipHDPotionAnimation'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: canAddConfettiToMessageOnSend
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argCor;
            entity = argBar;
            entity = !entity;
            if(!entity) { _fun00014_ip = 65; continue _fun00013 }
 12:
            tangon = null;
            michal = argBaz;
            michal = tangon == michal;
            if(!michal) { _fun00014_ip = 62; continue _fun00013 }
 24:
            oscard = '';
            zuuluu = argFoo;
            zuuluu = oscard !== zuuluu;
            if(zuuluu) { _fun00014_ip = 59; continue _fun00013 }
 38:
            tangon = tangon != report;
            if(!tangon) { _fun00014_ip = 56; continue _fun00013 }
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
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity == zuuluu)) { _fun00016_ip = 13; continue _fun00015 }
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
            tangon = 8;
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
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity != michal)) { _fun00018_ip = 250; continue _fun00017 }
 12:
            zuuluu = michal.potions;
            if(!(entity != zuuluu)) { _fun00018_ip = 248; continue _fun00017 }
 25:
            zuuluu = michal.potions;
            tangon = zuuluu.length;
            zuuluu = 0;
            if(!(zuuluu !== tangon)) { _fun00018_ip = 246; continue _fun00017 }
 45:
            tangon = _closure1_slot10;
            michal = michal.potions;
            offset = undefined;
            verify = tangon.bind(offset)(michal);
            tangon = verify.bind(offset)();
            michal = tangon.done;
            option = 11;
            golfie = tangon;
            oscard = undefined;
            report = undefined;
            if(michal) { _fun00018_ip = 244; continue _fun00017 }
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
            if(!(foxtra === tangon)) { _fun00018_ip = 209; continue _fun00017 }
 136:
            foxtra = michal.used_by;
            backup = _closure1_slot6;
            tangon = backup.getCurrentUser;
            backup = tangon.bind(backup)();
            kiloes = entity == backup;
            tangon = undefined;
            if(kiloes) { _fun00018_ip = 169; continue _fun00017 }
 164:
            tangon = backup.id;
 169:
            oscard = backup;
            romeon = report;
            if(!(foxtra === tangon)) { _fun00018_ip = 209; continue _fun00017 }
 179:
            foxtra = michal.emoji;
            kiloes = entity == foxtra;
            tangon = undefined;
            if(kiloes) { _fun00018_ip = 199; continue _fun00017 }
 194:
            tangon = foxtra.length;
 199:
            oscard = backup;
            romeon = foxtra;
            if(!(!(tangon > zuuluu))) { _fun00018_ip = 232; continue _fun00017 }
 209:
            foxtra = verify.bind(offset)();
            tangon = foxtra.done;
            report = romeon;
            golfie = foxtra;
            if(tangon) { _fun00018_ip = 244; continue _fun00017 }
 227:
            _fun00018_ip = 90; continue _fun00017;
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
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = _closure1_slot12;
            report = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            entity = michal[entity];
            michal = undefined;
            entity = report.bind(michal)(entity);
            entity = entity.CONFETTI_POTION_SKU_ID;
            entity = zuuluu.bind(michal)(entity);
            report = entity.entitlement;
            zuuluu = entity.numPotions;
            michal = null;
            entity = michal != report;
            if(!entity) { _fun00020_ip = 80; continue _fun00019 }
 61:
            report = report.type;
            tangon = _closure1_slot9;
            tangon = tangon.PURCHASE;
            entity = report === tangon;
 80:
            if(!entity) { _fun00020_ip = 87; continue _fun00019 }
 83:
            entity = michal != zuuluu;
 87:
            if(!entity) { _fun00020_ip = 96; continue _fun00019 }
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