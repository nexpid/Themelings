// app/modules/main_tabs_v2/native/tabs/gravity/useGravityItems.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: createItem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            golfie = argBar;
            zuuluu = argBaz;
            report = golfie.type;
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            option = 2;
            michal = michal[option];
            oscard = undefined;
            michal = verify.bind(oscard)(michal);
            michal = michal.GravityItemTypes;
            michal = michal.SUMMARY;
            if(!(report !== michal)) { _fun00002_ip = 907; continue _fun00001 }
 58:
            report = golfie.type;
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = verify.bind(oscard)(michal);
            michal = michal.GravityItemTypes;
            michal = michal.MESSAGE;
            if(!(report !== michal)) { _fun00002_ip = 578; continue _fun00001 }
 99:
            report = golfie.type;
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = verify.bind(oscard)(michal);
            michal = michal.GravityItemTypes;
            michal = michal.ACTIVITY;
            if(!(report !== michal)) { _fun00002_ip = 467; continue _fun00001 }
 140:
            report = golfie.type;
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = verify.bind(oscard)(michal);
            michal = michal.GravityItemTypes;
            michal = michal.CUSTOM_STATUS;
            if(!(report !== michal)) { _fun00002_ip = 467; continue _fun00001 }
 181:
            report = golfie.type;
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = verify.bind(oscard)(michal);
            michal = michal.GravityItemTypes;
            michal = michal.GUILD_EVENT;
            if(!(report !== michal)) { _fun00002_ip = 360; continue _fun00001 }
 222:
            report = golfie.type;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[option];
            entity = michal.bind(oscard)(entity);
            entity = entity.GravityItemTypes;
            michal = entity.RECOMMENDED_GUILDS;
            entity = null;
            if(!(report === michal)) { _fun00002_ip = 358; continue _fun00001 }
 262:
            michal = {};
            report = tangon.id;
            michal['id'] = report;
            report = global;
            option = report.Date;
            oscard = option.now;
            oscard = oscard.bind(option)();
            michal['timestamp'] = oscard;
            oscard = {};
            option = 'recommendedGuilds';
            oscard['kind'] = option;
            michal['data'] = oscard;
            oscard = tangon.score;
            michal['score'] = oscard;
            option = report.JSON;
            oscard = option.stringify;
            report = tangon.score_components;
            report = oscard.bind(option)(report);
            michal['debugScore'] = report;
            michal['unread'] = zuuluu;
            entity = michal;
 358:
            _fun00002_ip = 465; continue _fun00001;
 360:
            michal = {};
            report = tangon.id;
            michal['id'] = report;
            report = global;
            option = report.Date;
            oscard = option.now;
            oscard = oscard.bind(option)();
            michal['timestamp'] = oscard;
            oscard = {};
            option = 'guildEvent';
            oscard['kind'] = option;
            option = golfie.event_id;
            oscard['eventId'] = option;
            michal['data'] = oscard;
            oscard = tangon.score;
            michal['score'] = oscard;
            option = report.JSON;
            oscard = option.stringify;
            report = tangon.score_components;
            report = oscard.bind(option)(report);
            michal['debugScore'] = report;
            michal['unread'] = zuuluu;
            entity = michal;
 465:
            _fun00002_ip = 573; continue _fun00001;
 467:
            michal = {};
            report = tangon.id;
            michal['id'] = report;
            report = global;
            option = report.Date;
            oscard = option.now;
            oscard = oscard.bind(option)();
            michal['timestamp'] = oscard;
            oscard = {};
            option = 'contentInventory';
            oscard['kind'] = option;
            option = golfie.activity;
            oscard['content'] = option;
            michal['data'] = oscard;
            oscard = tangon.score;
            michal['score'] = oscard;
            option = report.JSON;
            oscard = option.stringify;
            report = tangon.score_components;
            report = oscard.bind(option)(report);
            michal['debugScore'] = report;
            michal['unread'] = zuuluu;
            entity = michal;
 573:
            _fun00002_ip = 905; continue _fun00001;
 578:
            michal = golfie.message;
            report = michal.id;
            michal = golfie.message;
            michal = michal.channel_id;
            if(!(report === michal)) { _fun00002_ip = 617; continue _fun00001 }
 602:
            report = golfie.threadChannel;
            michal = null;
            if(!(michal == report)) { _fun00002_ip = 770; continue _fun00001 }
 617:
            michal = {};
            report = tangon.id;
            michal['id'] = report;
            report = global;
            option = report.Date;
            oscard = option.now;
            oscard = oscard.bind(option)();
            michal['timestamp'] = oscard;
            oscard = tangon.data;
            oscard = oscard.channel_type;
            michal['channelType'] = oscard;
            oscard = {};
            option = 'message';
            oscard['kind'] = option;
            option = golfie.message;
            oscard['message'] = option;
            option = tangon.data;
            option = option.has_mention;
            oscard['mentioned'] = option;
            option = tangon.data;
            option = option.message_context;
            oscard['messageContext'] = option;
            michal['data'] = oscard;
            oscard = tangon.score;
            michal['score'] = oscard;
            option = report.JSON;
            oscard = option.stringify;
            report = tangon.score_components;
            report = oscard.bind(option)(report);
            michal['debugScore'] = report;
            michal['unread'] = zuuluu;
            _fun00002_ip = 902; continue _fun00001;
 770:
            report = {};
            oscard = tangon.id;
            report['id'] = oscard;
            oscard = global;
            verify = oscard.Date;
            option = verify.now;
            option = option.bind(verify)();
            report['timestamp'] = option;
            option = tangon.data;
            option = option.channel_type;
            report['channelType'] = option;
            option = {};
            verify = 'forumThread';
            option['kind'] = verify;
            verify = golfie.message;
            option['message'] = verify;
            verify = golfie.threadChannel;
            option['threadChannel'] = verify;
            report['data'] = option;
            option = tangon.score;
            report['score'] = option;
            verify = oscard.JSON;
            option = verify.stringify;
            oscard = tangon.score_components;
            oscard = option.bind(verify)(oscard);
            report['debugScore'] = oscard;
            report['unread'] = zuuluu;
            michal = report;
 902:
            entity = michal;
 905:
            _fun00002_ip = 1014; continue _fun00001;
 907:
            michal = {};
            report = tangon.id;
            michal['id'] = report;
            report = global;
            option = report.Date;
            oscard = option.now;
            oscard = oscard.bind(option)();
            michal['timestamp'] = oscard;
            oscard = {};
            option = 'channelSummary';
            oscard['kind'] = option;
            golfie = golfie.summary;
            oscard['topic'] = golfie;
            michal['data'] = oscard;
            oscard = tangon.score;
            michal['score'] = oscard;
            oscard = report.JSON;
            report = oscard.stringify;
            tangon = tangon.score_components;
            tangon = report.bind(oscard)(tangon);
            michal['debugScore'] = tangon;
            michal['unread'] = zuuluu;
            entity = michal;
 1014:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/tabs/gravity/useGravityItems.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useGravityItems
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 3;
            michal = golfie[report];
            output = undefined;
            verify = oscard.bind(output)(michal);
            option = verify.useStateFromStores;
            tangon = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = tangon;
            michal = function() {
                michal = _closure1_slot4;
                entity = michal.getUnreadDisplayItems;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = option.bind(verify)(zuuluu, michal);
            zuuluu = golfie[report];
            offset = oscard.bind(output)(zuuluu);
            verify = offset.useStateFromStores;
            option = new Array(1);
            option[0] = tangon;
            zuuluu = function() {
                michal = _closure1_slot4;
                entity = michal.getReadDisplayItems;
                entity = entity.bind(michal)();
                return entity;
            };
            sizing = verify.bind(offset)(option, zuuluu);
            var _closure2_slot0 = sizing;
            zuuluu = golfie[report];
            offset = oscard.bind(output)(zuuluu);
            verify = offset.useStateFromStores;
            option = new Array(1);
            option[0] = tangon;
            zuuluu = function() {
                michal = _closure1_slot4;
                entity = michal.getNextIndexToHydrate;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = verify.bind(offset)(option, zuuluu);
            option = golfie[report];
            yankee = oscard.bind(output)(option);
            offset = yankee.useStateFromStoresObject;
            verify = new Array(1);
            verify[0] = tangon;
            option = function() {
                michal = _closure1_slot4;
                entity = michal.getHydratedItems;
                entity = entity.bind(michal)();
                return entity;
            };
            kiloes = offset.bind(yankee)(verify, option);
            report = golfie[report];
            golfie = oscard.bind(output)(report);
            oscard = golfie.useStateFromStores;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                michal = _closure1_slot4;
                entity = michal.getMissingItems;
                entity = entity.bind(michal)();
                return entity;
            };
            backup = oscard.bind(golfie)(report, tangon);
            oscard = _closure1_slot3;
            report = oscard.useEffect;
            tangon = new Array(1);
            tangon[0] = sizing;
            entity = function() {
                entity = global;
                zuuluu = entity.Date;
                entity = zuuluu.now;
                zuuluu = entity.bind(zuuluu)();
                golfie = _closure2_slot0;
                entity = golfie.length;
                entity = zuuluu + entity;
                var _closure3_slot0 = entity;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 4;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.ackGravityItems;
                oscard = golfie.map;
                report = function(argFoo) {
                    entity = {};
                    michal = argFoo;
                    michal = michal.id;
                    entity['id'] = michal;
                    michal = _closure3_slot0;
                    michal = parseFloat(michal);
                    zuuluu = michal - 1;
                    _closure3_slot0 = zuuluu;
                    entity['timestamp'] = michal;
                    return entity;
                };
                michal = true;
                michal = oscard.bind(golfie)(report, michal);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = report.bind(oscard)(entity, tangon);
            report = new Array(0);
            tangon = new Array(0);
            entity = michal.length;
            foxtra = 0;
            entity = foxtra < entity;
            update = true;
            romeon = null;
            yankee = 2;
            echoed = 0;
            verify = 0;
            option = undefined;
            golfie = undefined;
            oscard = undefined;
            offset = 0;
            if(!entity) { _fun00004_ip = 505; continue _fun00003 }
 276:
            offset = echoed;
            if(!(!(offset >= zuuluu))) { _fun00004_ip = 505; continue _fun00003 }
 286:
            config = michal[verify];
            source = echoed + 1;
            entity = config.id;
            entity = backup[entity];
            vacuum = option;
            ctrled = oscard;
            if(entity) { _fun00004_ip = 478; continue _fun00003 }
 314:
            entity = config.id;
            sequen = kiloes[entity];
            entity = romeon == sequen;
            if(!entity) { _fun00004_ip = 368; continue _fun00003 }
 330:
            cntext = config.type;
            papara = _closure1_slot0;
            record = _closure1_slot2;
            record = record[yankee];
            record = papara.bind(output)(record);
            record = record.GravityItemTypes;
            record = record.MESSAGE;
            entity = cntext === record;
 368:
            if(!entity) { _fun00004_ip = 404; continue _fun00003 }
 371:
            record = config.data;
            record = record.message_context;
            papara = romeon == record;
            cntext = undefined;
            if(papara) { _fun00004_ip = 397; continue _fun00003 }
 391:
            cntext = record.reference_message_id;
 397:
            entity = romeon != cntext;
            option = record;
 404:
            if(!entity) { _fun00004_ip = 422; continue _fun00003 }
 407:
            entity = config.data;
            entity = entity.message_id;
            sequen = kiloes[entity];
 422:
            vacuum = option;
            ctrled = oscard;
            golfie = sequen;
            if(!(romeon != golfie)) { _fun00004_ip = 478; continue _fun00003 }
 435:
            entity = _closure1_slot5;
            entity = entity.bind(output)(config, sequen, update);
            vacuum = option;
            golfie = sequen;
            ctrled = entity;
            if(!(romeon != ctrled)) { _fun00004_ip = 478; continue _fun00003 }
 459:
            config = report.push;
            config = config.bind(report)(entity);
            vacuum = option;
            golfie = sequen;
            ctrled = entity;
 478:
            verify = verify + 1;
            entity = michal.length;
            option = vacuum;
            oscard = ctrled;
            echoed = source;
            offset = echoed;
            if(verify < entity) { _fun00004_ip = 276; continue _fun00003 }
 505:
            entity = sizing.length;
            entity = foxtra < entity;
            verify = false;
            foxtra = 0;
            option = undefined;
            golfie = undefined;
            oscard = undefined;
            if(!entity) { _fun00004_ip = 750; continue _fun00003 }
 530:
            if(!(!(offset >= zuuluu))) { _fun00004_ip = 750; continue _fun00003 }
 537:
            ctrled = sizing[foxtra];
            offset = offset + 1;
            entity = ctrled.id;
            entity = backup[entity];
            update = option;
            echoed = oscard;
            if(entity) { _fun00004_ip = 729; continue _fun00003 }
 565:
            entity = ctrled.id;
            source = kiloes[entity];
            entity = romeon == source;
            if(!entity) { _fun00004_ip = 619; continue _fun00003 }
 581:
            sequen = ctrled.type;
            config = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[yankee];
            vacuum = config.bind(output)(vacuum);
            vacuum = vacuum.GravityItemTypes;
            vacuum = vacuum.MESSAGE;
            entity = sequen === vacuum;
 619:
            if(!entity) { _fun00004_ip = 655; continue _fun00003 }
 622:
            vacuum = ctrled.data;
            vacuum = vacuum.message_context;
            config = romeon == vacuum;
            sequen = undefined;
            if(config) { _fun00004_ip = 648; continue _fun00003 }
 642:
            sequen = vacuum.reference_message_id;
 648:
            entity = romeon != sequen;
            option = vacuum;
 655:
            if(!entity) { _fun00004_ip = 673; continue _fun00003 }
 658:
            entity = ctrled.data;
            entity = entity.message_id;
            source = kiloes[entity];
 673:
            update = option;
            echoed = oscard;
            golfie = source;
            if(!(romeon != golfie)) { _fun00004_ip = 729; continue _fun00003 }
 686:
            entity = _closure1_slot5;
            entity = entity.bind(output)(ctrled, source, verify);
            update = option;
            golfie = source;
            echoed = entity;
            if(!(romeon != echoed)) { _fun00004_ip = 729; continue _fun00003 }
 710:
            ctrled = tangon.push;
            ctrled = ctrled.bind(tangon)(entity);
            update = option;
            golfie = source;
            echoed = entity;
 729:
            foxtra = foxtra + 1;
            entity = sizing.length;
            option = update;
            oscard = echoed;
            if(foxtra < entity) { _fun00004_ip = 530; continue _fun00003 }
 750:
            entity = {};
            entity['unreadItems'] = report;
            entity['readItems'] = tangon;
            michal = michal.length;
            michal = zuuluu >= michal;
            entity['allUnreadItemsHydrated'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();