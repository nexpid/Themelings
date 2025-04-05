// app/modules/message_request/hooks/useMessageRequestActions.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
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
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot11;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot11;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
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
 345:
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
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MessageRequestAnalyticsAction;
    var _closure1_slot7 = golfie;
    tangon = tangon.BATCH_REJECT_LIMIT;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot9 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/message_request/hooks/useMessageRequestActions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useMessageRequestActions
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            kiloes = michal.user;
            var _closure2_slot0 = kiloes;
            offset = michal.onAcceptSuccess;
            var _closure2_slot1 = offset;
            result = michal.onRejectSuccess;
            var _closure2_slot2 = result;
            output = michal.onError;
            var _closure2_slot3 = output;
            yankee = undefined;
            var _closure2_slot9 = yankee;
            var _closure2_slot10 = yankee;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 6;
            michal = tangon[michal];
            michal = zuuluu.bind(yankee)(michal);
            romeon = michal.bind(yankee)();
            echoed = _closure1_slot5;
            michal = echoed.useState;
            sizing = false;
            michal = michal.bind(echoed)(sizing);
            backup = _closure1_slot4;
            foxtra = 2;
            zuuluu = backup.bind(yankee)(michal, foxtra);
            michal = 0;
            oscard = zuuluu[michal];
            verify = 1;
            zuuluu = zuuluu[verify];
            var _closure2_slot4 = zuuluu;
            zuuluu = echoed.useState;
            zuuluu = zuuluu.bind(echoed)(sizing);
            zuuluu = backup.bind(yankee)(zuuluu, foxtra);
            report = zuuluu[michal];
            zuuluu = zuuluu[verify];
            var _closure2_slot5 = zuuluu;
            zuuluu = echoed.useState;
            zuuluu = zuuluu.bind(echoed)(sizing);
            zuuluu = backup.bind(yankee)(zuuluu, foxtra);
            tangon = zuuluu[michal];
            zuuluu = zuuluu[verify];
            var _closure2_slot6 = zuuluu;
            zuuluu = echoed.useState;
            zuuluu = zuuluu.bind(echoed)(sizing);
            option = backup.bind(yankee)(zuuluu, foxtra);
            zuuluu = option[michal];
            option = option[verify];
            var _closure2_slot7 = option;
            option = echoed.useState;
            option = option.bind(echoed)(sizing);
            option = backup.bind(yankee)(option, foxtra);
            michal = option[michal];
            option = option[verify];
            var _closure2_slot8 = option;
            sizing = oscard;
            if(sizing) { _fun00008_ip = 248; continue _fun00007 }
 245:
            sizing = report;
 248:
            if(sizing) { _fun00008_ip = 254; continue _fun00007 }
 251:
            sizing = tangon;
 254:
            _closure2_slot9 = sizing;
            backup = _closure1_slot5;
            verify = backup.useCallback;
            golfie = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00010_ip = 232; continue _fun00009 }
 10:
                            report = argFoo;
                            michal = undefined;
                            zuuluu = undefined;
                            oscard = _closure2_slot9;
                            if(oscard) { _fun00010_ip = 229; continue _fun00009 }
 30:
                            oscard = _closure2_slot4;
                            golfie = true;
                            oscard = oscard.bind(michal)(golfie);
 41: // try_start_0 // try_start_1
                            option = _closure1_slot0;
                            verify = _closure1_slot2;
                            oscard = 7;
                            oscard = verify[oscard];
                            option = option.bind(michal)(oscard);
                            oscard = option.acceptMessageRequest;
                            report = oscard.bind(option)(report);
                            SaveGenerator(address=79);
 77:
                            return report;
 79:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(oscard) { _fun00010_ip = 114; continue _fun00009 }
 85:
                            oscard = _closure2_slot7;
                            oscard = oscard.bind(michal)(golfie);
                            golfie = _closure2_slot1;
                            oscard = null;
                            if(!(oscard != golfie)) { _fun00010_ip = 112; continue _fun00009 }
 104:
                            oscard = _closure2_slot1;
                            oscard = oscard.bind(michal)();
 112: // try_end0
                            _fun00010_ip = 201; continue _fun00009;
 114: // try_end1
                            golfie = _closure2_slot4;
                            oscard = false;
                            oscard = golfie.bind(michal)(oscard);
                            return report;
 128: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=6);
                            oscard = _closure1_slot0;
                            option = _closure1_slot2;
                            report = 8;
                            report = option[report];
                            report = oscard.bind(michal)(report);
                            report = report.APIError;
                            oscard = report.prototype;
                            oscard = Object.create(oscard, {constructor: {value: report}});
                            yankee = oscard;
                            offset = golfie;
                            report = new yankee[report](offset, verify);
                            zuuluu = report instanceof Object ? report : oscard;
                            oscard = _closure2_slot3;
                            report = null;
                            if(!(report != oscard)) { _fun00010_ip = 201; continue _fun00009 }
 192:
                            report = _closure2_slot3;
                            zuuluu = report.bind(michal)(zuuluu);
 201: // try_end2
                            report = _closure2_slot4;
                            zuuluu = false;
                            zuuluu = report.bind(michal)(zuuluu);
                            _fun00010_ip = 229; continue _fun00009;
 214: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=2);
                            report = _closure2_slot4;
                            tangon = false;
                            tangon = report.bind(michal)(tangon);
                            throw zuuluu;
 229:
                            return michal;
 232:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            option = golfie.bind(yankee)();
            golfie = new Array(3);
            golfie[0] = sizing;
            golfie[1] = offset;
            golfie[2] = output;
            offset = verify.bind(backup)(option, golfie);
            _closure2_slot10 = offset;
            verify = backup.useCallback;
            golfie = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00012_ip = 232; continue _fun00011 }
 10:
                            report = argFoo;
                            michal = undefined;
                            zuuluu = undefined;
                            oscard = _closure2_slot9;
                            if(oscard) { _fun00012_ip = 229; continue _fun00011 }
 30:
                            oscard = _closure2_slot5;
                            golfie = true;
                            oscard = oscard.bind(michal)(golfie);
 41: // try_start_0 // try_start_1
                            option = _closure1_slot0;
                            verify = _closure1_slot2;
                            oscard = 7;
                            oscard = verify[oscard];
                            option = option.bind(michal)(oscard);
                            oscard = option.rejectMessageRequest;
                            report = oscard.bind(option)(report);
                            SaveGenerator(address=79);
 77:
                            return report;
 79:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(oscard) { _fun00012_ip = 114; continue _fun00011 }
 85:
                            oscard = _closure2_slot8;
                            oscard = oscard.bind(michal)(golfie);
                            golfie = _closure2_slot2;
                            oscard = null;
                            if(!(oscard != golfie)) { _fun00012_ip = 112; continue _fun00011 }
 104:
                            oscard = _closure2_slot2;
                            oscard = oscard.bind(michal)();
 112: // try_end0
                            _fun00012_ip = 201; continue _fun00011;
 114: // try_end1
                            golfie = _closure2_slot5;
                            oscard = false;
                            oscard = golfie.bind(michal)(oscard);
                            return report;
 128: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=6);
                            oscard = _closure1_slot0;
                            option = _closure1_slot2;
                            report = 8;
                            report = option[report];
                            report = oscard.bind(michal)(report);
                            report = report.APIError;
                            oscard = report.prototype;
                            oscard = Object.create(oscard, {constructor: {value: report}});
                            yankee = oscard;
                            offset = golfie;
                            report = new yankee[report](offset, verify);
                            zuuluu = report instanceof Object ? report : oscard;
                            oscard = _closure2_slot3;
                            report = null;
                            if(!(report != oscard)) { _fun00012_ip = 201; continue _fun00011 }
 192:
                            report = _closure2_slot3;
                            zuuluu = report.bind(michal)(zuuluu);
 201: // try_end2
                            report = _closure2_slot5;
                            zuuluu = false;
                            zuuluu = report.bind(michal)(zuuluu);
                            _fun00012_ip = 229; continue _fun00011;
 214: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=2);
                            report = _closure2_slot5;
                            tangon = false;
                            tangon = report.bind(michal)(tangon);
                            throw zuuluu;
 229:
                            return michal;
 232:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            option = golfie.bind(yankee)();
            golfie = new Array(3);
            golfie[0] = sizing;
            golfie[1] = result;
            golfie[2] = output;
            verify = verify.bind(backup)(option, golfie);
            foxtra = backup.useCallback;
            golfie = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00014_ip = 323; continue _fun00013 }
 10:
                            option = argFoo;
                            michal = undefined;
                            oscard = undefined;
                            offset = undefined;
                            yankee = undefined;
                            zuuluu = undefined;
                            report = _closure2_slot9;
                            if(report) { _fun00014_ip = 320; continue _fun00013 }
 36:
                            report = _closure2_slot5;
                            golfie = true;
                            report = report.bind(michal)(golfie);
                            romeon = _closure1_slot1;
                            foxtra = _closure1_slot2;
                            verify = 9;
                            verify = foxtra[verify];
                            romeon = romeon.bind(michal)(verify);
                            verify = option;
                            option = _closure1_slot8;
                            oscard = romeon.bind(michal)(verify, option);
 83: // try_start_0 // try_start_2
                            option = _closure1_slot10;
                            oscard = option.bind(michal)(oscard);
                            yankee = oscard;
                            oscard = oscard.bind(michal)();
                            offset = oscard;
                            oscard = oscard.done;
                            verify = 7;
                            if(oscard) { _fun00014_ip = 193; continue _fun00013 }
 113:
                            oscard = offset;
                            romeon = oscard.value;
                            option = _closure1_slot0;
                            oscard = _closure1_slot2;
                            oscard = oscard[verify];
                            option = option.bind(michal)(oscard);
                            oscard = option.rejectMessageRequestBatch;
                            oscard = oscard.bind(option)(romeon);
                            SaveGenerator(address=153);
 151:
                            return oscard;
 153:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(option) { _fun00014_ip = 179; continue _fun00013 }
 159:
                            option = yankee;
                            option = option.bind(michal)();
                            offset = option;
                            option = option.done;
                            if(option) { _fun00014_ip = 193; continue _fun00013 }
 177:
                            _fun00014_ip = 113; continue _fun00013;
 179: // try_end0 // try_end2
                            verify = _closure2_slot5;
                            option = false;
                            option = verify.bind(michal)(option);
                            return oscard;
 193: // try_start_1 // try_start_3
                            oscard = _closure2_slot8;
                            oscard = oscard.bind(michal)(golfie);
                            golfie = _closure2_slot2;
                            oscard = null;
                            if(!(oscard != golfie)) { _fun00014_ip = 220; continue _fun00013 }
 212:
                            oscard = _closure2_slot2;
                            oscard = oscard.bind(michal)();
 220: // try_end1
                            _fun00014_ip = 292; continue _fun00013;
 222: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=6);
                            oscard = _closure1_slot0;
                            option = _closure1_slot2;
                            report = 8;
                            report = option[report];
                            report = oscard.bind(michal)(report);
                            report = report.APIError;
                            oscard = report.prototype;
                            oscard = Object.create(oscard, {constructor: {value: report}});
                            sizing = oscard;
                            kiloes = golfie;
                            report = new sizing[report](kiloes, backup);
                            zuuluu = report instanceof Object ? report : oscard;
                            oscard = _closure2_slot3;
                            report = null;
                            if(!(report != oscard)) { _fun00014_ip = 292; continue _fun00013 }
 283:
                            report = _closure2_slot3;
                            zuuluu = report.bind(michal)(zuuluu);
 292: // try_end3
                            report = _closure2_slot5;
                            zuuluu = false;
                            zuuluu = report.bind(michal)(zuuluu);
                            _fun00014_ip = 320; continue _fun00013;
 305: // catch_target2 // catch_target3
                            CatchBlockStart(arg_register=2);
                            report = _closure2_slot5;
                            tangon = false;
                            tangon = report.bind(michal)(tangon);
                            throw zuuluu;
 320:
                            return michal;
 323:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            option = golfie.bind(yankee)();
            golfie = new Array(3);
            golfie[0] = sizing;
            golfie[1] = result;
            golfie[2] = output;
            option = foxtra.bind(backup)(option, golfie);
            foxtra = backup.useCallback;
            golfie = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            StartGenerator();
                            verify = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00016_ip = 285; continue _fun00015 }
 15:
                            var _closure5_slot0 = verify;
                            michal = _closure2_slot9;
                            if(michal) { _fun00016_ip = 280; continue _fun00015 }
 32:
                            michal = _closure2_slot0;
                            report = null;
                            if(!(report != michal)) { _fun00016_ip = 193; continue _fun00015 }
 45:
                            option = _closure1_slot6;
                            oscard = option.getMutualGuilds;
                            tangon = _closure2_slot0;
                            tangon = tangon.id;
                            tangon = oscard.bind(option)(tangon);
                            if(!(report == tangon)) { _fun00016_ip = 193; continue _fun00015 }
 76:
                            oscard = _closure2_slot6;
                            report = undefined;
                            tangon = true;
                            tangon = oscard.bind(report)(tangon);
 89: // try_start_0 // try_start_1
                            tangon = _closure1_slot1;
                            oscard = _closure1_slot2;
                            michal = 10;
                            michal = oscard[michal];
                            option = tangon.bind(report)(michal);
                            offset = _closure2_slot0;
                            oscard = offset.id;
                            tangon = offset.getAvatarURL;
                            michal = 80;
                            tangon = tangon.bind(offset)(report, michal);
                            michal = {'withMutualGuilds': true, 'withMutualFriendsCount': true};
                            michal = option.bind(report)(oscard, tangon, michal);
                            SaveGenerator(address=158);
 156:
                            return michal;
 158:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tangon) { _fun00016_ip = 166; continue _fun00015 }
 164: // try_end0
                            _fun00016_ip = 182; continue _fun00015;
 166: // try_end1
                            oscard = _closure2_slot6;
                            tangon = false;
                            tangon = oscard.bind(report)(tangon);
                            return michal;
 180: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=1);
 182: // try_end2
                            tangon = _closure2_slot6;
                            michal = false;
                            michal = tangon.bind(report)(michal);
 193:
                            michal = function() {
                                tangon = _closure1_slot3;
                                zuuluu = undefined;
                                michal = function* () {
                                    entity = function* () { // Original name: ?anon_0_
                                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(michal) { _fun00018_ip = 229; continue _fun00017 }
 10:
                                            michal = _closure2_slot0;
                                            offset = null;
                                            if(!(offset == michal)) { _fun00018_ip = 29; continue _fun00017 }
 23:
                                            verify = new Array(0);
                                            _fun00018_ip = 87; continue _fun00017;
 29:
                                            report = _closure1_slot6;
                                            zuuluu = report.getMutualGuilds;
                                            michal = _closure2_slot0;
                                            michal = michal.id;
                                            oscard = zuuluu.bind(report)(michal);
                                            zuuluu = offset == oscard;
                                            michal = undefined;
                                            if(zuuluu) { _fun00018_ip = 84; continue _fun00017 }
 65:
                                            report = oscard.map;
                                            zuuluu = function(argFoo) {
                                                entity = argFoo;
                                                entity = entity.guild;
                                                entity = entity.id;
                                                return entity;
                                            };
                                            michal = report.bind(oscard)(zuuluu);
 84:
                                            verify = michal;
 87:
                                            oscard = _closure1_slot1;
                                            report = _closure1_slot2;
                                            zuuluu = 11;
                                            report = report[zuuluu];
                                            zuuluu = undefined;
                                            option = oscard.bind(zuuluu)(report);
                                            golfie = option.track;
                                            report = _closure1_slot9;
                                            oscard = report.MESSAGE_REQUEST_ACTION;
                                            report = {};
                                            michal = _closure1_slot7;
                                            michal = michal.ACCEPT_CONFIRMATION_PROMPT;
                                            report['action'] = michal;
                                            yankee = _closure5_slot0;
                                            report['channel_id'] = yankee;
                                            if(!(offset == verify)) { _fun00018_ip = 162; continue _fun00017 }
 158:
                                            verify = new Array(0);
 162:
                                            report['mutual_guild_ids'] = verify;
                                            verify = _closure2_slot0;
                                            offset = offset == verify;
                                            verify = undefined;
                                            if(offset) { _fun00018_ip = 189; continue _fun00017 }
 180:
                                            offset = _closure2_slot0;
                                            verify = offset.id;
 189:
                                            report['other_user_id'] = verify;
                                            report = golfie.bind(option)(oscard, report);
                                            tangon = _closure2_slot10;
                                            michal = _closure5_slot0;
                                            michal = tangon.bind(zuuluu)(michal);
                                            SaveGenerator(address=217);
 215:
                                            return michal;
 217:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(tangon) { _fun00018_ip = 226; continue _fun00017 }
 223:
                                            return zuuluu;
 226:
                                            return michal;
 229:
                                            return entity;
                                        }
                                    };
                                    return entity;
                                };
                                michal = tangon.bind(zuuluu)(michal);
                                var _closure6_slot0 = michal;
                                entity = function() {
                                    entity = undefined;
                                    tangon = _closure6_slot0;
                                    zuuluu = tangon.apply;
                                    entity = arguments;
                                    michal = entity;
                                    entity = this;
                                    entity = zuuluu.bind(tangon)(entity, michal);
                                    return entity;
                                };
                                return entity;
                            };
                            oscard = undefined;
                            option = michal.bind(oscard)();
                            tangon = _closure1_slot0;
                            offset = _closure1_slot2;
                            michal = 12;
                            michal = offset[michal];
                            oscard = tangon.bind(oscard)(michal);
                            tangon = oscard.openAcceptMessageRequestConfirmModal;
                            michal = {};
                            michal['channelId'] = verify;
                            michal['onConfirm'] = option;
                            golfie = function() { // Original name: onCancel
                                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                    entity = _closure2_slot0;
                                    option = null;
                                    if(!(option == entity)) { _fun00020_ip = 19; continue _fun00019 }
 13:
                                    oscard = new Array(0);
                                    _fun00020_ip = 77; continue _fun00019;
 19:
                                    zuuluu = _closure1_slot6;
                                    michal = zuuluu.getMutualGuilds;
                                    entity = _closure2_slot0;
                                    entity = entity.id;
                                    tangon = michal.bind(zuuluu)(entity);
                                    michal = option == tangon;
                                    entity = undefined;
                                    if(michal) { _fun00020_ip = 74; continue _fun00019 }
 55:
                                    zuuluu = tangon.map;
                                    michal = function(argFoo) {
                                        entity = argFoo;
                                        entity = entity.guild;
                                        entity = entity.id;
                                        return entity;
                                    };
                                    entity = zuuluu.bind(tangon)(michal);
 74:
                                    oscard = entity;
 77:
                                    zuuluu = _closure1_slot1;
                                    michal = _closure1_slot2;
                                    entity = 11;
                                    michal = michal[entity];
                                    entity = undefined;
                                    report = zuuluu.bind(entity)(michal);
                                    tangon = report.track;
                                    michal = _closure1_slot9;
                                    zuuluu = michal.MESSAGE_REQUEST_ACTION;
                                    michal = {};
                                    verify = _closure1_slot7;
                                    verify = verify.DISMISS_CONFIRMATION_PROMPT;
                                    michal['action'] = verify;
                                    verify = _closure5_slot0;
                                    michal['channel_id'] = verify;
                                    if(!(option == oscard)) { _fun00020_ip = 152; continue _fun00019 }
 148:
                                    oscard = new Array(0);
 152:
                                    michal['mutual_guild_ids'] = oscard;
                                    oscard = _closure2_slot0;
                                    option = option == oscard;
                                    oscard = undefined;
                                    if(option) { _fun00020_ip = 179; continue _fun00019 }
 170:
                                    golfie = _closure2_slot0;
                                    oscard = golfie.id;
 179:
                                    michal['other_user_id'] = oscard;
                                    michal = tangon.bind(report)(zuuluu, michal);
                                    return entity;
                                }
                            };
                            michal['onCancel'] = golfie;
                            michal = tangon.bind(oscard)(michal);
                            _fun00016_ip = 280; continue _fun00015;
 265: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            tangon = _closure2_slot6;
                            zuuluu = false;
                            zuuluu = tangon.bind(report)(zuuluu);
                            throw michal;
 280:
                            michal = undefined;
                            return michal;
 285:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            yankee = golfie.bind(yankee)();
            golfie = new Array(3);
            golfie[0] = offset;
            golfie[1] = sizing;
            golfie[2] = kiloes;
            yankee = foxtra.bind(backup)(yankee, golfie);
            foxtra = backup.useCallback;
            golfie = new Array(1);
            golfie[0] = offset;
            entity = function(argFoo, argBar, argBaz) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    golfie = argFoo;
                    var _closure3_slot0 = golfie;
                    entity = argBar;
                    var _closure3_slot1 = entity;
                    entity = argBaz;
                    var _closure3_slot2 = entity;
                    oscard = function(argFoo, argBar) { // Original name: onConfirm
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            golfie = argFoo;
                            option = argBar;
                            if(!option) { _fun00024_ip = 51; continue _fun00023 }
 9:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 13;
                            michal = michal[entity];
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
                            michal = entity.NonSpamRetrainingOptIn;
                            entity = michal.updateSetting;
                            entity = entity.bind(michal)(golfie);
 51:
                            entity = golfie;
                            if(!entity) { _fun00024_ip = 70; continue _fun00023 }
 57:
                            zuuluu = _closure3_slot1;
                            michal = null;
                            entity = michal != zuuluu;
 70:
                            if(!entity) { _fun00024_ip = 116; continue _fun00023 }
 73:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 14;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.submitHamReportForFirstDM;
                            entity = _closure3_slot1;
                            entity = michal.bind(zuuluu)(entity);
 116:
                            tangon = _closure2_slot10;
                            verify = _closure3_slot0;
                            zuuluu = verify.id;
                            entity = undefined;
                            zuuluu = tangon.bind(entity)(zuuluu);
                            tangon = _closure1_slot1;
                            report = _closure1_slot2;
                            zuuluu = 11;
                            zuuluu = report[zuuluu];
                            oscard = tangon.bind(entity)(zuuluu);
                            report = oscard.track;
                            zuuluu = _closure1_slot9;
                            tangon = zuuluu.MESSAGE_REQUEST_ACTION;
                            zuuluu = {};
                            offset = _closure1_slot7;
                            offset = offset.ACCEPT_HAM_CONFIRMATION_PROMPT;
                            zuuluu['action'] = offset;
                            verify = verify.id;
                            zuuluu['channel_id'] = verify;
                            zuuluu['is_dont_show_again_checked'] = option;
                            zuuluu['non_spam_retraining_opt_in'] = golfie;
                            zuuluu = report.bind(oscard)(tangon, zuuluu);
                            tangon = _closure3_slot2;
                            zuuluu = null;
                            if(!(zuuluu != tangon)) { _fun00024_ip = 241; continue _fun00023 }
 233:
                            michal = _closure3_slot2;
                            michal = michal.bind(entity)();
 241:
                            return entity;
                        }
                    };
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 13;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = zuuluu.NonSpamRetrainingOptIn;
                    zuuluu = tangon.getSetting;
                    zuuluu = zuuluu.bind(tangon)();
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00022_ip = 84; continue _fun00021 }
 77:
                    zuuluu = oscard.bind(entity)(zuuluu);
                    _fun00022_ip = 138; continue _fun00021;
 84:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 12;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.onMarkAsNotSpamConfirmationModal;
                    michal = {};
                    michal['channel'] = golfie;
                    michal['onConfirm'] = oscard;
                    report = function() { // Original name: onCancel
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 11;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.track;
                        michal = _closure1_slot9;
                        zuuluu = michal.MESSAGE_REQUEST_ACTION;
                        michal = {};
                        oscard = _closure1_slot7;
                        oscard = oscard.DISMISS_HAM_CONFIRMATION_PROMPT;
                        michal['action'] = oscard;
                        oscard = _closure3_slot0;
                        oscard = oscard.id;
                        michal['channel_id'] = oscard;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    michal['onCancel'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 138:
                    return entity;
                }
            };
            golfie = foxtra.bind(backup)(entity, golfie);
            entity = {};
            if(!romeon) { _fun00008_ip = 452; continue _fun00007 }
 449:
            offset = yankee;
 452:
            entity['acceptMessageRequest'] = offset;
            entity['rejectMessageRequest'] = verify;
            entity['rejectAll'] = option;
            entity['markAsNotSpam'] = golfie;
            entity['isAcceptLoading'] = oscard;
            entity['isRejectLoading'] = report;
            entity['isUserProfileLoading'] = tangon;
            entity['isOptimisticAccepted'] = zuuluu;
            entity['isOptimisticRejected'] = michal;
            return entity;
        }
    };
    zuuluu['useMessageRequestActions'] = michal;
    return entity;
})();