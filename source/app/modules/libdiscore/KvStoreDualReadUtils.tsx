// app/modules/libdiscore/KvStoreDualReadUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
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
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
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
            verify = _closure1_slot7;
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
            golfie = _closure1_slot7;
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
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: deepEqualImpl
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            michal = argBar;
            zuuluu = argBaz;
            if(!(tangon !== michal)) { _fun00008_ip = 573; continue _fun00007 }
 16:
            entity = argCor;
            if(!entity) { _fun00008_ip = 37; continue _fun00007 }
 22:
            entity = undefined;
            if(!(entity === tangon)) { _fun00008_ip = 37; continue _fun00007 }
 28:
            entity = null;
            if(!(entity !== michal)) { _fun00008_ip = 569; continue _fun00007 }
 37:
            report = 'object';
            entity = typeof tangon;
            if(!(report === entity)) { _fun00008_ip = 565; continue _fun00007 }
 51:
            entity = typeof michal;
            if(!(report === entity)) { _fun00008_ip = 565; continue _fun00007 }
 61:
            entity = null;
            if(!(entity !== tangon)) { _fun00008_ip = 565; continue _fun00007 }
 70:
            if(!(entity !== michal)) { _fun00008_ip = 565; continue _fun00007 }
 77:
            entity = zuuluu.has;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00008_ip = 549; continue _fun00007 }
 93:
            entity = zuuluu.set;
            entity = entity.bind(zuuluu)(tangon, michal);
            offset = global;
            entity = offset.Date;
            entity = tangon instanceof entity;
            if(!entity) { _fun00008_ip = 135; continue _fun00007 }
 119:
            entity = offset.Date;
            entity = michal instanceof entity;
            if(entity) { _fun00008_ip = 523; continue _fun00007 }
 135:
            entity = offset.Set;
            entity = tangon instanceof entity;
            if(!entity) { _fun00008_ip = 164; continue _fun00007 }
 148:
            entity = offset.Set;
            entity = michal instanceof entity;
            if(entity) { _fun00008_ip = 484; continue _fun00007 }
 164:
            report = offset.Array;
            entity = report.isArray;
            entity = entity.bind(report)(tangon);
            if(!entity) { _fun00008_ip = 205; continue _fun00007 }
 183:
            report = offset.Array;
            entity = report.isArray;
            entity = entity.bind(report)(michal);
            if(entity) { _fun00008_ip = 403; continue _fun00007 }
 205:
            report = offset.Array;
            entity = report.isArray;
            entity = entity.bind(report)(tangon);
            if(entity) { _fun00008_ip = 399; continue _fun00007 }
 227:
            report = offset.Array;
            entity = report.isArray;
            entity = entity.bind(report)(michal);
            if(entity) { _fun00008_ip = 399; continue _fun00007 }
 249:
            report = offset.Object;
            entity = report.keys;
            verify = entity.bind(report)(tangon);
            report = offset.Object;
            entity = report.keys;
            entity = entity.bind(report)(michal);
            report = verify.length;
            entity = entity.length;
            if(!(report === entity)) { _fun00008_ip = 395; continue _fun00007 }
 295:
            entity = verify.length;
            option = 0;
            entity = option < entity;
            report = false;
            if(!entity) { _fun00008_ip = 391; continue _fun00007 }
 314:
            entity = verify[option];
            yankee = offset.Object;
            yankee = yankee.prototype;
            romeon = yankee.hasOwnProperty;
            yankee = romeon.call;
            yankee = yankee.bind(romeon)(michal, entity);
            if(yankee) { _fun00008_ip = 351; continue _fun00007 }
 349:
            return report;
 351:
            romeon = _closure1_slot8;
            sizing = tangon[entity];
            kiloes = michal[entity];
            output = undefined;
            backup = zuuluu;
            foxtra = false;
            entity = output[romeon](sizing, kiloes, backup, foxtra, romeon);
            if(entity) { _fun00008_ip = 379; continue _fun00007 }
 377:
            return report;
 379:
            option = option + 1;
            entity = verify.length;
            if(option < entity) { _fun00008_ip = 314; continue _fun00007 }
 391:
            entity = true;
            return entity;
 395:
            entity = false;
            return entity;
 399:
            entity = false;
            return entity;
 403:
            report = tangon.length;
            entity = michal.length;
            if(!(report === entity)) { _fun00008_ip = 480; continue _fun00007 }
 417:
            entity = tangon.length;
            option = 0;
            entity = option < entity;
            report = false;
            if(!entity) { _fun00008_ip = 476; continue _fun00007 }
 436:
            offset = _closure1_slot8;
            sizing = tangon[option];
            kiloes = michal[option];
            output = undefined;
            backup = zuuluu;
            foxtra = false;
            entity = output[offset](sizing, kiloes, backup, foxtra, romeon);
            if(entity) { _fun00008_ip = 464; continue _fun00007 }
 462:
            return report;
 464:
            option = option + 1;
            entity = tangon.length;
            if(option < entity) { _fun00008_ip = 436; continue _fun00007 }
 476:
            entity = true;
            return entity;
 480:
            entity = false;
            return entity;
 484:
            oscard = _closure1_slot0;
            report = _closure1_slot3;
            entity = 1;
            report = report[entity];
            entity = undefined;
            report = oscard.bind(entity)(report);
            entity = report.areSetsEqual;
            entity = entity.bind(report)(tangon, michal);
            return entity;
 523:
            entity = tangon.getTime;
            report = entity.bind(tangon)();
            entity = michal.getTime;
            entity = entity.bind(michal)();
            entity = report === entity;
            return entity;
 549:
            entity = zuuluu.get;
            entity = entity.bind(zuuluu)(tangon);
            entity = entity === michal;
            return entity;
 565:
            entity = false;
            return entity;
 569:
            entity = true;
            return entity;
 573:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: deepEqual
        oscard = _closure1_slot8;
        entity = global;
        entity = entity.Map;
        michal = entity.prototype;
        michal = Object.create(michal, {constructor: {value: entity}});
        yankee = michal;
        entity = new yankee[entity](offset);
        option = entity instanceof Object ? entity : michal;
        yankee = undefined;
        offset = argFoo;
        verify = argBar;
        golfie = true;
        entity = yankee[oscard](offset, verify, option, golfie, oscard);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: validateRecord
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argBar;
            zuuluu = argBaz;
            michal = new Array(0);
            backup = tangon;
            entity = undefined;
            offset = 'value-mismatch';
            option = 'field-missing';
            golfie = global;
            oscard = undefined;
            report = undefined;
            for(yankee in backup)
 47:
            {
 59:
                update = yankee;
                sizing = golfie.Object;
                sizing = sizing.prototype;
                output = sizing.hasOwnProperty;
                sizing = output.call;
                sizing = sizing.bind(output)(tangon, update);
                if(!sizing) { _fun00010_ip = 47; continue _fun00009 }
 93:
                output = tangon[update];
                sizing = golfie.Object;
                sizing = sizing.prototype;
                result = sizing.hasOwnProperty;
                sizing = result.call;
                sizing = sizing.bind(result)(zuuluu, update);
                if(sizing) { _fun00010_ip = 154; continue _fun00009 }
 128:
                result = michal.push;
                sizing = {};
                sizing['type'] = option;
                sizing['field'] = update;
                sizing = result.bind(michal)(sizing);
                oscard = output;
                _fun00010_ip = 47; continue _fun00009;
 154:
                sizing = zuuluu[update];
                result = _closure1_slot9;
                result = result.bind(entity)(output, sizing);
                oscard = output;
                report = sizing;
                if(result) { _fun00010_ip = 47; continue _fun00009 }
 177:
                echoed = michal.push;
                result = {};
                result['type'] = offset;
                result['field'] = update;
                result['primaryValue'] = output;
                result['shadowValue'] = sizing;
                result = echoed.bind(michal)(result);
                oscard = output;
                report = sizing;
                _fun00010_ip = 47; continue _fun00009;
            }
 219:
            oscard = michal.length;
            report = 0;
            if(!(!(oscard > report))) { _fun00010_ip = 232; continue _fun00009 }
 230:
            return entity;
 232:
            entity = {};
            report = 'record-mismatch';
            entity['type'] = report;
            report = argFoo;
            entity['key'] = report;
            entity['primaryRecord'] = tangon;
            entity['shadowRecord'] = zuuluu;
            entity['mismatches'] = michal;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: isPlainObject
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = argFoo;
            michal = 'object';
            entity = typeof zuuluu;
            entity = michal !== entity;
            if(entity) { _fun00012_ip = 23; continue _fun00011 }
 17:
            michal = null;
            entity = michal === zuuluu;
 23:
            if(entity) { _fun00012_ip = 44; continue _fun00011 }
 26:
            michal = global;
            tangon = michal.Array;
            michal = tangon.isArray;
            entity = michal.bind(tangon)(zuuluu);
 44:
            if(entity) { _fun00012_ip = 59; continue _fun00011 }
 47:
            michal = global;
            michal = michal.Date;
            entity = zuuluu instanceof michal;
 59:
            if(entity) { _fun00012_ip = 74; continue _fun00011 }
 62:
            michal = global;
            michal = michal.Set;
            entity = zuuluu instanceof michal;
 74:
            entity = !entity;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getType
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscard = argFoo;
            entity = 'null';
            michal = null;
            if(!(michal !== oscard)) { _fun00014_ip = 55; continue _fun00013 }
 13:
            michal = typeof oscard;
            zuuluu = 'object';
            if(!(zuuluu === michal)) { _fun00014_ip = 52; continue _fun00013 }
 24:
            tangon = global;
            report = tangon.Array;
            tangon = report.isArray;
            tangon = tangon.bind(report)(oscard);
            if(!tangon) { _fun00014_ip = 49; continue _fun00013 }
 45:
            zuuluu = 'array';
 49:
            michal = zuuluu;
 52:
            entity = michal;
 55:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    tangon = global;
    verify = tangon.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = report.bind(entity)(golfie);
    golfie = golfie.AnalyticEvents;
    var _closure1_slot4 = golfie;
    tangon = tangon.Map;
    golfie = tangon.prototype;
    golfie = Object.create(golfie, {constructor: {value: tangon}});
    foxtra = golfie;
    tangon = new foxtra[tangon](romeon);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/libdiscore/KvStoreDualReadUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz) { // Original name: runDualReadValidation
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            verify = argBar;
            backup = argBaz;
            zuuluu = new Array(0);
            entity = verify.derived;
            michal = entity.length;
            entity = backup.derived;
            entity = entity.length;
            if(!(michal !== entity)) { _fun00016_ip = 90; continue _fun00015 }
 36:
            michal = zuuluu.push;
            entity = {};
            tangon = 'length-mismatch';
            entity['type'] = tangon;
            tangon = verify.derived;
            tangon = tangon.length;
            entity['primaryLength'] = tangon;
            tangon = backup.derived;
            tangon = tangon.length;
            entity['shadowLength'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 90:
            option = global;
            tangon = option.Object;
            michal = tangon.keys;
            entity = verify.root;
            foxtra = michal.bind(tangon)(entity);
            tangon = option.Object;
            michal = tangon.keys;
            entity = backup.root;
            golfie = michal.bind(tangon)(entity);
            entity = foxtra.length;
            tangon = 0;
            michal = tangon < entity;
            entity = undefined;
            yankee = null;
            offset = 'missing-record';
            oscard = 0;
            report = undefined;
            if(!michal) { _fun00016_ip = 296; continue _fun00015 }
 170:
            output = foxtra[oscard];
            michal = option.Object;
            michal = michal.prototype;
            sizing = michal.hasOwnProperty;
            kiloes = sizing.call;
            michal = backup.root;
            michal = kiloes.bind(sizing)(michal, output);
            if(michal) { _fun00016_ip = 233; continue _fun00015 }
 211:
            kiloes = zuuluu.push;
            michal = {};
            michal['type'] = offset;
            michal['key'] = output;
            michal = kiloes.bind(zuuluu)(michal);
            _fun00016_ip = 284; continue _fun00015;
 233:
            sizing = _closure1_slot10;
            michal = verify.root;
            kiloes = michal[output];
            michal = backup.root;
            michal = michal[output];
            michal = sizing.bind(entity)(output, kiloes, michal);
            report = michal;
            if(!(yankee != michal)) { _fun00016_ip = 284; continue _fun00015 }
 271:
            kiloes = zuuluu.push;
            kiloes = kiloes.bind(zuuluu)(michal);
            report = michal;
 284:
            oscard = oscard + 1;
            michal = foxtra.length;
            if(oscard < michal) { _fun00016_ip = 170; continue _fun00015 }
 296:
            michal = golfie.length;
            michal = tangon < michal;
            oscard = 'extra-record';
            report = 0;
            if(!michal) { _fun00016_ip = 389; continue _fun00015 }
 316:
            yankee = golfie[report];
            michal = option.Object;
            michal = michal.prototype;
            romeon = michal.hasOwnProperty;
            offset = romeon.call;
            michal = verify.root;
            michal = offset.bind(romeon)(michal, yankee);
            if(michal) { _fun00016_ip = 377; continue _fun00015 }
 357:
            offset = zuuluu.push;
            michal = {};
            michal['type'] = oscard;
            michal['key'] = yankee;
            michal = offset.bind(zuuluu)(michal);
 377:
            report = report + 1;
            michal = golfie.length;
            if(report < michal) { _fun00016_ip = 316; continue _fun00015 }
 389:
            michal = zuuluu.length;
            if(!(michal > tangon)) { _fun00016_ip = 411; continue _fun00015 }
 398:
            michal = function(argFoo, argBar) { // Original name: logErrors
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    report = argBar;
                    michal = report.length;
                    entity = 0;
                    if(!(entity !== michal)) { _fun00018_ip = 61; continue _fun00017 }
 16:
                    michal = new Array(0);
                    var _closure3_slot0 = michal;
                    entity = new Array(0);
                    var _closure3_slot1 = entity;
                    tangon = report.forEach;
                    zuuluu = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            entity = argFoo;
                            zuuluu = entity.type;
                            michal = 'length-mismatch';
                            if(!(michal !== zuuluu)) { _fun00020_ip = 119; continue _fun00019 }
 18:
                            michal = 'missing-record';
                            if(!(michal !== zuuluu)) { _fun00020_ip = 97; continue _fun00019 }
 28:
                            michal = 'extra-record';
                            if(!(michal !== zuuluu)) { _fun00020_ip = 73; continue _fun00019 }
 38:
                            michal = 'record-mismatch';
                            if(!(michal === zuuluu)) { _fun00020_ip = 119; continue _fun00019 }
 48:
                            tangon = entity.mismatches;
                            zuuluu = tangon.forEach;
                            michal = function(argFoo) {
                                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                                    entity = argFoo;
                                    zuuluu = entity.type;
                                    michal = 'field-missing';
                                    if(!(michal !== zuuluu)) { _fun00022_ip = 45; continue _fun00021 }
 18:
                                    tangon = entity.primaryValue;
                                    zuuluu = entity.shadowValue;
                                    michal = function(argFoo, argBar) { // Original name: logDiff
                                        tangon = function(argFoo, argBar) { // Original name: impl
                                            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                                tangon = argFoo;
                                                option = argBar;
                                                var _closure7_slot0 = tangon;
                                                var _closure7_slot1 = option;
                                                zuuluu = _closure1_slot9;
                                                entity = undefined;
                                                zuuluu = zuuluu.bind(entity)(tangon, option);
                                                if(zuuluu) { _fun00024_ip = 715; continue _fun00023 }
 37:
                                                oscard = 'object';
                                                zuuluu = typeof tangon;
                                                if(!(oscard === zuuluu)) { _fun00024_ip = 103; continue _fun00023 }
 48:
                                                zuuluu = null;
                                                if(!(zuuluu !== tangon)) { _fun00024_ip = 103; continue _fun00023 }
 54:
                                                report = typeof option;
                                                if(!(oscard === report)) { _fun00024_ip = 103; continue _fun00023 }
 61:
                                                if(!(zuuluu !== option)) { _fun00024_ip = 103; continue _fun00023 }
 65:
                                                oscard = _closure6_slot0;
                                                report = oscard.has;
                                                report = report.bind(oscard)(tangon);
                                                zuuluu = _closure6_slot0;
                                                if(report) { _fun00024_ip = 701; continue _fun00023 }
 92:
                                                report = zuuluu.set;
                                                report = report.bind(zuuluu)(tangon, option);
 103:
                                                report = global;
                                                oscard = report.Date;
                                                oscard = tangon instanceof oscard;
                                                if(!oscard) { _fun00024_ip = 134; continue _fun00023 }
 118:
                                                oscard = report.Date;
                                                oscard = option instanceof oscard;
                                                if(oscard) { _fun00024_ip = 715; continue _fun00023 }
 134:
                                                oscard = report.Set;
                                                oscard = tangon instanceof oscard;
                                                if(!oscard) { _fun00024_ip = 163; continue _fun00023 }
 147:
                                                oscard = report.Set;
                                                oscard = option instanceof oscard;
                                                if(oscard) { _fun00024_ip = 627; continue _fun00023 }
 163:
                                                golfie = report.Array;
                                                oscard = golfie.isArray;
                                                oscard = oscard.bind(golfie)(tangon);
                                                if(!oscard) { _fun00024_ip = 204; continue _fun00023 }
 182:
                                                golfie = report.Array;
                                                oscard = golfie.isArray;
                                                oscard = oscard.bind(golfie)(option);
                                                if(oscard) { _fun00024_ip = 516; continue _fun00023 }
 204:
                                                oscard = _closure1_slot11;
                                                oscard = oscard.bind(entity)(tangon);
                                                if(!oscard) { _fun00024_ip = 715; continue _fun00023 }
 219:
                                                oscard = _closure1_slot11;
                                                oscard = oscard.bind(entity)(option);
                                                if(!oscard) { _fun00024_ip = 715; continue _fun00023 }
 234:
                                                offset = report.Set;
                                                golfie = report.Object;
                                                oscard = golfie.keys;
                                                echoed = oscard.bind(golfie)(tangon);
                                                golfie = offset.prototype;
                                                golfie = Object.create(golfie, {constructor: {value: offset}});
                                                update = golfie;
                                                oscard = new update[offset](echoed, result);
                                                foxtra = oscard instanceof Object ? oscard : golfie;
                                                offset = report.Set;
                                                golfie = report.Object;
                                                oscard = golfie.keys;
                                                echoed = oscard.bind(golfie)(option);
                                                golfie = offset.prototype;
                                                golfie = Object.create(golfie, {constructor: {value: offset}});
                                                update = golfie;
                                                oscard = new update[offset](echoed, result);
                                                romeon = oscard instanceof Object ? oscard : golfie;
                                                offset = report.Set;
                                                oscard = new Array(0);
                                                output = 0;
                                                echoed = oscard;
                                                result = foxtra;
                                                output = arraySpread(echoed, result, output);
                                                echoed = oscard;
                                                result = romeon;
                                                golfie = arraySpread(echoed, result, output);
                                                golfie = offset.prototype;
                                                golfie = Object.create(golfie, {constructor: {value: offset}});
                                                update = golfie;
                                                echoed = oscard;
                                                oscard = new update[offset](echoed, result);
                                                yankee = oscard instanceof Object ? oscard : golfie;
                                                golfie = _closure1_slot6;
                                                offset = report.Array;
                                                oscard = offset.from;
                                                offset = oscard.bind(offset)(yankee);
                                                oscard = offset.sort;
                                                oscard = oscard.bind(offset)();
                                                yankee = golfie.bind(entity)(oscard);
                                                golfie = yankee.bind(entity)();
                                                oscard = golfie.done;
                                                if(oscard) { _fun00024_ip = 715; continue _fun00023 }
 426:
                                                oscard = golfie.value;
                                                backup = foxtra.has;
                                                backup = backup.bind(foxtra)(oscard);
                                                if(!backup) { _fun00024_ip = 454; continue _fun00023 }
 444:
                                                kiloes = romeon.has;
                                                backup = kiloes.bind(romeon)(oscard);
 454:
                                                if(!backup) { _fun00024_ip = 496; continue _fun00023 }
 457:
                                                sizing = _closure1_slot9;
                                                kiloes = tangon[oscard];
                                                backup = option[oscard];
                                                backup = sizing.bind(entity)(kiloes, backup);
                                                if(backup) { _fun00024_ip = 496; continue _fun00023 }
 478:
                                                kiloes = _closure6_slot1;
                                                backup = tangon[oscard];
                                                oscard = option[oscard];
                                                oscard = kiloes.bind(entity)(backup, oscard);
 496:
                                                backup = yankee.bind(entity)();
                                                oscard = backup.done;
                                                golfie = backup;
                                                if(oscard) { _fun00024_ip = 715; continue _fun00023 }
 514:
                                                _fun00024_ip = 426; continue _fun00023;
 516:
                                                offset = report.Math;
                                                golfie = offset.min;
                                                oscard = tangon.length;
                                                report = option.length;
                                                golfie = golfie.bind(offset)(oscard, report);
                                                oscard = 0;
                                                offset = oscard < golfie;
                                                if(!offset) { _fun00024_ip = 601; continue _fun00023 }
 555:
                                                romeon = _closure1_slot9;
                                                yankee = tangon[oscard];
                                                offset = option[oscard];
                                                offset = romeon.bind(entity)(yankee, offset);
                                                if(offset) { _fun00024_ip = 594; continue _fun00023 }
 576:
                                                romeon = _closure6_slot1;
                                                yankee = tangon[oscard];
                                                offset = option[oscard];
                                                offset = romeon.bind(entity)(yankee, offset);
 594:
                                                oscard = oscard + 1;
                                                if(oscard < golfie) { _fun00024_ip = 555; continue _fun00023 }
 601:
                                                oscard = tangon.length;
                                                report = option.length;
                                                if(!(!(oscard > report))) { _fun00024_ip = 715; continue _fun00023 }
 615:
                                                report = option.length;
                                                report = tangon.length;
                                                _fun00024_ip = 715; continue _fun00023;
 627:
                                                verify = new Array(0);
                                                echoed = verify;
                                                result = tangon;
                                                output = 0;
                                                report = arraySpread(echoed, result, output);
                                                golfie = verify.filter;
                                                report = function(argFoo) {
                                                    zuuluu = _closure7_slot1;
                                                    michal = zuuluu.has;
                                                    entity = argFoo;
                                                    entity = michal.bind(zuuluu)(entity);
                                                    entity = !entity;
                                                    return entity;
                                                };
                                                report = golfie.bind(verify)(report);
                                                golfie = new Array(0);
                                                echoed = golfie;
                                                result = option;
                                                oscard = arraySpread(echoed, result, output);
                                                oscard = golfie.filter;
                                                michal = function(argFoo) {
                                                    zuuluu = _closure7_slot0;
                                                    michal = zuuluu.has;
                                                    entity = argFoo;
                                                    entity = michal.bind(zuuluu)(entity);
                                                    entity = !entity;
                                                    return entity;
                                                };
                                                michal = oscard.bind(golfie)(michal);
                                                report = report.length;
                                                michal = michal.length;
                                                michal = undefined;
                                                return michal;
 701:
                                                michal = zuuluu.get;
                                                michal = michal.bind(zuuluu)(tangon);
                                                michal = undefined;
                                                return michal;
 715:
                                                return entity;
                                            }
                                        };
                                        var _closure6_slot1 = tangon;
                                        entity = global;
                                        entity = entity.Map;
                                        zuuluu = entity.prototype;
                                        zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
                                        golfie = zuuluu;
                                        entity = new golfie[entity](oscard);
                                        entity = entity instanceof Object ? entity : zuuluu;
                                        var _closure6_slot0 = entity;
                                        entity = undefined;
                                        zuuluu = argFoo;
                                        michal = argBar;
                                        michal = tangon.bind(entity)(zuuluu, michal);
                                        return entity;
                                    };
                                    entity = undefined;
                                    entity = michal.bind(entity)(tangon, zuuluu);
 45:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            michal = zuuluu.bind(tangon)(michal);
                            _fun00020_ip = 119; continue _fun00019;
 73:
                            tangon = _closure3_slot1;
                            zuuluu = tangon.push;
                            michal = entity.key;
                            michal = zuuluu.bind(tangon)(michal);
                            _fun00020_ip = 119; continue _fun00019;
 97:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.push;
                            entity = entity.key;
                            entity = michal.bind(zuuluu)(entity);
 119:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
                    michal = michal.length;
                    entity = entity.length;
                    entity = undefined;
                    return entity;
 61:
                    entity = undefined;
                    return entity;
                }
            };
            michal = michal.bind(entity)(entity, zuuluu);
 411:
            return entity;
        }
    };
    zuuluu['runDualReadValidation'] = tangon;
    michal = function(argFoo, argBar) { // Original name: logErrorsToAnalytics
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            golfie = argFoo;
            verify = argBar;
            entity = verify.length;
            yankee = 0;
            if(!(yankee !== entity)) { _fun00026_ip = 417; continue _fun00025 }
 20:
            zuuluu = _closure1_slot2;
            tangon = _closure1_slot3;
            michal = 2;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.last;
            oscard = michal.bind(zuuluu)();
            michal = null;
            if(!(michal != oscard)) { _fun00026_ip = 417; continue _fun00025 }
 64:
            report = _closure1_slot5;
            zuuluu = report.get;
            zuuluu = zuuluu.bind(report)(golfie);
            if(!(michal == zuuluu)) { _fun00026_ip = 187; continue _fun00025 }
 82:
            report = {};
            report['mismatchesReported'] = yankee;
            option = global;
            offset = option.Map;
            romeon = offset.prototype;
            romeon = Object.create(romeon, {constructor: {value: offset}});
            kiloes = romeon;
            offset = new kiloes[offset](backup);
            offset = offset instanceof Object ? offset : romeon;
            report['mismatchesByLastAction'] = offset;
            offset = option.WeakSet;
            romeon = offset.prototype;
            romeon = Object.create(romeon, {constructor: {value: offset}});
            kiloes = romeon;
            offset = new kiloes[offset](backup);
            offset = offset instanceof Object ? offset : romeon;
            report['visitedEntries'] = offset;
            option = option.Set;
            offset = option.prototype;
            offset = Object.create(offset, {constructor: {value: option}});
            kiloes = offset;
            option = new kiloes[option](backup);
            option = option instanceof Object ? option : offset;
            report['seenMismatches'] = option;
            zuuluu = report;
 187:
            option = _closure1_slot5;
            report = option.set;
            report = report.bind(option)(golfie, zuuluu);
            option = zuuluu.mismatchesReported;
            report = 15;
            if(!(!(option >= report))) { _fun00026_ip = 417; continue _fun00025 }
 218:
            option = zuuluu.mismatchesByLastAction;
            report = option.get;
            report = report.bind(option)(oscard);
            option = michal != report;
            yankee = 0;
            if(!option) { _fun00026_ip = 246; continue _fun00025 }
 243:
            yankee = report;
 246:
            option = 3;
            if(!(!(yankee >= option))) { _fun00026_ip = 417; continue _fun00025 }
 256:
            report = function(argFoo, argBar) { // Original name: generateErrorReport
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    sequen = argFoo;
                    var _closure3_slot0 = sequen;
                    vacuum = function(argFoo) { // Original name: appendMismatch
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            michal = 0;
                            sizing = 0;
                            golfie = copyRestArgs(sizing);
                            entity = golfie.length;
                            entity = michal < entity;
                            report = global;
                            tangon = '';
                            zuuluu = ':';
                            if(!entity) { _fun00030_ip = 154; continue _fun00029 }
 33:
                            verify = golfie[michal];
                            sizing = verify.fieldName;
                            backup = verify.primaryType;
                            romeon = verify.shadowType;
                            entity = report.HermesInternal;
                            entity = entity.concat;
                            output = tangon;
                            kiloes = zuuluu;
                            foxtra = zuuluu;
                            offset = output[entity](sizing, kiloes, backup, foxtra, romeon, yankee);
                            entity = _closure3_slot0;
                            option = entity.seenMismatches;
                            entity = option.has;
                            entity = entity.bind(option)(offset);
                            if(entity) { _fun00030_ip = 142; continue _fun00029 }
 102:
                            entity = _closure3_slot0;
                            option = entity.seenMismatches;
                            entity = option.add;
                            entity = entity.bind(option)(offset);
                            entity = _closure3_slot1;
                            option = entity.mismatchedFields;
                            entity = option.push;
                            entity = entity.bind(option)(verify);
 142:
                            michal = michal + 1;
                            entity = golfie.length;
                            if(michal < entity) { _fun00030_ip = 33; continue _fun00029 }
 154:
                            entity = undefined;
                            return entity;
                        }
                    };
                    var _closure3_slot2 = vacuum;
                    ctrled = function(argFoo, argBar, argBaz) { // Original name: appendDeepMismatches
                        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                            output = argFoo;
                            sizing = argBar;
                            kiloes = argBaz;
                            backup = arguments[3];
                            entity = undefined;
                            if(!(backup === entity)) { _fun00032_ip = 46; continue _fun00031 }
 18:
                            michal = global;
                            michal = michal.Set;
                            zuuluu = michal.prototype;
                            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                            papara = zuuluu;
                            michal = new papara[michal](cntext);
                            backup = michal instanceof Object ? michal : zuuluu;
 46:
                            foxtra = global;
                            zuuluu = foxtra.Object;
                            michal = zuuluu.keys;
                            romeon = michal.bind(zuuluu)(sizing);
                            michal = romeon.length;
                            yankee = 0;
                            michal = yankee < michal;
                            verify = null;
                            golfie = 'object';
                            oscard = 'missing';
                            report = '';
                            tangon = '.';
                            zuuluu = undefined;
                            if(!michal) { _fun00032_ip = 414; continue _fun00031 }
 107:
                            michal = romeon[yankee];
                            result = foxtra.HermesInternal;
                            result = result.concat;
                            update = result.bind(report)(output, tangon, michal);
                            echoed = sizing[michal];
                            result = foxtra.Object;
                            result = result.prototype;
                            source = result.hasOwnProperty;
                            result = source.call;
                            result = result.bind(source)(kiloes, michal);
                            if(result) { _fun00032_ip = 204; continue _fun00031 }
 164:
                            source = _closure3_slot2;
                            result = {};
                            result['fieldName'] = update;
                            ctrled = _closure1_slot12;
                            ctrled = ctrled.bind(entity)(echoed);
                            result['primaryType'] = ctrled;
                            result['shadowType'] = oscard;
                            result = source.bind(entity)(result);
                            _fun00032_ip = 399; continue _fun00031;
 204:
                            michal = kiloes[michal];
                            zuuluu = michal;
                            if(!(echoed !== michal)) { _fun00032_ip = 399; continue _fun00031 }
 218:
                            result = typeof echoed;
                            if(!(golfie === result)) { _fun00032_ip = 232; continue _fun00031 }
 225:
                            result = typeof michal;
                            if(!(golfie !== result)) { _fun00032_ip = 277; continue _fun00031 }
 232:
                            source = _closure3_slot2;
                            result = {};
                            result['fieldName'] = update;
                            ctrled = _closure1_slot12;
                            vacuum = ctrled.bind(entity)(echoed);
                            result['primaryType'] = vacuum;
                            ctrled = ctrled.bind(entity)(michal);
                            result['shadowType'] = ctrled;
                            result = source.bind(entity)(result);
                            zuuluu = michal;
                            _fun00032_ip = 399; continue _fun00031;
 277:
                            source = foxtra.Array;
                            result = source.isArray;
                            result = result.bind(source)(echoed);
                            if(!result) { _fun00032_ip = 315; continue _fun00031 }
 296:
                            source = foxtra.Array;
                            result = source.isArray;
                            result = result.bind(source)(michal);
                            if(result) { _fun00032_ip = 385; continue _fun00031 }
 315:
                            result = verify != echoed;
                            if(!result) { _fun00032_ip = 326; continue _fun00031 }
 322:
                            result = verify != michal;
 326:
                            zuuluu = michal;
                            if(!result) { _fun00032_ip = 399; continue _fun00031 }
 332:
                            result = backup.has;
                            result = result.bind(backup)(echoed);
                            zuuluu = michal;
                            if(result) { _fun00032_ip = 399; continue _fun00031 }
 348:
                            result = backup.add;
                            result = result.bind(backup)(echoed);
                            result = _closure3_slot3;
                            papara = undefined;
                            cntext = update;
                            record = echoed;
                            config = michal;
                            sequen = backup;
                            result = papara[result](cntext, record, config, sequen, vacuum);
                            zuuluu = michal;
                            _fun00032_ip = 399; continue _fun00031;
 385:
                            result = _closure3_slot4;
                            result = result.bind(entity)(update, echoed, michal);
                            zuuluu = michal;
 399:
                            yankee = yankee + 1;
                            michal = romeon.length;
                            if(yankee < michal) { _fun00032_ip = 107; continue _fun00031 }
 414:
                            return entity;
                        }
                    };
                    var _closure3_slot3 = ctrled;
                    source = function(argFoo, argBar, argBaz) { // Original name: appendArrayMismatches
                        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                            report = argBar;
                            tangon = argBaz;
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot3;
                            entity = 4;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.areArraysShallowEqual;
                            michal = michal.bind(zuuluu)(report, tangon);
                            if(michal) { _fun00034_ip = 101; continue _fun00033 }
 46:
                            zuuluu = _closure3_slot2;
                            michal = {'fieldName': null, 'primaryType': 'array', 'shadowType': 'array'};
                            oscard = argFoo;
                            michal['fieldName'] = oscard;
                            report = report.length;
                            michal['primaryArrayLength'] = report;
                            tangon = tangon.length;
                            michal['secondaryArrayLength'] = tangon;
                            michal = zuuluu.bind(entity)(michal);
 101:
                            return entity;
                        }
                    };
                    var _closure3_slot4 = source;
                    michal = {'numExtraKeys': 0, 'numMissingKeys': 0};
                    tangon = 0;
                    zuuluu = new Array(0);
                    michal['mismatchedFields'] = zuuluu;
                    var _closure3_slot1 = michal;
                    zuuluu = _closure1_slot6;
                    echoed = undefined;
                    entity = argBar;
                    result = zuuluu.bind(echoed)(entity);
                    report = result.bind(echoed)();
                    zuuluu = report.done;
                    output = 'missing';
                    sizing = global;
                    kiloes = 'object';
                    entity = null;
                    backup = 'value-mismatch';
                    foxtra = 'field-missing';
                    romeon = 'record-mismatch';
                    yankee = 'missing-record';
                    offset = 'extra-record';
                    verify = report;
                    option = undefined;
                    golfie = undefined;
                    oscard = undefined;
                    report = undefined;
                    if(zuuluu) { _fun00028_ip = 702; continue _fun00027 }
 146:
                    sierra = verify.value;
                    zuuluu = sierra.type;
                    if(!(offset !== zuuluu)) { _fun00028_ip = 645; continue _fun00027 }
 163:
                    if(!(yankee !== zuuluu)) { _fun00028_ip = 616; continue _fun00027 }
 170:
                    papara = option;
                    cntext = golfie;
                    record = oscard;
                    config = report;
                    if(!(romeon === zuuluu)) { _fun00028_ip = 672; continue _fun00027 }
 189:
                    status = sequen.visitedEntries;
                    target = status.has;
                    zuuluu = sierra.primaryRecord;
                    zuuluu = target.bind(status)(zuuluu);
                    papara = option;
                    cntext = golfie;
                    record = oscard;
                    config = report;
                    if(zuuluu) { _fun00028_ip = 672; continue _fun00027 }
 229:
                    status = sequen.visitedEntries;
                    target = status.add;
                    zuuluu = sierra.primaryRecord;
                    zuuluu = target.bind(status)(zuuluu);
                    target = _closure1_slot6;
                    zuuluu = sierra.mismatches;
                    status = target.bind(echoed)(zuuluu);
                    limora = status.bind(echoed)();
                    zuuluu = limora.done;
                    target = limora;
                    papara = target;
                    cntext = status;
                    record = oscard;
                    config = report;
                    if(zuuluu) { _fun00028_ip = 672; continue _fun00027 }
 296:
                    whisks = target.value;
                    limora = whisks.field;
                    zuuluu = limora.toString;
                    limora = zuuluu.bind(limora)();
                    zuuluu = whisks.type;
                    if(!(foxtra !== zuuluu)) { _fun00028_ip = 526; continue _fun00027 }
 328:
                    if(!(backup === zuuluu)) { _fun00028_ip = 584; continue _fun00027 }
 335:
                    zuuluu = whisks.primaryValue;
                    if(!(entity !== zuuluu)) { _fun00028_ip = 381; continue _fun00027 }
 345:
                    zuuluu = whisks.shadowValue;
                    if(!(entity !== zuuluu)) { _fun00028_ip = 381; continue _fun00027 }
 355:
                    zuuluu = whisks.primaryValue;
                    zuuluu = typeof zuuluu;
                    if(!(kiloes === zuuluu)) { _fun00028_ip = 381; continue _fun00027 }
 368:
                    zuuluu = whisks.shadowValue;
                    zuuluu = typeof zuuluu;
                    if(!(kiloes !== zuuluu)) { _fun00028_ip = 434; continue _fun00027 }
 381:
                    zuuluu = {};
                    zuuluu['fieldName'] = limora;
                    quebec = _closure1_slot12;
                    equals = whisks.primaryValue;
                    equals = quebec.bind(echoed)(equals);
                    zuuluu['primaryType'] = equals;
                    equals = whisks.shadowValue;
                    equals = quebec.bind(echoed)(equals);
                    zuuluu['shadowType'] = equals;
                    zuuluu = vacuum.bind(echoed)(zuuluu);
                    _fun00028_ip = 584; continue _fun00027;
 434:
                    quebec = sizing.Array;
                    equals = quebec.isArray;
                    zuuluu = whisks.primaryValue;
                    zuuluu = equals.bind(quebec)(zuuluu);
                    if(!zuuluu) { _fun00028_ip = 484; continue _fun00027 }
 459:
                    quebec = sizing.Array;
                    equals = quebec.isArray;
                    zuuluu = whisks.shadowValue;
                    zuuluu = equals.bind(quebec)(zuuluu);
                    if(zuuluu) { _fun00028_ip = 505; continue _fun00027 }
 484:
                    equals = whisks.primaryValue;
                    zuuluu = whisks.shadowValue;
                    zuuluu = ctrled.bind(echoed)(limora, equals, zuuluu);
                    _fun00028_ip = 584; continue _fun00027;
 505:
                    equals = whisks.primaryValue;
                    zuuluu = whisks.shadowValue;
                    zuuluu = source.bind(echoed)(limora, equals, zuuluu);
                    _fun00028_ip = 584; continue _fun00027;
 526:
                    quebec = michal.mismatchedFields;
                    equals = quebec.push;
                    zuuluu = {};
                    zuuluu['fieldName'] = limora;
                    variable37 = _closure1_slot12;
                    variable38 = sierra.primaryRecord;
                    variable36 = whisks.field;
                    variable36 = variable38[variable36];
                    variable36 = variable37.bind(echoed)(variable36);
                    zuuluu['primaryType'] = variable36;
                    zuuluu['shadowType'] = output;
                    zuuluu = equals.bind(quebec)(zuuluu);
 584:
                    equals = status.bind(echoed)();
                    zuuluu = equals.done;
                    target = equals;
                    papara = target;
                    cntext = status;
                    record = whisks;
                    config = limora;
                    if(zuuluu) { _fun00028_ip = 672; continue _fun00027 }
 611:
                    _fun00028_ip = 296; continue _fun00027;
 616:
                    zuuluu = michal.numMissingKeys;
                    zuuluu = zuuluu + 1;
                    michal['numMissingKeys'] = zuuluu;
                    papara = option;
                    cntext = golfie;
                    record = oscard;
                    config = report;
                    _fun00028_ip = 672; continue _fun00027;
 645:
                    zuuluu = michal.numExtraKeys;
                    zuuluu = zuuluu + 1;
                    michal['numExtraKeys'] = zuuluu;
                    papara = option;
                    cntext = golfie;
                    record = oscard;
                    config = report;
 672:
                    target = result.bind(echoed)();
                    zuuluu = target.done;
                    option = papara;
                    golfie = cntext;
                    oscard = record;
                    report = config;
                    verify = target;
                    if(!zuuluu) { _fun00028_ip = 146; continue _fun00027 }
 702:
                    zuuluu = michal.mismatchedFields;
                    report = zuuluu.length;
                    zuuluu = michal.numExtraKeys;
                    report = report + zuuluu;
                    zuuluu = michal.numMissingKeys;
                    zuuluu = report + zuuluu;
                    if(!(zuuluu !== tangon)) { _fun00028_ip = 739; continue _fun00027 }
 737:
                    return michal;
 739:
                    return entity;
                }
            };
            report = report.bind(tangon)(zuuluu, verify);
            if(!(michal != report)) { _fun00026_ip = 417; continue _fun00025 }
 276:
            offset = zuuluu.mismatchesByLastAction;
            verify = offset.set;
            michal = 1;
            michal = yankee + michal;
            michal = verify.bind(offset)(oscard, michal);
            michal = zuuluu.mismatchesReported;
            michal = michal + 1;
            zuuluu['mismatchesReported'] = michal;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            michal = michal[option];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.track;
            entity = _closure1_slot4;
            michal = entity.LIBDISCORE_KV_DUAL_READ_ERROR;
            entity = {};
            entity['store_name'] = golfie;
            entity['action_type'] = oscard;
            oscard = report.numMissingKeys;
            entity['num_missing_keys'] = oscard;
            oscard = report.numExtraKeys;
            entity['num_extra_keys'] = oscard;
            oscard = global;
            golfie = oscard.JSON;
            oscard = golfie.stringify;
            report = report.mismatchedFields;
            report = oscard.bind(golfie)(report);
            entity['mismatched_fields'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
 417:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['logErrorsToAnalytics'] = michal;
    return entity;
})();