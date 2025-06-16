// app/utils/InstantInviteUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = report;
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
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot17;
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
            golfie = _closure1_slot17;
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
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.ChannelTypes;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.InviteTargetTypes;
    var _closure1_slot11 = tangon;
    tangon = {};
    report = 'GROUP_DM';
    tangon['GROUP_DM'] = report;
    report = 'DM';
    tangon['DM'] = report;
    report = 'FRIEND';
    tangon['FRIEND'] = report;
    report = 'CHANNEL';
    tangon['CHANNEL'] = report;
    var _closure1_slot12 = tangon;
    report = function(argFoo, argBar) { // Original name: isGuildMember
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00008_ip = 34; continue _fun00007 }
 12:
            tangon = _closure1_slot5;
            zuuluu = tangon.isMember;
            michal = argBar;
            entity = zuuluu.bind(tangon)(report, michal);
 34:
            return entity;
        }
    };
    var _closure1_slot13 = report;
    report = function(argFoo) { // Original name: addDmUsers
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            echoed = entity.omitUserIds;
            result = entity.maxRowsWithoutQuery;
            output = entity.omitGuildId;
            sizing = entity.shownUserIds;
            kiloes = entity.rows;
            backup = entity.counts;
            foxtra = entity.includeGroupDms;
            romeon = entity.limit;
            zuuluu = _closure1_slot16;
            michal = _closure1_slot9;
            entity = michal.getPrivateChannelIds;
            michal = entity.bind(michal)();
            entity = undefined;
            offset = zuuluu.bind(entity)(michal);
            zuuluu = offset.bind(entity)();
            michal = zuuluu.done;
            verify = 0;
            option = false;
            golfie = null;
            oscard = zuuluu;
            report = 0;
            tangon = undefined;
            zuuluu = undefined;
            if(michal) { _fun00010_ip = 583; continue _fun00009 }
 111:
            source = oscard.value;
            if(!(golfie != result)) { _fun00010_ip = 136; continue _fun00009 }
 120:
            if(!(result > verify)) { _fun00010_ip = 136; continue _fun00009 }
 124:
            michal = kiloes.length;
            if(!(!(michal >= result))) { _fun00010_ip = 583; continue _fun00009 }
 136:
            if(!(golfie != romeon)) { _fun00010_ip = 147; continue _fun00009 }
 140:
            if(!(!(report >= romeon))) { _fun00010_ip = 583; continue _fun00009 }
 147:
            update = _closure1_slot4;
            michal = update.getChannel;
            sequen = michal.bind(update)(source);
            ctrled = report;
            source = tangon;
            update = zuuluu;
            if(!(golfie != sequen)) { _fun00010_ip = 556; continue _fun00009 }
 177:
            michal = sequen.isPrivate;
            michal = michal.bind(sequen)();
            ctrled = report;
            source = tangon;
            update = zuuluu;
            if(!michal) { _fun00010_ip = 556; continue _fun00009 }
 202:
            if(!foxtra) { _fun00010_ip = 227; continue _fun00009 }
 205:
            vacuum = sequen.type;
            michal = _closure1_slot10;
            michal = michal.GROUP_DM;
            if(!(vacuum !== michal)) { _fun00010_ip = 497; continue _fun00009 }
 227:
            config = _closure1_slot6;
            vacuum = config.lastMessageId;
            michal = sequen.id;
            michal = vacuum.bind(config)(michal);
            ctrled = report;
            source = tangon;
            update = zuuluu;
            if(!(golfie != michal)) { _fun00010_ip = 556; continue _fun00009 }
 263:
            michal = sequen.getRecipientId;
            vacuum = michal.bind(sequen)();
            ctrled = report;
            source = vacuum;
            update = zuuluu;
            if(!(golfie != vacuum)) { _fun00010_ip = 556; continue _fun00009 }
 289:
            michal = echoed.has;
            michal = michal.bind(echoed)(vacuum);
            ctrled = report;
            source = vacuum;
            update = zuuluu;
            if(michal) { _fun00010_ip = 556; continue _fun00009 }
 314:
            michal = sizing.has;
            michal = michal.bind(sizing)(vacuum);
            ctrled = report;
            source = vacuum;
            update = zuuluu;
            if(michal) { _fun00010_ip = 556; continue _fun00009 }
 339:
            config = _closure1_slot8;
            michal = config.getUser;
            michal = michal.bind(config)(vacuum);
            ctrled = report;
            source = vacuum;
            update = michal;
            if(!(golfie != michal)) { _fun00010_ip = 556; continue _fun00009 }
 370:
            config = michal.bot;
            ctrled = report;
            source = vacuum;
            update = michal;
            if(config) { _fun00010_ip = 556; continue _fun00009 }
 391:
            record = _closure1_slot13;
            config = michal.id;
            config = record.bind(entity)(output, config);
            ctrled = report;
            source = vacuum;
            update = michal;
            if(config) { _fun00010_ip = 556; continue _fun00009 }
 421:
            record = sizing.add;
            config = michal.id;
            config = record.bind(sizing)(config);
            record = kiloes.push;
            config = {};
            cntext = _closure1_slot12;
            cntext = cntext.DM;
            config['type'] = cntext;
            config['item'] = michal;
            config['isSuggested'] = option;
            config = record.bind(kiloes)(config);
            config = backup.numDms;
            config = config + 1;
            backup['numDms'] = config;
            ctrled = report + 1;
            source = vacuum;
            update = michal;
            _fun00010_ip = 556; continue _fun00009;
 497:
            vacuum = kiloes.push;
            michal = {};
            config = _closure1_slot12;
            config = config.GROUP_DM;
            michal['type'] = config;
            michal['item'] = sequen;
            michal['isSuggested'] = option;
            michal = vacuum.bind(kiloes)(michal);
            michal = backup.numGroupDms;
            michal = michal + 1;
            backup['numGroupDms'] = michal;
            ctrled = report + 1;
            source = tangon;
            update = zuuluu;
 556:
            vacuum = offset.bind(entity)();
            michal = vacuum.done;
            report = ctrled;
            tangon = source;
            zuuluu = update;
            oscard = vacuum;
            if(!michal) { _fun00010_ip = 111; continue _fun00009 }
 583:
            return entity;
        }
    };
    var _closure1_slot14 = report;
    report = {};
    verify = 10;
    oscard = option[verify];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.INVITE_OPTIONS_30_MINUTES;
    offset = oscard.value;
    oscard = {'value': 30, 'type': 'minutes'};
    report[offset] = oscard;
    oscard = option[verify];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.INVITE_OPTIONS_1_HOUR;
    offset = oscard.value;
    oscard = {'value': 1, 'type': 'hours'};
    report[offset] = oscard;
    oscard = option[verify];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.INVITE_OPTIONS_6_HOURS;
    offset = oscard.value;
    oscard = {'value': 6, 'type': 'hours'};
    report[offset] = oscard;
    oscard = option[verify];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.INVITE_OPTIONS_12_HOURS;
    yankee = oscard.value;
    oscard = 12;
    offset = {'value': 12, 'type': 'hours'};
    report[yankee] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_1_DAY;
    yankee = offset.value;
    offset = {'value': 1, 'type': 'days'};
    report[yankee] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_7_DAYS;
    yankee = offset.value;
    offset = {'value': 7, 'type': 'days'};
    report[yankee] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_FOREVER;
    yankee = offset.value;
    offset = {'value': 0, 'type': 'never'};
    report[yankee] = offset;
    var _closure1_slot15 = report;
    report = {};
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.MAX_AGE_OPTIONS;
    report['getMaxAgeOptions'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.MAX_USES_OPTIONS;
    report['getMaxUsesOptions'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_FOREVER;
    report['INVITE_OPTIONS_FOREVER'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_1_DAY;
    report['INVITE_OPTIONS_1_DAY'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_7_DAYS;
    report['INVITE_OPTIONS_7_DAYS'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_12_HOURS;
    report['INVITE_OPTIONS_12_HOURS'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_6_HOURS;
    report['INVITE_OPTIONS_6_HOURS'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_8_HOURS;
    report['INVITE_OPTIONS_8_HOURS'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_1_HOUR;
    report['INVITE_OPTIONS_1_HOUR'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_30_MINUTES;
    report['INVITE_OPTIONS_30_MINUTES'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_UNLIMITED;
    report['INVITE_OPTIONS_UNLIMITED'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_ONCE;
    report['INVITE_OPTIONS_ONCE'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_5_TIMES;
    report['INVITE_OPTIONS_5_TIMES'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_10_TIMES;
    report['INVITE_OPTIONS_10_TIMES'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_25_TIMES;
    report['INVITE_OPTIONS_25_TIMES'] = offset;
    offset = option[verify];
    offset = golfie.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_50_TIMES;
    report['INVITE_OPTIONS_50_TIMES'] = offset;
    verify = option[verify];
    verify = golfie.bind(entity)(verify);
    verify = verify.INVITE_OPTIONS_100_TIMES;
    report['INVITE_OPTIONS_100_TIMES'] = verify;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'utils/InstantInviteUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['RowTypes'] = tangon;
    tangon = function(argFoo) { // Original name: generateRowsForQuery
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            yankee = michal.query;
            report = michal.inviteTargetType;
            offset = michal.omitUserIds;
            oscard = michal.suggestedUserIds;
            golfie = michal.suggestedChannelIds;
            verify = michal.maxRowsWithoutQuery;
            option = michal.omitGuildId;
            michal = global;
            michal = michal.Set;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            config = zuuluu;
            michal = new config[michal](sequen);
            tangon = michal instanceof Object ? michal : zuuluu;
            zuuluu = new Array(0);
            michal = {'numFriends': 0, 'numDms': 0, 'numGroupDms': 0, 'numGuildMembers': 0, 'numChannels': 0};
            output = 0;
            romeon = '';
            if(!(romeon !== yankee)) { _fun00012_ip = 268; continue _fun00011 }
 105:
            kiloes = {};
            kiloes['query'] = yankee;
            kiloes['rows'] = zuuluu;
            kiloes['counts'] = michal;
            yankee = _closure1_slot11;
            yankee = yankee.EMBEDDED_APPLICATION;
            if(!(report === yankee)) { _fun00012_ip = 173; continue _fun00011 }
 138:
            foxtra = {};
            sequen = foxtra;
            vacuum = kiloes;
            yankee = copyDataProperties(sequen, vacuum);
            yankee = 'inviteTargetType';
            foxtra[yankee] = report;
            romeon = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = argFoo;
                    oscard = michal.query;
                    zuuluu = michal.rows;
                    var _closure3_slot0 = zuuluu;
                    zuuluu = michal.counts;
                    var _closure3_slot1 = zuuluu;
                    tangon = michal.inviteTargetType;
                    zuuluu = _closure1_slot11;
                    zuuluu = zuuluu.EMBEDDED_APPLICATION;
                    if(!(tangon === zuuluu)) { _fun00014_ip = 121; continue _fun00013 }
 53:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 9;
                    michal = tangon[michal];
                    report = undefined;
                    tangon = zuuluu.bind(report)(michal);
                    zuuluu = tangon.queryChannels;
                    michal = {};
                    michal['query'] = oscard;
                    oscard = 3;
                    michal['limit'] = oscard;
                    michal['guildId'] = report;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        entity = argFoo;
                        oscard = entity.record;
                        report = entity.score;
                        tangon = _closure3_slot0;
                        zuuluu = tangon.push;
                        michal = {};
                        golfie = _closure1_slot12;
                        golfie = golfie.CHANNEL;
                        michal['type'] = golfie;
                        michal['item'] = oscard;
                        oscard = false;
                        michal['isSuggested'] = oscard;
                        michal['score'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        michal = _closure3_slot1;
                        entity = michal.numChannels;
                        entity = entity + 1;
                        michal['numChannels'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
 121:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = undefined;
            yankee = romeon.bind(yankee)(foxtra);
 173:
            sizing = {};
            sequen = sizing;
            vacuum = kiloes;
            yankee = copyDataProperties(sequen, vacuum);
            backup = 'omitUserIds';
            sizing[backup] = offset;
            foxtra = 'shownUserIds';
            sizing[foxtra] = tangon;
            yankee = function(argFoo) {
                entity = argFoo;
                oscard = entity.query;
                zuuluu = entity.omitUserIds;
                var _closure3_slot0 = zuuluu;
                zuuluu = entity.shownUserIds;
                var _closure3_slot1 = zuuluu;
                zuuluu = entity.rows;
                var _closure3_slot2 = zuuluu;
                entity = entity.counts;
                var _closure3_slot3 = entity;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 9;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.queryDMUsers;
                zuuluu = {};
                zuuluu['query'] = oscard;
                oscard = 50;
                zuuluu['limit'] = oscard;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = argFoo;
                        oscard = entity.record;
                        report = entity.score;
                        tangon = _closure3_slot0;
                        zuuluu = tangon.has;
                        michal = oscard.id;
                        michal = zuuluu.bind(tangon)(michal);
                        if(michal) { _fun00016_ip = 181; continue _fun00015 }
 43:
                        tangon = _closure1_slot4;
                        zuuluu = tangon.getDMFromUserId;
                        michal = oscard.id;
                        verify = zuuluu.bind(tangon)(michal);
                        tangon = null;
                        michal = tangon != verify;
                        if(!michal) { _fun00016_ip = 94; continue _fun00015 }
 75:
                        option = _closure1_slot6;
                        zuuluu = option.lastMessageId;
                        zuuluu = zuuluu.bind(option)(verify);
                        michal = tangon != zuuluu;
 94:
                        if(!michal) { _fun00016_ip = 181; continue _fun00015 }
 97:
                        tangon = _closure3_slot1;
                        zuuluu = tangon.add;
                        michal = oscard.id;
                        michal = zuuluu.bind(tangon)(michal);
                        tangon = _closure3_slot2;
                        zuuluu = tangon.push;
                        michal = {};
                        golfie = _closure1_slot12;
                        golfie = golfie.DM;
                        michal['type'] = golfie;
                        michal['item'] = oscard;
                        oscard = false;
                        michal['isSuggested'] = oscard;
                        michal['score'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        michal = _closure3_slot3;
                        entity = michal.numDms;
                        entity = entity + 1;
                        michal['numDms'] = entity;
 181:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            romeon = undefined;
            yankee = yankee.bind(romeon)(sizing);
            yankee = function(argFoo) {
                entity = argFoo;
                oscard = entity.query;
                zuuluu = entity.rows;
                var _closure3_slot0 = zuuluu;
                entity = entity.counts;
                var _closure3_slot1 = entity;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 9;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.queryGroupDMs;
                zuuluu = {'query': null, 'limit': 50, 'fuzzy': false};
                zuuluu['query'] = oscard;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    entity = argFoo;
                    oscard = entity.record;
                    report = entity.score;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.push;
                    michal = {};
                    golfie = _closure1_slot12;
                    golfie = golfie.GROUP_DM;
                    michal['type'] = golfie;
                    michal['item'] = oscard;
                    oscard = false;
                    michal['isSuggested'] = oscard;
                    michal['score'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = _closure3_slot1;
                    entity = michal.numGroupDms;
                    entity = entity + 1;
                    michal['numGroupDms'] = entity;
                    entity = undefined;
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            yankee = yankee.bind(romeon)(kiloes);
            yankee = {};
            sequen = yankee;
            vacuum = kiloes;
            kiloes = copyDataProperties(sequen, vacuum);
            yankee[backup] = offset;
            yankee[foxtra] = tangon;
            entity = function(argFoo) {
                entity = argFoo;
                oscard = entity.query;
                zuuluu = entity.rows;
                var _closure3_slot0 = zuuluu;
                zuuluu = entity.counts;
                var _closure3_slot1 = zuuluu;
                zuuluu = entity.omitUserIds;
                var _closure3_slot2 = zuuluu;
                entity = entity.shownUserIds;
                var _closure3_slot3 = entity;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 9;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.queryFriends;
                zuuluu = {'query': null, 'limit': 500, '_fuzzy': false};
                zuuluu['query'] = oscard;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = argFoo;
                        oscard = entity.record;
                        report = entity.score;
                        tangon = _closure3_slot2;
                        zuuluu = tangon.has;
                        michal = oscard.id;
                        michal = zuuluu.bind(tangon)(michal);
                        if(michal) { _fun00018_ip = 59; continue _fun00017 }
 40:
                        golfie = _closure3_slot3;
                        tangon = golfie.has;
                        zuuluu = oscard.id;
                        michal = tangon.bind(golfie)(zuuluu);
 59:
                        if(michal) { _fun00018_ip = 149; continue _fun00017 }
 62:
                        tangon = _closure3_slot3;
                        zuuluu = tangon.add;
                        michal = oscard.id;
                        michal = zuuluu.bind(tangon)(michal);
                        tangon = _closure3_slot0;
                        zuuluu = tangon.push;
                        michal = {};
                        golfie = _closure1_slot12;
                        golfie = golfie.FRIEND;
                        michal['type'] = golfie;
                        michal['item'] = oscard;
                        oscard = false;
                        michal['isSuggested'] = oscard;
                        michal['score'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        michal = _closure3_slot1;
                        entity = michal.numFriends;
                        entity = entity + 1;
                        michal['numFriends'] = entity;
 149:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = entity.bind(romeon)(yankee);
            _fun00012_ip = 1138; continue _fun00011;
 268:
            entity = {};
            entity['omitUserIds'] = offset;
            entity['maxRowsWithoutQuery'] = verify;
            entity['omitGuildId'] = option;
            entity['shownUserIds'] = tangon;
            entity['rows'] = zuuluu;
            entity['counts'] = michal;
            tangon = _closure1_slot11;
            tangon = tangon.EMBEDDED_APPLICATION;
            if(!(report === tangon)) { _fun00012_ip = 550; continue _fun00011 }
 320:
            report = _closure1_slot14;
            tangon = {};
            sequen = tangon;
            vacuum = entity;
            option = copyDataProperties(sequen, vacuum);
            verify = false;
            option = 'includeGroupDms';
            tangon[option] = verify;
            verify = 1;
            option = 'limit';
            tangon[option] = verify;
            foxtra = undefined;
            tangon = report.bind(foxtra)(tangon);
            tangon = {};
            sequen = tangon;
            vacuum = entity;
            report = copyDataProperties(sequen, vacuum);
            report = 'suggestedChannelIds';
            tangon[report] = golfie;
            report = tangon.suggestedChannelIds;
            romeon = tangon.maxRowsWithoutQuery;
            yankee = tangon.rows;
            offset = tangon.counts;
            verify = null;
            if(!(verify != report)) { _fun00012_ip = 550; continue _fun00011 }
 422:
            tangon = _closure1_slot16;
            option = tangon.bind(foxtra)(report);
            report = option.bind(foxtra)();
            tangon = report.done;
            golfie = true;
            if(tangon) { _fun00012_ip = 550; continue _fun00011 }
 445:
            kiloes = report.value;
            if(!(verify != romeon)) { _fun00012_ip = 467; continue _fun00011 }
 454:
            if(!(romeon > output)) { _fun00012_ip = 467; continue _fun00011 }
 458:
            tangon = yankee.length;
            if(!(!(tangon >= romeon))) { _fun00012_ip = 550; continue _fun00011 }
 467:
            backup = _closure1_slot4;
            tangon = backup.getChannel;
            kiloes = tangon.bind(backup)(kiloes);
            if(!(verify != kiloes)) { _fun00012_ip = 535; continue _fun00011 }
 485:
            backup = yankee.push;
            tangon = {};
            result = _closure1_slot12;
            result = result.CHANNEL;
            tangon['type'] = result;
            tangon['item'] = kiloes;
            tangon['isSuggested'] = golfie;
            tangon = backup.bind(yankee)(tangon);
            tangon = offset.numChannels;
            tangon = tangon + 1;
            offset['numChannels'] = tangon;
 535:
            backup = option.bind(foxtra)();
            tangon = backup.done;
            report = backup;
            if(!tangon) { _fun00012_ip = 445; continue _fun00011 }
 550:
            tangon = {};
            sequen = tangon;
            vacuum = entity;
            report = copyDataProperties(sequen, vacuum);
            report = 'suggestedUserIds';
            tangon[report] = oscard;
            result = tangon.omitUserIds;
            report = tangon.suggestedUserIds;
            backup = tangon.maxRowsWithoutQuery;
            foxtra = tangon.omitGuildId;
            romeon = tangon.shownUserIds;
            yankee = tangon.rows;
            offset = tangon.counts;
            kiloes = null;
            if(!(kiloes != report)) { _fun00012_ip = 847; continue _fun00011 }
 622:
            tangon = _closure1_slot16;
            verify = undefined;
            option = tangon.bind(verify)(report);
            report = option.bind(verify)();
            tangon = report.done;
            golfie = true;
            oscard = report;
            report = undefined;
            if(tangon) { _fun00012_ip = 847; continue _fun00011 }
 655:
            source = oscard.value;
            if(!(kiloes != backup)) { _fun00012_ip = 680; continue _fun00011 }
 664:
            if(!(backup > output)) { _fun00012_ip = 680; continue _fun00011 }
 668:
            tangon = yankee.length;
            if(!(!(tangon >= backup))) { _fun00012_ip = 847; continue _fun00011 }
 680:
            tangon = result.has;
            tangon = tangon.bind(result)(source);
            echoed = report;
            if(tangon) { _fun00012_ip = 826; continue _fun00011 }
 699:
            tangon = romeon.has;
            tangon = tangon.bind(romeon)(source);
            echoed = report;
            if(tangon) { _fun00012_ip = 826; continue _fun00011 }
 715:
            update = _closure1_slot8;
            tangon = update.getUser;
            tangon = tangon.bind(update)(source);
            update = kiloes == tangon;
            if(update) { _fun00012_ip = 752; continue _fun00011 }
 737:
            ctrled = _closure1_slot13;
            source = tangon.id;
            update = ctrled.bind(verify)(foxtra, source);
 752:
            echoed = tangon;
            if(update) { _fun00012_ip = 826; continue _fun00011 }
 758:
            source = romeon.add;
            update = tangon.id;
            update = source.bind(romeon)(update);
            source = yankee.push;
            update = {};
            ctrled = _closure1_slot12;
            ctrled = ctrled.FRIEND;
            update['type'] = ctrled;
            update['item'] = tangon;
            update['isSuggested'] = golfie;
            update = source.bind(yankee)(update);
            update = offset.numFriends;
            update = update + 1;
            offset['numFriends'] = update;
            echoed = tangon;
 826:
            update = option.bind(verify)();
            tangon = update.done;
            report = echoed;
            oscard = update;
            if(!tangon) { _fun00012_ip = 655; continue _fun00011 }
 847:
            report = _closure1_slot14;
            tangon = {};
            sequen = tangon;
            vacuum = entity;
            oscard = copyDataProperties(sequen, vacuum);
            golfie = true;
            oscard = 'includeGroupDms';
            tangon[oscard] = golfie;
            backup = undefined;
            tangon = report.bind(backup)(tangon);
            foxtra = entity.omitUserIds;
            romeon = entity.maxRowsWithoutQuery;
            yankee = entity.omitGuildId;
            offset = entity.shownUserIds;
            verify = entity.rows;
            option = entity.counts;
            tangon = _closure1_slot16;
            report = _closure1_slot7;
            entity = report.getFriendIDs;
            entity = entity.bind(report)();
            golfie = tangon.bind(backup)(entity);
            tangon = golfie.bind(backup)();
            entity = tangon.done;
            oscard = false;
            report = tangon;
            tangon = undefined;
            if(entity) { _fun00012_ip = 1138; continue _fun00011 }
 964:
            update = report.value;
            if(!(kiloes != romeon)) { _fun00012_ip = 989; continue _fun00011 }
 973:
            if(!(romeon > output)) { _fun00012_ip = 989; continue _fun00011 }
 977:
            entity = verify.length;
            if(!(!(entity >= romeon))) { _fun00012_ip = 1138; continue _fun00011 }
 989:
            entity = foxtra.has;
            entity = entity.bind(foxtra)(update);
            result = tangon;
            if(entity) { _fun00012_ip = 1117; continue _fun00011 }
 1005:
            entity = offset.has;
            entity = entity.bind(offset)(update);
            result = tangon;
            if(entity) { _fun00012_ip = 1117; continue _fun00011 }
 1021:
            echoed = _closure1_slot8;
            entity = echoed.getUser;
            entity = entity.bind(echoed)(update);
            echoed = kiloes == entity;
            if(echoed) { _fun00012_ip = 1058; continue _fun00011 }
 1043:
            source = _closure1_slot13;
            update = entity.id;
            echoed = source.bind(backup)(yankee, update);
 1058:
            result = entity;
            if(echoed) { _fun00012_ip = 1117; continue _fun00011 }
 1064:
            update = verify.push;
            echoed = {};
            source = _closure1_slot12;
            source = source.FRIEND;
            echoed['type'] = source;
            echoed['item'] = entity;
            echoed['isSuggested'] = oscard;
            echoed = update.bind(verify)(echoed);
            echoed = option.numFriends;
            echoed = echoed + 1;
            option['numFriends'] = echoed;
            result = entity;
 1117:
            echoed = golfie.bind(backup)();
            entity = echoed.done;
            tangon = result;
            report = echoed;
            if(!entity) { _fun00012_ip = 964; continue _fun00011 }
 1138:
            entity = {};
            entity['rows'] = zuuluu;
            entity['counts'] = michal;
            return entity;
        }
    };
    zuuluu['generateRowsForQuery'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getMostRecentDMedUser
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            offset = argFoo;
            verify = argBar;
            michal = _closure1_slot16;
            zuuluu = _closure1_slot9;
            entity = zuuluu.getPrivateChannelIds;
            entity = entity.bind(zuuluu)();
            golfie = undefined;
            oscard = michal.bind(golfie)(entity);
            zuuluu = oscard.bind(golfie)();
            michal = zuuluu.done;
            entity = null;
            report = zuuluu;
            tangon = undefined;
            zuuluu = undefined;
            if(michal) { _fun00020_ip = 271; continue _fun00019 }
 58:
            romeon = report.value;
            yankee = _closure1_slot4;
            michal = yankee.getChannel;
            foxtra = michal.bind(yankee)(romeon);
            romeon = tangon;
            yankee = zuuluu;
            if(!(entity != foxtra)) { _fun00020_ip = 247; continue _fun00019 }
 90:
            michal = foxtra.isDM;
            michal = michal.bind(foxtra)();
            romeon = tangon;
            yankee = zuuluu;
            if(!michal) { _fun00020_ip = 247; continue _fun00019 }
 112:
            kiloes = _closure1_slot6;
            backup = kiloes.lastMessageId;
            michal = foxtra.id;
            michal = backup.bind(kiloes)(michal);
            romeon = tangon;
            yankee = zuuluu;
            if(!(entity != michal)) { _fun00020_ip = 247; continue _fun00019 }
 142:
            michal = foxtra.getRecipientId;
            backup = michal.bind(foxtra)();
            yankee = zuuluu;
            romeon = backup;
            if(!(entity != romeon)) { _fun00020_ip = 247; continue _fun00019 }
 162:
            michal = offset.has;
            michal = michal.bind(offset)(backup);
            romeon = backup;
            yankee = zuuluu;
            if(michal) { _fun00020_ip = 247; continue _fun00019 }
 181:
            foxtra = _closure1_slot8;
            michal = foxtra.getUser;
            michal = michal.bind(foxtra)(backup);
            romeon = backup;
            yankee = michal;
            if(!(entity != michal)) { _fun00020_ip = 247; continue _fun00019 }
 206:
            foxtra = michal.bot;
            romeon = backup;
            yankee = michal;
            if(foxtra) { _fun00020_ip = 247; continue _fun00019 }
 221:
            kiloes = _closure1_slot13;
            foxtra = michal.id;
            foxtra = kiloes.bind(golfie)(verify, foxtra);
            romeon = backup;
            yankee = michal;
            if(foxtra) { _fun00020_ip = 247; continue _fun00019 }
 245:
            return michal;
 247:
            foxtra = oscard.bind(golfie)();
            michal = foxtra.done;
            tangon = romeon;
            zuuluu = yankee;
            report = foxtra;
            if(!michal) { _fun00020_ip = 58; continue _fun00019 }
 271:
            return entity;
        }
    };
    zuuluu['getMostRecentDMedUser'] = tangon;
    tangon = function(argFoo) { // Original name: getUsersAlreadyJoined
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = argFoo;
            entity = michal.channel;
            tangon = michal.inviteTargetType;
            oscard = michal.applicationId;
            michal = _closure1_slot11;
            michal = michal.EMBEDDED_APPLICATION;
            if(!(tangon === michal)) { _fun00022_ip = 155; continue _fun00021 }
 36:
            michal = null;
            if(!(michal != entity)) { _fun00022_ip = 155; continue _fun00021 }
 42:
            michal = _closure1_slot16;
            tangon = _closure1_slot3;
            zuuluu = tangon.getEmbeddedActivitiesForChannel;
            entity = entity.id;
            entity = zuuluu.bind(tangon)(entity);
            report = undefined;
            tangon = michal.bind(report)(entity);
            michal = tangon.bind(report)();
            entity = michal.done;
            zuuluu = michal;
            if(entity) { _fun00022_ip = 155; continue _fun00021 }
 88:
            entity = zuuluu.value;
            michal = entity.applicationId;
            if(!(michal !== oscard)) { _fun00022_ip = 119; continue _fun00021 }
 102:
            golfie = tangon.bind(report)();
            michal = golfie.done;
            zuuluu = golfie;
            if(michal) { _fun00022_ip = 155; continue _fun00021 }
 117:
            _fun00022_ip = 88; continue _fun00021;
 119:
            michal = global;
            zuuluu = michal.Set;
            option = entity.userIds;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            verify = michal;
            entity = new verify[zuuluu](option, golfie);
            entity = entity instanceof Object ? entity : michal;
            return entity;
 155:
            entity = global;
            entity = entity.Set;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            verify = michal;
            entity = new verify[entity](option);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['getUsersAlreadyJoined'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: maxAgeString
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tangon = argFoo;
            entity = global;
            zuuluu = entity.parseInt;
            oscard = undefined;
            michal = argBar;
            entity = 10;
            verify = zuuluu.bind(oscard)(michal, entity);
            entity = 0;
            entity = entity === verify;
            zuuluu = _closure1_slot15;
            report = zuuluu[tangon];
            offset = report.value;
            zuuluu = zuuluu[tangon];
            tangon = zuuluu.type;
            zuuluu = 'minutes';
            if(!(zuuluu !== tangon)) { _fun00024_ip = 402; continue _fun00023 }
 67:
            zuuluu = 'hours';
            if(!(zuuluu !== tangon)) { _fun00024_ip = 304; continue _fun00023 }
 78:
            zuuluu = 'days';
            if(!(zuuluu !== tangon)) { _fun00024_ip = 206; continue _fun00023 }
 86:
            zuuluu = 'never';
            if(!(zuuluu !== tangon)) { _fun00024_ip = 102; continue _fun00023 }
 96:
            zuuluu = '';
            return zuuluu;
 102:
            option = _closure1_slot0;
            yankee = _closure1_slot2;
            tangon = 11;
            zuuluu = yankee[tangon];
            zuuluu = option.bind(oscard)(zuuluu);
            golfie = zuuluu.intl;
            if(entity) { _fun00024_ip = 172; continue _fun00023 }
 130:
            romeon = golfie.formatToPlainString;
            zuuluu = yankee[tangon];
            zuuluu = option.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            report = zuuluu.yJnTxM;
            zuuluu = {};
            zuuluu['numUses'] = verify;
            zuuluu = romeon.bind(golfie)(report, zuuluu);
            _fun00024_ip = 204; continue _fun00023;
 172:
            report = golfie.string;
            tangon = yankee[tangon];
            tangon = option.bind(oscard)(tangon);
            tangon = tangon.t;
            tangon = tangon.QrHBnJ;
            zuuluu = report.bind(golfie)(tangon);
 204:
            return zuuluu;
 206:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 11;
            golfie = report[zuuluu];
            golfie = tangon.bind(oscard)(golfie);
            option = golfie.intl;
            golfie = option.formatToPlainString;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = zuuluu.t;
            if(entity) { _fun00024_ip = 281; continue _fun00023 }
 253:
            report = tangon.TfuB9P;
            zuuluu = {};
            zuuluu['numDays'] = offset;
            zuuluu['numUses'] = verify;
            zuuluu = golfie.bind(option)(report, zuuluu);
            _fun00024_ip = 302; continue _fun00023;
 281:
            report = tangon.T96qsr;
            tangon = {};
            tangon['numDays'] = offset;
            zuuluu = golfie.bind(option)(report, tangon);
 302:
            return zuuluu;
 304:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 11;
            golfie = report[zuuluu];
            golfie = tangon.bind(oscard)(golfie);
            option = golfie.intl;
            golfie = option.formatToPlainString;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = zuuluu.t;
            if(entity) { _fun00024_ip = 379; continue _fun00023 }
 351:
            report = tangon.NgZgAA;
            zuuluu = {};
            zuuluu['numHours'] = offset;
            zuuluu['numUses'] = verify;
            zuuluu = golfie.bind(option)(report, zuuluu);
            _fun00024_ip = 400; continue _fun00023;
 379:
            report = tangon.ZVdJMz;
            tangon = {};
            tangon['numHours'] = offset;
            zuuluu = golfie.bind(option)(report, tangon);
 400:
            return zuuluu;
 402:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 11;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            if(entity) { _fun00024_ip = 472; continue _fun00023 }
 430:
            option = tangon.formatToPlainString;
            entity = golfie[michal];
            entity = report.bind(oscard)(entity);
            entity = entity.t;
            zuuluu = entity.eDRWJC;
            entity = {};
            entity['numUses'] = verify;
            entity = option.bind(tangon)(zuuluu, entity);
            _fun00024_ip = 504; continue _fun00023;
 472:
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            michal = michal./WbTXF;
            entity = zuuluu.bind(tangon)(michal);
 504:
            return entity;
        }
    };
    zuuluu['maxAgeString'] = tangon;
    michal = function(argFoo, argBar) { // Original name: urgentShareMessageString
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            zuuluu = argFoo;
            report = argBar;
            entity = null;
            if(!(entity != zuuluu)) { _fun00026_ip = 359; continue _fun00025 }
 15:
            michal = _closure1_slot15;
            tangon = michal[zuuluu];
            oscard = tangon.value;
            michal = michal[zuuluu];
            zuuluu = michal.type;
            michal = 'minutes';
            if(!(michal !== zuuluu)) { _fun00026_ip = 285; continue _fun00025 }
 51:
            michal = 'hours';
            if(!(michal !== zuuluu)) { _fun00026_ip = 211; continue _fun00025 }
 62:
            michal = 'days';
            if(!(michal !== zuuluu)) { _fun00026_ip = 137; continue _fun00025 }
 70:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 11;
            tangon = verify[michal];
            zuuluu = undefined;
            tangon = option.bind(zuuluu)(tangon);
            golfie = tangon.intl;
            tangon = golfie.formatToPlainString;
            michal = verify[michal];
            michal = option.bind(zuuluu)(michal);
            michal = michal.t;
            zuuluu = michal.RHbY6O;
            michal = {};
            michal['link'] = report;
            michal = tangon.bind(golfie)(zuuluu, michal);
            return michal;
 137:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 11;
            tangon = verify[michal];
            zuuluu = undefined;
            tangon = option.bind(zuuluu)(tangon);
            golfie = tangon.intl;
            tangon = golfie.formatToPlainString;
            michal = verify[michal];
            michal = option.bind(zuuluu)(michal);
            michal = michal.t;
            zuuluu = michal.gLIlkZ;
            michal = {};
            michal['numDays'] = oscard;
            michal['link'] = report;
            michal = tangon.bind(golfie)(zuuluu, michal);
            return michal;
 211:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 11;
            tangon = verify[michal];
            zuuluu = undefined;
            tangon = option.bind(zuuluu)(tangon);
            golfie = tangon.intl;
            tangon = golfie.formatToPlainString;
            michal = verify[michal];
            michal = option.bind(zuuluu)(michal);
            michal = michal.t;
            zuuluu = michal.3d9BlJ;
            michal = {};
            michal['numHours'] = oscard;
            michal['link'] = report;
            michal = tangon.bind(golfie)(zuuluu, michal);
            return michal;
 285:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 11;
            zuuluu = option[entity];
            michal = undefined;
            zuuluu = golfie.bind(michal)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = option[entity];
            entity = golfie.bind(michal)(entity);
            entity = entity.t;
            michal = entity.N3VHk5;
            entity = {};
            entity['numMinutes'] = oscard;
            entity['link'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 359:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 11;
            zuuluu = golfie[entity];
            michal = undefined;
            zuuluu = oscard.bind(michal)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = golfie[entity];
            entity = oscard.bind(michal)(entity);
            entity = entity.t;
            michal = entity.RHbY6O;
            entity = {};
            entity['link'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['urgentShareMessageString'] = michal;
    return entity;
})();