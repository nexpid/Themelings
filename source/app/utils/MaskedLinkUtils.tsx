// app/utils/MaskedLinkUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ChannelTypes;
    var _closure1_slot10 = golfie;
    golfie = tangon.AnalyticEvents;
    var _closure1_slot11 = golfie;
    golfie = tangon.GuildFeatures;
    var _closure1_slot12 = golfie;
    tangon = tangon.MessageFlags;
    var _closure1_slot13 = tangon;
    tangon = 23;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/MaskedLinkUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: isLinkTrusted
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot4;
            michal = tangon.getChannel;
            report = _closure1_slot9;
            entity = report.getChannelId;
            entity = entity.bind(report)();
            oscard = michal.bind(tangon)(entity);
            entity = null;
            michal = entity != oscard;
            if(!michal) { _fun00002_ip = 59; continue _fun00001 }
 40:
            report = oscard.type;
            tangon = _closure1_slot10;
            tangon = tangon.DM;
            michal = report === tangon;
 59:
            if(!michal) { _fun00002_ip = 104; continue _fun00001 }
 62:
            tangon = _closure1_slot8;
            zuuluu = tangon.isFriend;
            report = oscard.getRecipientId;
            report = report.bind(oscard)();
            oscard = entity != report;
            entity = '';
            if(!oscard) { _fun00002_ip = 96; continue _fun00001 }
 93:
            entity = report;
 96:
            entity = zuuluu.bind(tangon)(entity);
            michal = !entity;
 104:
            entity = !michal;
            if(michal) { _fun00002_ip = 120; continue _fun00001 }
 110:
            zuuluu = argFoo;
            michal = argBar;
            entity = zuuluu === michal;
 120:
            return entity;
        }
    };
    zuuluu['isLinkTrusted'] = tangon;
    michal = function(argFoo, argBar) { // Original name: handleClick
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            verify = argFoo;
            zuuluu = arguments[2];
            entity = argBar;
            offset = undefined;
            if(!(zuuluu === offset)) { _fun00004_ip = 21; continue _fun00003 }
 17:
            zuuluu = new Array(0);
 21:
            sierra = zuuluu;
            tangon = arguments[3];
            sequen = undefined;
            record = undefined;
            var _closure2_slot0 = offset;
            config = undefined;
            option = undefined;
            variable38 = undefined;
            kiloes = undefined;
            var _closure2_slot1 = offset;
            source = undefined;
            michal = undefined;
            var _closure2_slot2 = offset;
            backup = undefined;
            var _closure2_slot3 = offset;
            golfie = undefined;
            var _closure2_slot4 = offset;
            sizing = undefined;
            var _closure2_slot5 = offset;
            foxtra = undefined;
            var _closure2_slot6 = offset;
            romeon = undefined;
            var _closure2_slot7 = offset;
            yankee = undefined;
            variable41 = undefined;
            variable37 = undefined;
            quebec = undefined;
            variable36 = undefined;
            papara = undefined;
            status = undefined;
            target = undefined;
            equals = undefined;
            limora = undefined;
            whisks = undefined;
            cntext = undefined;
            oscard = undefined;
            update = undefined;
            echoed = undefined;
            vacuum = undefined;
            result = undefined;
            output = undefined;
            sequen = verify.trusted;
            record = verify.onClick;
            zuuluu = verify.onConfirm;
            _closure2_slot0 = zuuluu;
            config = verify.onCancel;
            option = verify.shouldConfirm;
            variable38 = verify.messageId;
            zuuluu = verify.channelId;
            kiloes = zuuluu;
            _closure2_slot1 = zuuluu;
            variable39 = _closure1_slot1;
            variable40 = _closure1_slot2;
            zuuluu = 8;
            zuuluu = variable40[zuuluu];
            variable40 = variable39.bind(offset)(zuuluu);
            variable39 = variable40.sanitizeUrl;
            zuuluu = verify.href;
            variable39 = variable39.bind(variable40)(zuuluu);
            source = variable39;
            zuuluu = null;
            if(!(zuuluu != variable39)) { _fun00004_ip = 1987; continue _fun00003 }
 224:
            variable39 = source;
            michal = variable39;
            _closure2_slot2 = variable39;
 234: // try_start_0
            variable39 = global;
            variable40 = variable39.decodeURI;
            variable39 = source;
            variable39 = variable40.bind(offset)(variable39);
 250: // try_end0
            _fun00004_ip = 274; continue _fun00003;
 252: // catch_target0
            CatchBlockStart(arg_register=38);
            variable39 = global;
            variable39 = variable39.encodeURI;
            source = variable39.bind(offset)(source);
            michal = source;
            _closure2_slot2 = source;
 274:
            backup = null;
            _closure2_slot3 = zuuluu;
            source = false;
            golfie = false;
            _closure2_slot4 = source;
            variable39 = variable38;
            sizing = variable39;
            _closure2_slot5 = variable39;
            variable40 = kiloes;
            foxtra = variable40;
            _closure2_slot6 = variable40;
            romeon = null;
            _closure2_slot7 = zuuluu;
            if(!(zuuluu != variable39)) { _fun00004_ip = 832; continue _fun00003 }
 321:
            variable39 = kiloes;
            if(!(zuuluu != variable39)) { _fun00004_ip = 832; continue _fun00003 }
 331:
            variable42 = _closure1_slot7;
            variable39 = variable42.getMessage;
            variable40 = kiloes;
            quebec = variable39.bind(variable42)(variable40, variable38);
            variable39 = _closure1_slot4;
            variable38 = variable39.getBasicChannel;
            variable38 = variable38.bind(variable39)(variable40);
            variable36 = variable38;
            variable39 = zuuluu == variable38;
            variable38 = undefined;
            if(variable39) { _fun00004_ip = 385; continue _fun00003 }
 377:
            variable39 = variable36;
            variable38 = variable39.guild_id;
 385:
            yankee = variable38;
            variable38 = zuuluu != variable38;
            variable39 = null;
            if(!variable38) { _fun00004_ip = 400; continue _fun00003 }
 397:
            variable39 = yankee;
 400:
            backup = variable39;
            _closure2_slot3 = variable39;
            variable38 = _closure1_slot5;
            yankee = variable38.getGuild;
            papara = yankee.bind(variable38)(variable39);
            variable40 = quebec;
            variable42 = zuuluu == variable40;
            variable40 = undefined;
            if(variable42) { _fun00004_ip = 459; continue _fun00003 }
 433:
            variable42 = quebec;
            variable42 = variable42.messageReference;
            variable41 = variable42;
            variable42 = zuuluu == variable42;
            variable40 = undefined;
            if(variable42) { _fun00004_ip = 459; continue _fun00003 }
 454:
            variable40 = variable41.guild_id;
 459:
            variable40 = zuuluu != variable40;
            variable39 = variable40;
            if(!variable40) { _fun00004_ip = 494; continue _fun00003 }
 469:
            variable40 = quebec;
            variable41 = zuuluu == variable40;
            variable40 = undefined;
            if(variable41) { _fun00004_ip = 490; continue _fun00003 }
 481:
            variable41 = quebec;
            variable40 = variable41.webhookId;
 490:
            variable39 = zuuluu != variable40;
 494:
            variable38 = variable39;
            if(!variable39) { _fun00004_ip = 539; continue _fun00003 }
 500:
            variable39 = quebec;
            variable40 = zuuluu == variable39;
            variable39 = undefined;
            if(variable40) { _fun00004_ip = 536; continue _fun00003 }
 512:
            variable42 = quebec;
            variable41 = variable42.hasFlag;
            variable40 = _closure1_slot13;
            variable40 = variable40.IS_CROSSPOST;
            variable39 = variable41.bind(variable42)(variable40);
 536:
            variable38 = variable39;
 539:
            yankee = variable38;
            if(!variable38) { _fun00004_ip = 552; continue _fun00003 }
 545:
            variable38 = backup;
            yankee = zuuluu != variable38;
 552:
            status = yankee;
            if(!yankee) { _fun00004_ip = 600; continue _fun00003 }
 558:
            yankee = quebec;
            variable38 = zuuluu == yankee;
            yankee = undefined;
            if(variable38) { _fun00004_ip = 596; continue _fun00003 }
 570:
            variable38 = quebec;
            variable38 = variable38.messageReference;
            variable37 = variable38;
            variable38 = zuuluu == variable38;
            yankee = undefined;
            if(variable38) { _fun00004_ip = 596; continue _fun00003 }
 591:
            yankee = variable37.guild_id;
 596:
            if(!(zuuluu == yankee)) { _fun00004_ip = 612; continue _fun00003 }
 600:
            yankee = backup;
            romeon = yankee;
            _closure2_slot7 = yankee;
            _fun00004_ip = 670; continue _fun00003;
 612:
            yankee = quebec;
            variable37 = yankee.messageReference;
            variable37 = variable37.message_id;
            sizing = variable37;
            _closure2_slot5 = variable37;
            variable37 = yankee.messageReference;
            variable37 = variable37.channel_id;
            foxtra = variable37;
            _closure2_slot6 = variable37;
            yankee = yankee.messageReference;
            yankee = yankee.guild_id;
            romeon = yankee;
            _closure2_slot7 = yankee;
 670:
            variable37 = variable36;
            variable38 = zuuluu == variable37;
            variable37 = undefined;
            if(variable38) { _fun00004_ip = 687; continue _fun00003 }
 682:
            variable37 = variable36.type;
 687:
            variable36 = _closure1_slot10;
            variable36 = variable36.GUILD_ANNOUNCEMENT;
            variable36 = variable37 === variable36;
            yankee = variable36;
            if(!variable36) { _fun00004_ip = 749; continue _fun00003 }
 707:
            variable36 = papara;
            variable37 = zuuluu == variable36;
            variable36 = undefined;
            if(variable37) { _fun00004_ip = 743; continue _fun00003 }
 719:
            variable38 = papara;
            variable37 = variable38.hasFeature;
            papara = _closure1_slot12;
            papara = papara.COMMUNITY;
            variable36 = variable37.bind(variable38)(papara);
 743:
            papara = true;
            yankee = papara === variable36;
 749:
            target = yankee;
            yankee = quebec;
            yankee = zuuluu == yankee;
            papara = undefined;
            if(yankee) { _fun00004_ip = 788; continue _fun00003 }
 764:
            variable37 = quebec;
            variable36 = variable37.hasFlag;
            yankee = _closure1_slot13;
            yankee = yankee.EPHEMERAL;
            papara = variable36.bind(variable37)(yankee);
 788:
            yankee = true;
            equals = yankee === papara;
            quebec = zuuluu != quebec;
            papara = quebec;
            if(!quebec) { _fun00004_ip = 807; continue _fun00003 }
 804:
            papara = !equals;
 807:
            yankee = papara;
            if(!papara) { _fun00004_ip = 825; continue _fun00003 }
 813:
            papara = status;
            if(status) { _fun00004_ip = 822; continue _fun00003 }
 819:
            papara = target;
 822:
            yankee = papara;
 825:
            golfie = yankee;
            _closure2_slot4 = yankee;
 832:
            yankee = kiloes;
            if(!(zuuluu != yankee)) { _fun00004_ip = 1142; continue _fun00003 }
 842:
            target = _closure1_slot4;
            papara = target.getChannel;
            yankee = kiloes;
            yankee = papara.bind(target)(yankee);
            limora = yankee;
            target = _closure1_slot5;
            papara = target.getGuild;
            status = zuuluu == yankee;
            yankee = undefined;
            if(status) { _fun00004_ip = 893; continue _fun00003 }
 880:
            equals = limora;
            status = equals.getGuildId;
            yankee = status.bind(equals)();
 893:
            whisks = papara.bind(target)(yankee);
            target = limora;
            target = zuuluu != target;
            papara = target;
            if(!target) { _fun00004_ip = 918; continue _fun00003 }
 911:
            target = whisks;
            papara = zuuluu != target;
 918:
            yankee = papara;
            if(!papara) { _fun00004_ip = 948; continue _fun00003 }
 924:
            status = whisks;
            target = status.hasFeature;
            papara = _closure1_slot12;
            papara = papara.DISCOVERABLE;
            yankee = target.bind(status)(papara);
 948:
            if(!yankee) { _fun00004_ip = 1049; continue _fun00003 }
 951:
            papara = _closure1_slot1;
            variable36 = _closure1_slot2;
            yankee = 11;
            yankee = variable36[yankee];
            status = papara.bind(offset)(yankee);
            target = status.track;
            yankee = _closure1_slot11;
            papara = yankee.URL_CLICKED;
            yankee = {};
            quebec = _closure1_slot0;
            equals = 12;
            equals = variable36[equals];
            variable36 = quebec.bind(offset)(equals);
            quebec = variable36.getHostname;
            equals = michal;
            equals = quebec.bind(variable36)(equals);
            yankee['url_domain'] = equals;
            whisks = whisks.id;
            yankee['guild_id'] = whisks;
            limora = limora.id;
            yankee['channel_id'] = limora;
            yankee = target.bind(status)(papara, yankee);
 1049:
            papara = _closure1_slot1;
            target = _closure1_slot2;
            yankee = 13;
            yankee = target[yankee];
            papara = papara.bind(offset)(yankee);
            yankee = kiloes;
            yankee = papara.bind(offset)(yankee);
            if(!yankee) { _fun00004_ip = 1142; continue _fun00003 }
 1080:
            papara = _closure1_slot1;
            target = _closure1_slot2;
            yankee = 11;
            yankee = target[yankee];
            status = papara.bind(offset)(yankee);
            target = status.track;
            yankee = _closure1_slot11;
            papara = yankee.CHANGE_LOG_CTA_CLICKED;
            yankee = {};
            limora = 'inline_link';
            yankee['cta_type'] = limora;
            limora = michal;
            yankee['target'] = limora;
            yankee = target.bind(status)(papara, yankee);
 1142:
            target = _closure1_slot1;
            papara = _closure1_slot2;
            yankee = 14;
            papara = papara[yankee];
            status = target.bind(offset)(papara);
            target = status.trackLinkClicked;
            papara = michal;
            papara = target.bind(status)(papara);
            papara = record;
            if(!(zuuluu == papara)) { _fun00004_ip = 1252; continue _fun00003 }
 1183:
            target = _closure1_slot0;
            status = _closure1_slot2;
            papara = 15;
            papara = status[papara];
            papara = target.bind(offset)(papara);
            status = papara.default;
            target = michal;
            papara = {};
            papara['skipExtensionCheck'] = offset;
            papara['analyticsLocations'] = sierra;
            papara = status.bind(offset)(target, papara);
            cntext = papara;
            if(!(zuuluu != papara)) { _fun00004_ip = 1269; continue _fun00003 }
 1236:
            papara = cntext;
            cntext = entity;
            cntext = papara.bind(offset)(cntext);
            if(!cntext) { _fun00004_ip = 1269; continue _fun00003 }
 1250:
            return offset;
 1252:
            cntext = record;
            record = entity;
            record = cntext.bind(offset)(record);
            if(record) { _fun00004_ip = 1985; continue _fun00003 }
 1269:
            oscard = function() { // Original name: handleConfirm
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot4;
                    if(!michal) { _fun00006_ip = 90; continue _fun00005 }
 10:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 14;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.trackAnnouncementMessageLinkClicked;
                    michal = {};
                    report = _closure2_slot5;
                    michal['messageId'] = report;
                    report = _closure2_slot1;
                    michal['channelId'] = report;
                    report = _closure2_slot3;
                    michal['guildId'] = report;
                    report = _closure2_slot6;
                    michal['sourceChannelId'] = report;
                    report = _closure2_slot7;
                    michal['sourceGuildId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 90:
                    zuuluu = _closure2_slot0;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00006_ip = 112; continue _fun00005 }
 100:
                    zuuluu = _closure2_slot0;
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
                    _fun00006_ip = 146; continue _fun00005;
 112:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 16;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    entity = _closure2_slot2;
                    entity = michal.bind(zuuluu)(entity);
 146:
                    entity = undefined;
                    return entity;
                }
            };
            record = config;
            if(!(zuuluu == record)) { _fun00004_ip = 1288; continue _fun00003 }
 1281:
            ctrled = function() {
                entity = undefined;
                return entity;
            };
            _fun00004_ip = 1291; continue _fun00003;
 1288:
            ctrled = config;
 1291:
            update = ctrled;
            record = _closure1_slot3;
            config = record.isBlockedDomain;
            ctrled = michal;
            ctrled = config.bind(record)(ctrled);
            if(!(zuuluu === ctrled)) { _fun00004_ip = 1930; continue _fun00003 }
 1321:
            config = _closure1_slot0;
            record = _closure1_slot2;
            ctrled = 18;
            ctrled = record[ctrled];
            record = config.bind(offset)(ctrled);
            config = record.shouldShowLinkNotDiscordWarning;
            ctrled = michal;
            ctrled = config.bind(record)(ctrled);
            if(ctrled) { _fun00004_ip = 1872; continue _fun00003 }
 1361:
            ctrled = sequen;
            config = 'function';
            ctrled = typeof ctrled;
            if(!(config !== ctrled)) { _fun00004_ip = 1380; continue _fun00003 }
 1375:
            ctrled = sequen;
            _fun00004_ip = 1384; continue _fun00003;
 1380:
            ctrled = sequen.bind(offset)();
 1384:
            echoed = ctrled;
            sequen = _closure1_slot0;
            config = _closure1_slot2;
            ctrled = 12;
            ctrled = config[ctrled];
            config = sequen.bind(offset)(ctrled);
            sequen = config.getProtocol;
            ctrled = michal;
            config = sequen.bind(config)(ctrled);
            vacuum = config;
            sequen = 'http:';
            sequen = sequen === config;
            ctrled = sequen;
            if(sequen) { _fun00004_ip = 1449; continue _fun00003 }
 1438:
            sequen = vacuum;
            vacuum = 'https:';
            ctrled = vacuum === sequen;
 1449:
            result = !ctrled;
            if(!ctrled) { _fun00004_ip = 1487; continue _fun00003 }
 1455:
            if(echoed) { _fun00004_ip = 1792; continue _fun00003 }
 1461:
            vacuum = _closure1_slot6;
            ctrled = vacuum.isTrustedDomain;
            echoed = michal;
            echoed = ctrled.bind(vacuum)(echoed);
            if(echoed) { _fun00004_ip = 1792; continue _fun00003 }
 1487:
            echoed = result;
            if(!echoed) { _fun00004_ip = 1519; continue _fun00003 }
 1493:
            vacuum = _closure1_slot6;
            ctrled = vacuum.isTrustedProtocol;
            echoed = michal;
            echoed = ctrled.bind(vacuum)(echoed);
            if(echoed) { _fun00004_ip = 1792; continue _fun00003 }
 1519:
            echoed = entity;
            if(!(zuuluu != echoed)) { _fun00004_ip = 1539; continue _fun00003 }
 1526:
            ctrled = entity;
            echoed = ctrled.preventDefault;
            echoed = echoed.bind(ctrled)();
 1539:
            if(result) { _fun00004_ip = 1695; continue _fun00003 }
 1545:
            echoed = _closure1_slot0;
            ctrled = _closure1_slot2;
            result = 20;
            result = ctrled[result];
            ctrled = echoed.bind(offset)(result);
            echoed = ctrled.punycodeLink;
            result = michal;
            result = echoed.bind(ctrled)(result);
            output = result;
            if(!(zuuluu == result)) { _fun00004_ip = 1591; continue _fun00003 }
 1586:
            ctrled = michal;
            _fun00004_ip = 1597; continue _fun00003;
 1591:
            ctrled = output.displayTarget;
 1597:
            result = _closure1_slot1;
            sequen = _closure1_slot2;
            output = 21;
            output = sequen[output];
            echoed = result.bind(offset)(output);
            result = echoed.show;
            output = {};
            output['url'] = ctrled;
            vacuum = _closure1_slot0;
            ctrled = 22;
            ctrled = sequen[ctrled];
            ctrled = vacuum.bind(offset)(ctrled);
            ctrled = ctrled.trustDomain;
            output['trustUrl'] = ctrled;
            ctrled = oscard;
            output['onConfirm'] = ctrled;
            ctrled = update;
            output['onCancel'] = ctrled;
            output['isProtocol'] = source;
            source = tangon;
            output['contextKey'] = source;
            output = result.bind(echoed)(output);
            _fun00004_ip = 1870; continue _fun00003;
 1695:
            result = _closure1_slot1;
            vacuum = _closure1_slot2;
            output = 21;
            output = vacuum[output];
            echoed = result.bind(offset)(output);
            result = echoed.show;
            output = {};
            source = michal;
            output['url'] = source;
            ctrled = _closure1_slot0;
            source = 22;
            source = vacuum[source];
            source = ctrled.bind(offset)(source);
            source = source.trustProtocol;
            output['trustUrl'] = source;
            source = oscard;
            output['onConfirm'] = source;
            output['onCancel'] = update;
            update = true;
            output['isProtocol'] = update;
            update = tangon;
            output['contextKey'] = update;
            output = result.bind(echoed)(output);
            _fun00004_ip = 1870; continue _fun00003;
 1792:
            output = entity;
            if(!(zuuluu != output)) { _fun00004_ip = 1866; continue _fun00003 }
 1799:
            output = option;
            if(!(zuuluu != output)) { _fun00004_ip = 1809; continue _fun00003 }
 1806:
            if(option) { _fun00004_ip = 1866; continue _fun00003 }
 1809:
            if(!golfie) { _fun00004_ip = 1870; continue _fun00003 }
 1812:
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            golfie = golfie[yankee];
            yankee = option.bind(offset)(golfie);
            option = yankee.trackAnnouncementMessageLinkClicked;
            golfie = {};
            golfie['messageId'] = sizing;
            golfie['channelId'] = kiloes;
            golfie['guildId'] = backup;
            golfie['sourceChannelId'] = foxtra;
            golfie['sourceGuildId'] = romeon;
            golfie = option.bind(yankee)(golfie);
            _fun00004_ip = 1870; continue _fun00003;
 1866:
            oscard = oscard.bind(offset)();
 1870:
            return offset;
 1872:
            oscard = entity;
            if(!(zuuluu != oscard)) { _fun00004_ip = 1892; continue _fun00003 }
 1879:
            golfie = entity;
            oscard = golfie.preventDefault;
            oscard = oscard.bind(golfie)();
 1892:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 19;
            oscard = option[oscard];
            option = golfie.bind(offset)(oscard);
            golfie = option.show;
            oscard = michal;
            oscard = golfie.bind(option)(oscard);
            oscard = undefined;
            return oscard;
 1930:
            oscard = entity;
            if(!(zuuluu != oscard)) { _fun00004_ip = 1950; continue _fun00003 }
 1937:
            golfie = entity;
            oscard = golfie.preventDefault;
            oscard = oscard.bind(golfie)();
 1950:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 17;
            oscard = option[oscard];
            golfie = golfie.bind(offset)(oscard);
            oscard = golfie.show;
            michal = oscard.bind(golfie)(michal);
            michal = undefined;
            return michal;
 1985:
            return offset;
 1987:
            michal = entity;
            if(!(zuuluu != michal)) { _fun00004_ip = 2007; continue _fun00003 }
 1994:
            michal = entity;
            entity = michal.preventDefault;
            entity = entity.bind(michal)();
 2007:
            michal = _closure1_slot1;
            yankee = _closure1_slot2;
            entity = 9;
            entity = yankee[entity];
            zuuluu = michal.bind(offset)(entity);
            michal = zuuluu.show;
            entity = {};
            oscard = _closure1_slot0;
            report = 10;
            golfie = yankee[report];
            golfie = oscard.bind(offset)(golfie);
            romeon = golfie.intl;
            option = romeon.string;
            golfie = yankee[report];
            golfie = oscard.bind(offset)(golfie);
            golfie = golfie.t;
            golfie = golfie.x87gam;
            golfie = option.bind(romeon)(golfie);
            entity['title'] = golfie;
            golfie = yankee[report];
            golfie = oscard.bind(offset)(golfie);
            option = golfie.intl;
            golfie = option.format;
            report = yankee[report];
            report = oscard.bind(offset)(report);
            report = report.t;
            oscard = report.9rqRws;
            report = {};
            verify = verify.href;
            report['url'] = verify;
            report = golfie.bind(option)(oscard, report);
            entity['body'] = report;
            report = true;
            entity['isDismissable'] = report;
            entity['contextKey'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        }
    };
    zuuluu['handleClick'] = michal;
    return entity;
})();