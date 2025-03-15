// app/modules/guild_onboarding_home/native/GuildHomeResources.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: ResourceChannelRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            update = entity.channelId;
            var _closure2_slot0 = update;
            config = entity.title;
            offset = entity.icon;
            target = entity.description;
            report = undefined;
            var _closure2_slot2 = report;
            entity = _closure1_slot14;
            yankee = entity.bind(report)();
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 10;
            michal = entity[oscard];
            romeon = zuuluu.bind(report)(michal);
            option = romeon.useStateFromStores;
            michal = _closure1_slot6;
            golfie = new Array(1);
            golfie[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            echoed = option.bind(romeon)(golfie, michal);
            var _closure2_slot1 = echoed;
            michal = entity[oscard];
            romeon = zuuluu.bind(report)(michal);
            option = romeon.useStateFromStores;
            michal = _closure1_slot9;
            golfie = new Array(1);
            golfie[0] = michal;
            michal = function() {
                tangon = _closure1_slot9;
                zuuluu = tangon.can;
                entity = _closure1_slot10;
                michal = entity.VIEW_CHANNEL;
                entity = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = option.bind(romeon)(golfie, michal);
            oscard = entity[oscard];
            romeon = zuuluu.bind(report)(oscard);
            option = romeon.useStateFromStores;
            oscard = _closure1_slot8;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getMessages;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = option.bind(romeon)(golfie, oscard);
            oscard = golfie.first;
            foxtra = oscard.bind(golfie)();
            kiloes = 11;
            oscard = entity[kiloes];
            romeon = zuuluu.bind(report)(oscard);
            oscard = romeon.useForumPostMediaProperties;
            option = false;
            oscard = oscard.bind(romeon)(foxtra, option);
            entity = entity[kiloes];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.useFirstMediaIsEmbed;
            output = entity.bind(zuuluu)(foxtra, option);
            entity = null;
            zuuluu = entity == oscard;
            option = undefined;
            if(zuuluu) { _fun00002_ip = 251; continue _fun00001 }
 246:
            option = oscard.length;
 251:
            zuuluu = 0;
            option = option > zuuluu;
            result = null;
            if(!option) { _fun00002_ip = 266; continue _fun00001 }
 262:
            result = oscard[zuuluu];
 266:
            romeon = _closure1_slot0;
            backup = _closure1_slot2;
            option = 12;
            oscard = backup[option];
            sizing = romeon.bind(report)(oscard);
            romeon = sizing.useSharedMediaProps;
            oscard = {};
            oscard['channel'] = echoed;
            oscard['media'] = result;
            oscard = romeon.bind(sizing)(oscard);
            sizing = oscard.shouldObscure;
            romeon = _closure1_slot1;
            oscard = 13;
            oscard = backup[oscard];
            oscard = romeon.bind(report)(oscard);
            limora = oscard.bind(report)(foxtra);
            oscard = entity != echoed;
            if(!oscard) { _fun00002_ip = 356; continue _fun00001 }
 342:
            romeon = golfie.first;
            romeon = romeon.bind(golfie)();
            oscard = entity == romeon;
 356:
            if(!oscard) { _fun00002_ip = 368; continue _fun00001 }
 359:
            romeon = golfie.loadingMore;
            oscard = !romeon;
 368:
            if(!oscard) { _fun00002_ip = 380; continue _fun00001 }
 371:
            romeon = golfie.ready;
            oscard = !romeon;
 380:
            if(!oscard) { _fun00002_ip = 392; continue _fun00001 }
 383:
            golfie = golfie.hasFetched;
            oscard = !golfie;
 392:
            _closure2_slot2 = oscard;
            backup = _closure1_slot3;
            romeon = backup.useEffect;
            golfie = new Array(2);
            golfie[0] = update;
            golfie[1] = oscard;
            oscard = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot2;
                    if(!entity) { _fun00004_ip = 69; continue _fun00003 }
 10:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 14;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.fetchMessages;
                    entity = {};
                    tangon = _closure2_slot0;
                    entity['channelId'] = tangon;
                    entity['after'] = tangon;
                    tangon = 5;
                    entity['limit'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 69:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = romeon.bind(backup)(oscard, golfie);
            romeon = _closure1_slot3;
            golfie = romeon.useCallback;
            oscard = new Array(1);
            oscard[0] = echoed;
            tangon = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00006_ip = 64; continue _fun00005 }
 13:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 15;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.selectHomeResourceChannel;
                    entity = _closure2_slot1;
                    michal = entity.guild_id;
                    entity = entity.id;
                    entity = zuuluu.bind(tangon)(michal, entity);
 64:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = golfie.bind(romeon)(tangon, oscard);
            if(!(entity != echoed)) { _fun00002_ip = 1164; continue _fun00001 }
 467:
            if(!michal) { _fun00002_ip = 1164; continue _fun00001 }
 473:
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 16;
            michal = golfie[michal];
            golfie = tangon.bind(report)(michal);
            tangon = golfie.getResourceChannelIconURL;
            michal = {};
            romeon = echoed.id;
            michal['channelId'] = romeon;
            michal['icon'] = offset;
            golfie = tangon.bind(golfie)(michal);
            vacuum = entity == target;
            if(vacuum) { _fun00002_ip = 535; continue _fun00001 }
 526:
            michal = target.length;
            vacuum = zuuluu === michal;
 535:
            tangon = _closure1_slot13;
            source = _closure1_slot0;
            update = _closure1_slot2;
            michal = 17;
            michal = update[michal];
            michal = source.bind(report)(michal);
            zuuluu = michal.PressableOpacity;
            michal = {};
            michal['onPress'] = oscard;
            oscard = yankee.channelContainer;
            michal['style'] = oscard;
            backup = _closure1_slot13;
            romeon = _closure1_slot4;
            oscard = {};
            ctrled = yankee.textContent;
            oscard['style'] = ctrled;
            sequen = _closure1_slot12;
            ctrled = 18;
            update = update[ctrled];
            update = source.bind(report)(update);
            source = update.Text;
            update = {'variant': 'heading-md/extrabold', 'color': 'header-primary'};
            update['children'] = config;
            source = sequen.bind(report)(source, update);
            update = new Array(3);
            update[0] = source;
            source = vacuum;
            if(!source) { _fun00002_ip = 664; continue _fun00001 }
 660:
            source = entity != limora;
 664:
            if(!source) { _fun00002_ip = 780; continue _fun00001 }
 667:
            record = _closure1_slot12;
            config = _closure1_slot0;
            status = _closure1_slot2;
            sequen = status[ctrled];
            sequen = config.bind(report)(sequen);
            config = sequen.Text;
            sequen = {'variant': 'text-sm/normal', 'color': 'header-secondary', 'style': null, 'lineClamp': 3, 'ellipsizeMode': 'tail'};
            cntext = yankee.messageContent;
            sequen['style'] = cntext;
            papara = _closure1_slot1;
            cntext = 19;
            cntext = status[cntext];
            sierra = papara.bind(report)(cntext);
            status = sierra.parse;
            papara = {};
            cntext = echoed.guild_id;
            papara['guildId'] = cntext;
            cntext = echoed.id;
            papara['channelId'] = cntext;
            cntext = true;
            cntext = status.bind(sierra)(limora, cntext, papara);
            sequen['children'] = cntext;
            source = record.bind(report)(config, sequen);
 780:
            update[1] = source;
            source = !vacuum;
            if(vacuum) { _fun00002_ip = 903; continue _fun00001 }
 790:
            sequen = _closure1_slot12;
            vacuum = _closure1_slot0;
            cntext = _closure1_slot2;
            ctrled = cntext[ctrled];
            ctrled = vacuum.bind(report)(ctrled);
            vacuum = ctrled.Text;
            ctrled = {'variant': 'text-sm/normal', 'color': 'header-secondary', 'style': null, 'lineClamp': 3, 'ellipsizeMode': 'tail'};
            config = yankee.messageContent;
            ctrled['style'] = config;
            record = _closure1_slot1;
            config = 19;
            config = cntext[config];
            papara = record.bind(report)(config);
            cntext = papara.parse;
            record = {};
            config = echoed.guild_id;
            record['guildId'] = config;
            config = echoed.id;
            record['channelId'] = config;
            config = true;
            config = cntext.bind(papara)(target, config, record);
            ctrled['children'] = config;
            source = sequen.bind(report)(vacuum, ctrled);
 903:
            update[2] = source;
            oscard['children'] = update;
            romeon = backup.bind(report)(romeon, oscard);
            oscard = new Array(3);
            oscard[0] = romeon;
            romeon = entity != offset;
            offset = null;
            if(!romeon) { _fun00002_ip = 978; continue _fun00001 }
 934:
            romeon = entity != golfie;
            offset = null;
            if(!romeon) { _fun00002_ip = 978; continue _fun00001 }
 943:
            update = _closure1_slot12;
            backup = _closure1_slot5;
            romeon = {};
            source = {};
            source['uri'] = golfie;
            romeon['source'] = source;
            source = yankee.icon;
            romeon['style'] = source;
            offset = update.bind(report)(backup, romeon);
 978:
            oscard[1] = offset;
            offset = entity != golfie;
            golfie = null;
            if(offset) { _fun00002_ip = 1148; continue _fun00001 }
 994:
            offset = entity == foxtra;
            golfie = null;
            if(offset) { _fun00002_ip = 1148; continue _fun00001 }
 1006:
            if(!(entity != foxtra)) { _fun00002_ip = 1024; continue _fun00001 }
 1010:
            offset = foxtra.blocked;
            golfie = null;
            if(offset) { _fun00002_ip = 1148; continue _fun00001 }
 1024:
            offset = entity == result;
            golfie = null;
            if(offset) { _fun00002_ip = 1148; continue _fun00001 }
 1033:
            offset = _closure1_slot12;
            backup = _closure1_slot0;
            romeon = _closure1_slot2;
            option = romeon[option];
            option = backup.bind(report)(option);
            verify = option.ForumPostMediaThumbnail;
            option = {};
            option['channel'] = echoed;
            option['media'] = result;
            option['isEmbed'] = output;
            romeon = romeon[kiloes];
            kiloes = backup.bind(report)(romeon);
            backup = kiloes.getEmbedColor;
            romeon = entity != sizing;
            if(!romeon) { _fun00002_ip = 1101; continue _fun00001 }
 1098:
            romeon = sizing;
 1101:
            romeon = backup.bind(kiloes)(foxtra, romeon);
            option['embedLeftBorderColor'] = romeon;
            backup = entity == foxtra;
            romeon = undefined;
            if(backup) { _fun00002_ip = 1126; continue _fun00001 }
 1121:
            romeon = foxtra.id;
 1126:
            option['firstMessageId'] = romeon;
            yankee = yankee.thumbnail;
            option['containerStyle'] = yankee;
            golfie = offset.bind(report)(verify, option);
 1148:
            oscard[2] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 1164:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    yankee = 1;
    tangon = oscard[yankee];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot4 = golfie;
    tangon = tangon.Image;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Permissions;
    var _closure1_slot10 = golfie;
    tangon = tangon.Routes;
    var _closure1_slot11 = tangon;
    tangon = 7;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot12 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot13 = tangon;
    offset = 8;
    tangon = oscard[offset];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'paddingHorizontal': 12, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center'};
    tangon['container'] = verify;
    verify = {'padding': 20, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center'};
    tangon['emptyStateContainer'] = verify;
    verify = {'backgroundColor': null, 'marginBottom': 8, 'padding': 12, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'flex-start'};
    romeon = 9;
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = backup;
    romeon = oscard[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.sm;
    verify['borderRadius'] = romeon;
    tangon['channelContainer'] = verify;
    verify = {};
    verify['marginTop'] = offset;
    tangon['messageContent'] = verify;
    verify = {};
    verify['flex'] = yankee;
    tangon['textContent'] = verify;
    verify = {};
    verify['marginLeft'] = offset;
    tangon['thumbnail'] = verify;
    verify = {'marginTop': 12, 'marginBottom': 20};
    tangon['emptyStateImage'] = verify;
    verify = {'width': 72, 'height': 72};
    tangon['icon'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 25;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding_home/native/GuildHomeResources.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: GuildHomeResources
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = entity.guildId;
            var _closure2_slot0 = michal;
            entity = _closure1_slot14;
            report = undefined;
            option = entity.bind(report)();
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 20;
            entity = tangon[entity];
            entity = zuuluu.bind(report)(entity);
            verify = entity.bind(report)(michal);
            michal = verify.length;
            entity = 0;
            if(!(entity !== michal)) { _fun00008_ip = 114; continue _fun00007 }
 63:
            zuuluu = _closure1_slot12;
            michal = _closure1_slot4;
            entity = {};
            tangon = option.container;
            entity['style'] = tangon;
            oscard = verify.map;
            tangon = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot12;
                tangon = _closure1_slot15;
                zuuluu = {};
                michal = entity.channelId;
                zuuluu['channelId'] = michal;
                michal = entity.title;
                zuuluu['title'] = michal;
                michal = entity.icon;
                zuuluu['icon'] = michal;
                michal = entity.description;
                zuuluu['description'] = michal;
                oscard = entity.channelId;
                entity = global;
                entity = entity.HermesInternal;
                michal = entity.concat;
                entity = 'resource-';
                michal = michal.bind(entity)(oscard);
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            tangon = oscard.bind(verify)(tangon);
            entity['children'] = tangon;
            entity = zuuluu.bind(report)(michal, entity);
            _fun00008_ip = 393; continue _fun00007;
 114:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot4;
            michal = {};
            oscard = option.emptyStateContainer;
            michal['style'] = oscard;
            romeon = _closure1_slot12;
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            oscard = 18;
            oscard = backup[oscard];
            oscard = foxtra.bind(report)(oscard);
            verify = oscard.Text;
            oscard = {'variant': 'heading-xl/bold', 'color': 'header-primary'};
            offset = 22;
            kiloes = backup[offset];
            kiloes = foxtra.bind(report)(kiloes);
            output = kiloes.intl;
            sizing = output.string;
            kiloes = backup[offset];
            kiloes = foxtra.bind(report)(kiloes);
            kiloes = kiloes.t;
            kiloes = kiloes.owvC9f;
            kiloes = sizing.bind(output)(kiloes);
            oscard['children'] = kiloes;
            verify = romeon.bind(report)(verify, oscard);
            oscard = new Array(3);
            oscard[0] = verify;
            kiloes = _closure1_slot12;
            romeon = _closure1_slot5;
            verify = {};
            option = option.emptyStateImage;
            verify['style'] = option;
            option = _closure1_slot1;
            sizing = 23;
            sizing = backup[sizing];
            sizing = option.bind(report)(sizing);
            verify['source'] = sizing;
            verify = kiloes.bind(report)(romeon, verify);
            oscard[1] = verify;
            verify = _closure1_slot12;
            golfie = 24;
            golfie = backup[golfie];
            option = option.bind(report)(golfie);
            golfie = {};
            yankee = function() { // Original name: onPress
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.getDefaultChannel;
                    entity = _closure2_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    michal = null;
                    if(!(michal != entity)) { _fun00010_ip = 89; continue _fun00009 }
 31:
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 21;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = oscard.bind(michal)(zuuluu);
                    michal = zuuluu.transitionTo;
                    oscard = _closure1_slot11;
                    report = oscard.CHANNEL;
                    tangon = _closure2_slot0;
                    entity = entity.id;
                    entity = report.bind(oscard)(tangon, entity);
                    entity = michal.bind(zuuluu)(entity);
 89:
                    entity = undefined;
                    return entity;
                }
            };
            golfie['onPress'] = yankee;
            yankee = backup[offset];
            yankee = foxtra.bind(report)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            offset = backup[offset];
            offset = foxtra.bind(report)(offset);
            offset = offset.t;
            offset = offset.3iCBUl;
            offset = yankee.bind(romeon)(offset);
            golfie['text'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[2] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 393:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();