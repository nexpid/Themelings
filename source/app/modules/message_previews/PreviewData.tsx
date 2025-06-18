// app/modules/message_previews/PreviewData.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
            verify = _closure1_slot8;
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
            golfie = _closure1_slot8;
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
    var _closure1_slot7 = entity;
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
    var _closure1_slot8 = entity;
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
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: PreviewData
            zuuluu = this;
            tangon = _closure1_slot3;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = true;
            zuuluu['localNeeded'] = michal;
            michal = global;
            michal = michal.Map;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            golfie = tangon;
            michal = new golfie[michal](oscard);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['messages'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'isLatest';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            michal = argBar;
            tangon = this;
            zuuluu = tangon.messageGeneration;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity, michal);
            entity = entity === michal;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(10);
        michal[0] = entity;
        entity = {};
        oscard = 'messageGeneration';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                golfie = argFoo;
                zuuluu = argBar;
                tangon = this;
                michal = tangon.messages;
                entity = michal.get;
                option = entity.bind(michal)(golfie);
                report = null;
                michal = report == option;
                entity = -inf;
                if(michal) { _fun00008_ip = 147; continue _fun00007 }
 44:
                michal = option.generation;
                if(!(michal !== zuuluu)) { _fun00008_ip = 95; continue _fun00007 }
 54:
                michal = option.message;
                if(!(report != michal)) { _fun00008_ip = 95; continue _fun00007 }
 63:
                michal = option.message;
                report = michal.id;
                oscard = _closure1_slot6;
                michal = oscard.lastMessageId;
                michal = michal.bind(oscard)(golfie);
                if(!(report !== michal)) { _fun00008_ip = 103; continue _fun00007 }
 95:
                michal = option.generation;
                _fun00008_ip = 144; continue _fun00007;
 103:
                oscard = tangon.messages;
                report = oscard.set;
                tangon = {};
                offset = tangon;
                verify = option;
                option = copyDataProperties(offset, verify);
                option = 'generation';
                tangon[option] = zuuluu;
                tangon = report.bind(oscard)(golfie, tangon);
                michal = zuuluu;
 144:
                entity = michal;
 147:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'messageId';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = this;
                zuuluu = entity.messages;
                michal = zuuluu.get;
                entity = argFoo;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00010_ip = 52; continue _fun00009 }
 33:
                zuuluu = zuuluu.message;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00010_ip = 52; continue _fun00009 }
 47:
                michal = zuuluu.id;
 52:
                zuuluu = entity != michal;
                entity = null;
                if(!zuuluu) { _fun00010_ip = 64; continue _fun00009 }
 61:
                entity = michal;
 64:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'messageRecord';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = this;
                zuuluu = entity.messages;
                michal = zuuluu.get;
                entity = argFoo;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                michal = entity == zuuluu;
                if(michal) { _fun00012_ip = 40; continue _fun00011 }
 31:
                tangon = zuuluu.message;
                michal = entity == tangon;
 40:
                if(michal) { _fun00012_ip = 59; continue _fun00011 }
 43:
                report = zuuluu.message;
                tangon = _closure1_slot5;
                michal = report instanceof tangon;
 59:
                if(michal) { _fun00012_ip = 109; continue _fun00011 }
 62:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 4;
                tangon = tangon[michal];
                michal = undefined;
                report = report.bind(michal)(tangon);
                tangon = report.createMessageRecord;
                michal = zuuluu.message;
                michal = tangon.bind(report)(michal);
                zuuluu['message'] = michal;
 109:
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00012_ip = 123; continue _fun00011 }
 118:
                michal = zuuluu.message;
 123:
                zuuluu = entity != michal;
                entity = null;
                if(!zuuluu) { _fun00012_ip = 135; continue _fun00011 }
 132:
                entity = michal;
 135:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'has';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.messages;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'put';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            entity = this;
            tangon = entity.messages;
            zuuluu = tangon.set;
            michal = {};
            entity = argBar;
            michal['message'] = entity;
            entity = argBaz;
            michal['generation'] = entity;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity, michal);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'putNew';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                tangon = argBar;
                zuuluu = this;
                michal = zuuluu.messages;
                entity = michal.get;
                oscard = entity.bind(michal)(report);
                michal = null;
                entity = michal != tangon;
                if(!entity) { _fun00014_ip = 120; continue _fun00013 }
 34:
                verify = tangon.id;
                golfie = michal == oscard;
                offset = undefined;
                option = undefined;
                if(golfie) { _fun00014_ip = 69; continue _fun00013 }
 50:
                oscard = oscard.message;
                golfie = michal == oscard;
                option = undefined;
                if(golfie) { _fun00014_ip = 69; continue _fun00013 }
 64:
                option = oscard.id;
 69:
                michal = michal == option;
                if(michal) { _fun00014_ip = 117; continue _fun00013 }
 76:
                golfie = _closure1_slot1;
                yankee = _closure1_slot2;
                oscard = 5;
                oscard = yankee[oscard];
                golfie = golfie.bind(offset)(oscard);
                oscard = golfie.compare;
                golfie = oscard.bind(golfie)(verify, option);
                oscard = 0;
                michal = golfie > oscard;
 117:
                entity = michal;
 120:
                if(!entity) { _fun00014_ip = 139; continue _fun00013 }
 123:
                michal = zuuluu.put;
                entity = argBaz;
                entity = michal.bind(zuuluu)(report, tangon, entity);
 139:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'putMany';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscard = argBar;
                report = this;
                zuuluu = _closure1_slot7;
                entity = undefined;
                michal = argFoo;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.bind(entity)();
                michal = zuuluu.done;
                if(michal) { _fun00016_ip = 73; continue _fun00015 }
 35:
                option = zuuluu.value;
                golfie = report.put;
                michal = option.channel_id;
                michal = golfie.bind(report)(michal, option, oscard);
                golfie = tangon.bind(entity)();
                michal = golfie.done;
                zuuluu = golfie;
                if(!michal) { _fun00016_ip = 35; continue _fun00015 }
 73:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'update';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                option = argFoo;
                entity = this;
                michal = option.id;
                oscard = null;
                if(!(oscard != michal)) { _fun00018_ip = 205; continue _fun00017 }
 20:
                michal = option.channel_id;
                if(!(oscard != michal)) { _fun00018_ip = 205; continue _fun00017 }
 32:
                tangon = option.channel_id;
                zuuluu = entity.messages;
                michal = zuuluu.get;
                report = michal.bind(zuuluu)(tangon);
                michal = oscard == report;
                golfie = undefined;
                zuuluu = undefined;
                if(michal) { _fun00018_ip = 83; continue _fun00017 }
 64:
                michal = report.message;
                oscard = oscard == michal;
                zuuluu = undefined;
                if(oscard) { _fun00018_ip = 83; continue _fun00017 }
 78:
                zuuluu = michal.id;
 83:
                michal = option.id;
                if(!(zuuluu === michal)) { _fun00018_ip = 205; continue _fun00017 }
 92:
                oscard = report.message;
                michal = _closure1_slot5;
                michal = oscard instanceof michal;
                oscard = _closure1_slot0;
                verify = _closure1_slot2;
                zuuluu = 4;
                zuuluu = verify[zuuluu];
                golfie = oscard.bind(golfie)(zuuluu);
                if(michal) { _fun00018_ip = 150; continue _fun00017 }
 131:
                zuuluu = golfie.updateServerMessage;
                michal = report.message;
                oscard = zuuluu.bind(golfie)(michal, option);
                _fun00018_ip = 167; continue _fun00017;
 150:
                zuuluu = golfie.updateMessageRecord;
                michal = report.message;
                oscard = zuuluu.bind(golfie)(michal, option);
 167:
                zuuluu = entity.messages;
                michal = zuuluu.set;
                entity = {};
                yankee = entity;
                offset = report;
                report = copyDataProperties(yankee, offset);
                report = 'message';
                entity[report] = oscard;
                entity = michal.bind(zuuluu)(tangon, entity);
 205:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'delete';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.messages;
            michal = zuuluu.delete;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[9] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/message_previews/PreviewData.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['PreviewData'] = michal;
    return entity;
})();