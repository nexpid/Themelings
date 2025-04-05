// app/modules/guild/markGuildsAsRead.tsx
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
            verify = _closure1_slot10;
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
            golfie = _closure1_slot10;
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
    var _closure1_slot9 = entity;
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
    var _closure1_slot10 = entity;
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
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ReadStateTypes;
    var _closure1_slot8 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild/markGuildsAsRead.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: markGuildsAsRead
        option = argFoo;
        oscard = _closure1_slot1;
        report = _closure1_slot2;
        zuuluu = 6;
        tangon = report[zuuluu];
        zuuluu = undefined;
        verify = oscard.bind(zuuluu)(tangon);
        golfie = verify.flatMap;
        tangon = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscard = argFoo;
                tangon = _closure1_slot5;
                entity = tangon.getSelectableChannelIds;
                zuuluu = entity.bind(tangon)(oscard);
                entity = tangon.getVocalChannelIds;
                report = entity.bind(tangon)(oscard);
                entity = new Array(0);
                backup = 0;
                sizing = entity;
                kiloes = zuuluu;
                backup = arraySpread(sizing, kiloes, backup);
                sizing = entity;
                kiloes = report;
                tangon = arraySpread(sizing, kiloes, backup);
                report = _closure1_slot4;
                tangon = report.getActiveJoinedThreadsForGuild;
                golfie = tangon.bind(report)(oscard);
                michal = _closure1_slot9;
                oscard = undefined;
                report = michal.bind(oscard)(zuuluu);
                zuuluu = report.bind(oscard)();
                michal = zuuluu.done;
                tangon = null;
                if(michal) { _fun00008_ip = 163; continue _fun00007 }
 98:
                michal = zuuluu.value;
                michal = golfie[michal];
                if(!(tangon == michal)) { _fun00008_ip = 113; continue _fun00007 }
 111:
                michal = {};
 113:
                offset = michal;
                for(michal in offset)
 124:
                {
 133:
                    foxtra = michal;
                    romeon = entity.push;
                    romeon = romeon.bind(entity)(foxtra);
                    _fun00008_ip = 124; continue _fun00007;
                }
 148:
                option = report.bind(oscard)();
                michal = option.done;
                zuuluu = option;
                if(!michal) { _fun00008_ip = 98; continue _fun00007 }
 163:
                return entity;
            }
        };
        verify = golfie.bind(verify)(option, tangon);
        golfie = verify.map;
        tangon = function(argFoo) {
            tangon = argFoo;
            entity = {};
            entity['channelId'] = tangon;
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.CHANNEL;
            entity['readStateType'] = zuuluu;
            zuuluu = _closure1_slot6;
            michal = zuuluu.lastMessageId;
            michal = michal.bind(zuuluu)(tangon);
            entity['messageId'] = michal;
            return entity;
        };
        tangon = golfie.bind(verify)(tangon);
        var _closure2_slot0 = tangon;
        golfie = option.forEach;
        michal = function(argFoo) {
            golfie = argFoo;
            tangon = _closure2_slot0;
            zuuluu = tangon.push;
            michal = {};
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            option = 7;
            oscard = offset[option];
            entity = undefined;
            yankee = verify.bind(entity)(oscard);
            oscard = yankee.cast;
            oscard = oscard.bind(yankee)(golfie);
            michal['channelId'] = oscard;
            oscard = _closure1_slot8;
            yankee = oscard.GUILD_EVENT;
            michal['readStateType'] = yankee;
            foxtra = _closure1_slot6;
            romeon = foxtra.lastMessageId;
            yankee = oscard.GUILD_EVENT;
            yankee = romeon.bind(foxtra)(golfie, yankee);
            michal['messageId'] = yankee;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.push;
            michal = {};
            option = offset[option];
            verify = verify.bind(entity)(option);
            option = verify.cast;
            option = option.bind(verify)(golfie);
            michal['channelId'] = option;
            oscard = oscard.GUILD_ONBOARDING_QUESTION;
            michal['readStateType'] = oscard;
            oscard = _closure1_slot3;
            report = oscard.ackIdForGuild;
            report = report.bind(oscard)(golfie);
            michal['messageId'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = golfie.bind(option)(michal);
        michal = 8;
        michal = report[michal];
        option = oscard.bind(zuuluu)(michal);
        golfie = option.track;
        michal = _closure1_slot7;
        oscard = michal.MARK_AS_READ;
        michal = {};
        verify = argBar;
        michal['source'] = verify;
        verify = 'guild';
        michal['type'] = verify;
        michal = golfie.bind(option)(oscard, michal);
        michal = _closure1_slot0;
        entity = 9;
        entity = report[entity];
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.bulkAck;
        entity = argBaz;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();