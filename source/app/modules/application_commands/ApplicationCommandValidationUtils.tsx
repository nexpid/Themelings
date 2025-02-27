// app/modules/application_commands/ApplicationCommandValidationUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
            verify = _closure1_slot5;
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
            golfie = _closure1_slot5;
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
    var _closure1_slot4 = entity;
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
    var _closure1_slot5 = entity;
    michal = function(argFoo) { // Original name: validateOptionContent
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = entity.option;
            oscard = entity.content;
            romeon = entity.guildId;
            yankee = entity.channelId;
            michal = entity.allowEmptyValues;
            offset = entity.commandOrigin;
            golfie = undefined;
            if(!(offset === golfie)) { _fun00008_ip = 77; continue _fun00007 }
 42:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 1;
            entity = tangon[entity];
            entity = zuuluu.bind(golfie)(entity);
            entity = entity.CommandOrigin;
            offset = entity.CHAT;
 77:
            verify = null;
            entity = verify != oscard;
            zuuluu = '';
            tangon = zuuluu;
            if(!entity) { _fun00008_ip = 148; continue _fun00007 }
 93:
            option = _closure1_slot0;
            foxtra = _closure1_slot2;
            entity = 2;
            entity = foxtra[entity];
            backup = option.bind(golfie)(entity);
            foxtra = backup.getString;
            option = {};
            option['content'] = oscard;
            entity = 'content';
            option = foxtra.bind(backup)(option, entity);
            entity = option.trim;
            tangon = entity.bind(option)();
 148:
            entity = report.required;
            if(!(verify != oscard)) { _fun00008_ip = 411; continue _fun00007 }
 161:
            if(!(zuuluu !== tangon)) { _fun00008_ip = 297; continue _fun00007 }
 168:
            option = oscard.length;
            zuuluu = 1;
            if(!(!(option > zuuluu))) { _fun00008_ip = 188; continue _fun00007 }
 180:
            zuuluu = 0;
            option = oscard[zuuluu];
            _fun00008_ip = 205; continue _fun00007;
 188:
            zuuluu = {};
            oscard = 'text';
            zuuluu['type'] = oscard;
            zuuluu['text'] = tangon;
            option = zuuluu;
 205:
            oscard = _closure1_slot1;
            foxtra = _closure1_slot2;
            zuuluu = 4;
            zuuluu = foxtra[zuuluu];
            oscard = oscard.bind(golfie)(zuuluu);
            zuuluu = report.type;
            zuuluu = oscard[zuuluu];
            update = oscard;
            echoed = option;
            result = report;
            output = yankee;
            sizing = romeon;
            kiloes = offset;
            zuuluu = update[zuuluu](echoed, result, output, sizing, kiloes, backup);
            oscard = zuuluu.success;
            if(oscard) { _fun00008_ip = 277; continue _fun00007 }
 268:
            option = zuuluu.error;
            oscard = verify != option;
 277:
            if(oscard) { _fun00008_ip = 295; continue _fun00007 }
 280:
            tangon = _closure1_slot3;
            tangon = tangon.bind(golfie)(report);
            zuuluu['error'] = tangon;
 295:
            return zuuluu;
 297:
            if(michal) { _fun00008_ip = 397; continue _fun00007 }
 300:
            zuuluu = {};
            michal = false;
            zuuluu['success'] = michal;
            if(entity) { _fun00008_ip = 333; continue _fun00007 }
 315:
            michal = _closure1_slot3;
            michal = michal.bind(golfie)(report);
            zuuluu['error'] = michal;
            michal = zuuluu;
            _fun00008_ip = 395; continue _fun00007;
 333:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 3;
            report = verify[tangon];
            report = option.bind(golfie)(report);
            oscard = report.intl;
            report = oscard.string;
            tangon = verify[tangon];
            tangon = option.bind(golfie)(tangon);
            tangon = tangon.t;
            tangon = tangon.JZJQLy;
            tangon = report.bind(oscard)(tangon);
            zuuluu['error'] = tangon;
            michal = zuuluu;
 395:
            _fun00008_ip = 409; continue _fun00007;
 397:
            zuuluu = {};
            tangon = true;
            zuuluu['success'] = tangon;
            michal = zuuluu;
 409:
            return michal;
 411:
            if(entity) { _fun00008_ip = 425; continue _fun00007 }
 414:
            entity = {};
            michal = true;
            entity['success'] = michal;
            _fun00008_ip = 499; continue _fun00007;
 425:
            michal = {};
            zuuluu = false;
            michal['success'] = zuuluu;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 3;
            tangon = option[zuuluu];
            tangon = oscard.bind(golfie)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.JZJQLy;
            zuuluu = tangon.bind(report)(zuuluu);
            michal['error'] = zuuluu;
            entity = michal;
 499:
            return entity;
        }
    };
    var _closure1_slot6 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    report = report.getValidationErrorText;
    var _closure1_slot3 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/application_commands/ApplicationCommandValidationUtils.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: getValidationResults
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            offset = argBar;
            verify = argBaz;
            option = argCor;
            golfie = argGra;
            entity = {};
            michal = argFoo;
            zuuluu = michal.options;
            michal = null;
            if(!(michal != zuuluu)) { _fun00010_ip = 127; continue _fun00009 }
 28:
            michal = _closure1_slot4;
            report = undefined;
            tangon = michal.bind(report)(zuuluu);
            zuuluu = tangon.bind(report)();
            michal = zuuluu.done;
            if(michal) { _fun00010_ip = 125; continue _fun00009 }
 54:
            backup = zuuluu.value;
            michal = backup.name;
            foxtra = offset[michal];
            yankee = backup.name;
            romeon = _closure1_slot6;
            michal = {};
            michal['option'] = backup;
            michal['content'] = foxtra;
            michal['guildId'] = verify;
            michal['channelId'] = option;
            michal['allowEmptyValues'] = golfie;
            michal = romeon.bind(report)(michal);
            entity[yankee] = michal;
            yankee = tangon.bind(report)();
            michal = yankee.done;
            zuuluu = yankee;
            if(!michal) { _fun00010_ip = 54; continue _fun00009 }
 125:
            return entity;
 127:
            return entity;
        }
    };
    zuuluu['getValidationResults'] = tangon;
    zuuluu['validateOptionContent'] = michal;
    return entity;
})();