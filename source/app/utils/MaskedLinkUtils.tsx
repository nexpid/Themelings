// app/utils/MaskedLinkUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ChannelTypes;
    var _closure1_slot10 = golf;
    golf = tango.AnalyticEvents;
    var _closure1_slot11 = golf;
    golf = tango.GuildFeatures;
    var _closure1_slot12 = golf;
    tango = tango.MessageFlags;
    var _closure1_slot13 = tango;
    tango = 23;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/MaskedLinkUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: isLinkTrusted
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = _closure1_slot4;
            mike = tango.getChannel;
            report = _closure1_slot9;
            entity = report.getChannelId;
            entity = entity.bind(report)();
            oscar = mike.bind(tango)(entity);
            entity = null;
            mike = entity != oscar;
            if(!mike) { _fun00002_ip = 59; continue _fun00001 }
 40:
            report = oscar.type;
            tango = _closure1_slot10;
            tango = tango.DM;
            mike = report === tango;
 59:
            if(!mike) { _fun00002_ip = 104; continue _fun00001 }
 62:
            tango = _closure1_slot8;
            zulu = tango.isFriend;
            report = oscar.getRecipientId;
            report = report.bind(oscar)();
            oscar = entity != report;
            entity = '';
            if(!oscar) { _fun00002_ip = 96; continue _fun00001 }
 93:
            entity = report;
 96:
            entity = zulu.bind(tango)(entity);
            mike = !entity;
 104:
            entity = !mike;
            if(mike) { _fun00002_ip = 120; continue _fun00001 }
 110:
            zulu = argFoo;
            mike = argBar;
            entity = zulu === mike;
 120:
            return entity;
        }
    };
    zulu['isLinkTrusted'] = tango;
    mike = function(argFoo, argBar) { // Original name: handleClick
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            verify = argFoo;
            zulu = arguments[2];
            entity = argBar;
            offset = undefined;
            if(!(zulu === offset)) { _fun00004_ip = 21; continue _fun00003 }
 17:
            zulu = new Array(0);
 21:
            sierra = zulu;
            tango = arguments[3];
            sequence = undefined;
            record = undefined;
            var _closure2_slot0 = offset;
            config = undefined;
            options = undefined;
            variable38 = undefined;
            kilo = undefined;
            var _closure2_slot1 = offset;
            source = undefined;
            mike = undefined;
            var _closure2_slot2 = offset;
            backup = undefined;
            var _closure2_slot3 = offset;
            golf = undefined;
            var _closure2_slot4 = offset;
            sizing = undefined;
            var _closure2_slot5 = offset;
            foxtrot = undefined;
            var _closure2_slot6 = offset;
            romeo = undefined;
            var _closure2_slot7 = offset;
            yankee = undefined;
            variable41 = undefined;
            variable37 = undefined;
            quebec = undefined;
            variable36 = undefined;
            papa = undefined;
            status = undefined;
            target = undefined;
            equality = undefined;
            lima = undefined;
            whiskey = undefined;
            context = undefined;
            oscar = undefined;
            update = undefined;
            echo = undefined;
            vacuum = undefined;
            result = undefined;
            output = undefined;
            sequence = verify.trusted;
            record = verify.onClick;
            zulu = verify.onConfirm;
            _closure2_slot0 = zulu;
            config = verify.onCancel;
            options = verify.shouldConfirm;
            variable38 = verify.messageId;
            zulu = verify.channelId;
            kilo = zulu;
            _closure2_slot1 = zulu;
            variable39 = _closure1_slot1;
            variable40 = _closure1_slot2;
            zulu = 8;
            zulu = variable40[zulu];
            variable40 = variable39.bind(offset)(zulu);
            variable39 = variable40.sanitizeUrl;
            zulu = verify.href;
            variable39 = variable39.bind(variable40)(zulu);
            source = variable39;
            zulu = null;
            if(!(zulu != variable39)) { _fun00004_ip = 1987; continue _fun00003 }
 224:
            variable39 = source;
            mike = variable39;
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
            mike = source;
            _closure2_slot2 = source;
 274:
            backup = null;
            _closure2_slot3 = zulu;
            source = false;
            golf = false;
            _closure2_slot4 = source;
            variable39 = variable38;
            sizing = variable39;
            _closure2_slot5 = variable39;
            variable40 = kilo;
            foxtrot = variable40;
            _closure2_slot6 = variable40;
            romeo = null;
            _closure2_slot7 = zulu;
            if(!(zulu != variable39)) { _fun00004_ip = 832; continue _fun00003 }
 321:
            variable39 = kilo;
            if(!(zulu != variable39)) { _fun00004_ip = 832; continue _fun00003 }
 331:
            variable42 = _closure1_slot7;
            variable39 = variable42.getMessage;
            variable40 = kilo;
            quebec = variable39.bind(variable42)(variable40, variable38);
            variable39 = _closure1_slot4;
            variable38 = variable39.getBasicChannel;
            variable38 = variable38.bind(variable39)(variable40);
            variable36 = variable38;
            variable39 = zulu == variable38;
            variable38 = undefined;
            if(variable39) { _fun00004_ip = 385; continue _fun00003 }
 377:
            variable39 = variable36;
            variable38 = variable39.guild_id;
 385:
            yankee = variable38;
            variable38 = zulu != variable38;
            variable39 = null;
            if(!variable38) { _fun00004_ip = 400; continue _fun00003 }
 397:
            variable39 = yankee;
 400:
            backup = variable39;
            _closure2_slot3 = variable39;
            variable38 = _closure1_slot5;
            yankee = variable38.getGuild;
            papa = yankee.bind(variable38)(variable39);
            variable40 = quebec;
            variable42 = zulu == variable40;
            variable40 = undefined;
            if(variable42) { _fun00004_ip = 459; continue _fun00003 }
 433:
            variable42 = quebec;
            variable42 = variable42.messageReference;
            variable41 = variable42;
            variable42 = zulu == variable42;
            variable40 = undefined;
            if(variable42) { _fun00004_ip = 459; continue _fun00003 }
 454:
            variable40 = variable41.guild_id;
 459:
            variable40 = zulu != variable40;
            variable39 = variable40;
            if(!variable40) { _fun00004_ip = 494; continue _fun00003 }
 469:
            variable40 = quebec;
            variable41 = zulu == variable40;
            variable40 = undefined;
            if(variable41) { _fun00004_ip = 490; continue _fun00003 }
 481:
            variable41 = quebec;
            variable40 = variable41.webhookId;
 490:
            variable39 = zulu != variable40;
 494:
            variable38 = variable39;
            if(!variable39) { _fun00004_ip = 539; continue _fun00003 }
 500:
            variable39 = quebec;
            variable40 = zulu == variable39;
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
            yankee = zulu != variable38;
 552:
            status = yankee;
            if(!yankee) { _fun00004_ip = 600; continue _fun00003 }
 558:
            yankee = quebec;
            variable38 = zulu == yankee;
            yankee = undefined;
            if(variable38) { _fun00004_ip = 596; continue _fun00003 }
 570:
            variable38 = quebec;
            variable38 = variable38.messageReference;
            variable37 = variable38;
            variable38 = zulu == variable38;
            yankee = undefined;
            if(variable38) { _fun00004_ip = 596; continue _fun00003 }
 591:
            yankee = variable37.guild_id;
 596:
            if(!(zulu == yankee)) { _fun00004_ip = 612; continue _fun00003 }
 600:
            yankee = backup;
            romeo = yankee;
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
            foxtrot = variable37;
            _closure2_slot6 = variable37;
            yankee = yankee.messageReference;
            yankee = yankee.guild_id;
            romeo = yankee;
            _closure2_slot7 = yankee;
 670:
            variable37 = variable36;
            variable38 = zulu == variable37;
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
            variable36 = papa;
            variable37 = zulu == variable36;
            variable36 = undefined;
            if(variable37) { _fun00004_ip = 743; continue _fun00003 }
 719:
            variable38 = papa;
            variable37 = variable38.hasFeature;
            papa = _closure1_slot12;
            papa = papa.COMMUNITY;
            variable36 = variable37.bind(variable38)(papa);
 743:
            papa = true;
            yankee = papa === variable36;
 749:
            target = yankee;
            yankee = quebec;
            yankee = zulu == yankee;
            papa = undefined;
            if(yankee) { _fun00004_ip = 788; continue _fun00003 }
 764:
            variable37 = quebec;
            variable36 = variable37.hasFlag;
            yankee = _closure1_slot13;
            yankee = yankee.EPHEMERAL;
            papa = variable36.bind(variable37)(yankee);
 788:
            yankee = true;
            equality = yankee === papa;
            quebec = zulu != quebec;
            papa = quebec;
            if(!quebec) { _fun00004_ip = 807; continue _fun00003 }
 804:
            papa = !equality;
 807:
            yankee = papa;
            if(!papa) { _fun00004_ip = 825; continue _fun00003 }
 813:
            papa = status;
            if(status) { _fun00004_ip = 822; continue _fun00003 }
 819:
            papa = target;
 822:
            yankee = papa;
 825:
            golf = yankee;
            _closure2_slot4 = yankee;
 832:
            yankee = kilo;
            if(!(zulu != yankee)) { _fun00004_ip = 1142; continue _fun00003 }
 842:
            target = _closure1_slot4;
            papa = target.getChannel;
            yankee = kilo;
            yankee = papa.bind(target)(yankee);
            lima = yankee;
            target = _closure1_slot5;
            papa = target.getGuild;
            status = zulu == yankee;
            yankee = undefined;
            if(status) { _fun00004_ip = 893; continue _fun00003 }
 880:
            equality = lima;
            status = equality.getGuildId;
            yankee = status.bind(equality)();
 893:
            whiskey = papa.bind(target)(yankee);
            target = lima;
            target = zulu != target;
            papa = target;
            if(!target) { _fun00004_ip = 918; continue _fun00003 }
 911:
            target = whiskey;
            papa = zulu != target;
 918:
            yankee = papa;
            if(!papa) { _fun00004_ip = 948; continue _fun00003 }
 924:
            status = whiskey;
            target = status.hasFeature;
            papa = _closure1_slot12;
            papa = papa.DISCOVERABLE;
            yankee = target.bind(status)(papa);
 948:
            if(!yankee) { _fun00004_ip = 1049; continue _fun00003 }
 951:
            papa = _closure1_slot1;
            variable36 = _closure1_slot2;
            yankee = 11;
            yankee = variable36[yankee];
            status = papa.bind(offset)(yankee);
            target = status.track;
            yankee = _closure1_slot11;
            papa = yankee.URL_CLICKED;
            yankee = {};
            quebec = _closure1_slot0;
            equality = 12;
            equality = variable36[equality];
            variable36 = quebec.bind(offset)(equality);
            quebec = variable36.getHostname;
            equality = mike;
            equality = quebec.bind(variable36)(equality);
            yankee['url_domain'] = equality;
            whiskey = whiskey.id;
            yankee['guild_id'] = whiskey;
            lima = lima.id;
            yankee['channel_id'] = lima;
            yankee = target.bind(status)(papa, yankee);
 1049:
            papa = _closure1_slot1;
            target = _closure1_slot2;
            yankee = 13;
            yankee = target[yankee];
            papa = papa.bind(offset)(yankee);
            yankee = kilo;
            yankee = papa.bind(offset)(yankee);
            if(!yankee) { _fun00004_ip = 1142; continue _fun00003 }
 1080:
            papa = _closure1_slot1;
            target = _closure1_slot2;
            yankee = 11;
            yankee = target[yankee];
            status = papa.bind(offset)(yankee);
            target = status.track;
            yankee = _closure1_slot11;
            papa = yankee.CHANGE_LOG_CTA_CLICKED;
            yankee = {};
            lima = 'inline_link';
            yankee['cta_type'] = lima;
            lima = mike;
            yankee['target'] = lima;
            yankee = target.bind(status)(papa, yankee);
 1142:
            target = _closure1_slot1;
            papa = _closure1_slot2;
            yankee = 14;
            papa = papa[yankee];
            status = target.bind(offset)(papa);
            target = status.trackLinkClicked;
            papa = mike;
            papa = target.bind(status)(papa);
            papa = record;
            if(!(zulu == papa)) { _fun00004_ip = 1252; continue _fun00003 }
 1183:
            target = _closure1_slot0;
            status = _closure1_slot2;
            papa = 15;
            papa = status[papa];
            papa = target.bind(offset)(papa);
            status = papa.default;
            target = mike;
            papa = {};
            papa['skipExtensionCheck'] = offset;
            papa['analyticsLocations'] = sierra;
            papa = status.bind(offset)(target, papa);
            context = papa;
            if(!(zulu != papa)) { _fun00004_ip = 1269; continue _fun00003 }
 1236:
            papa = context;
            context = entity;
            context = papa.bind(offset)(context);
            if(!context) { _fun00004_ip = 1269; continue _fun00003 }
 1250:
            return offset;
 1252:
            context = record;
            record = entity;
            record = context.bind(offset)(record);
            if(record) { _fun00004_ip = 1985; continue _fun00003 }
 1269:
            oscar = function() { // Original name: handleConfirm
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = _closure2_slot4;
                    if(!mike) { _fun00006_ip = 90; continue _fun00005 }
 10:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 14;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.trackAnnouncementMessageLinkClicked;
                    mike = {};
                    report = _closure2_slot5;
                    mike['messageId'] = report;
                    report = _closure2_slot1;
                    mike['channelId'] = report;
                    report = _closure2_slot3;
                    mike['guildId'] = report;
                    report = _closure2_slot6;
                    mike['sourceChannelId'] = report;
                    report = _closure2_slot7;
                    mike['sourceGuildId'] = report;
                    mike = zulu.bind(tango)(mike);
 90:
                    zulu = _closure2_slot0;
                    mike = null;
                    if(!(mike != zulu)) { _fun00006_ip = 112; continue _fun00005 }
 100:
                    zulu = _closure2_slot0;
                    mike = undefined;
                    mike = zulu.bind(mike)();
                    _fun00006_ip = 146; continue _fun00005;
 112:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 16;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    entity = _closure2_slot2;
                    entity = mike.bind(zulu)(entity);
 146:
                    entity = undefined;
                    return entity;
                }
            };
            record = config;
            if(!(zulu == record)) { _fun00004_ip = 1288; continue _fun00003 }
 1281:
            control = function() {
                entity = undefined;
                return entity;
            };
            _fun00004_ip = 1291; continue _fun00003;
 1288:
            control = config;
 1291:
            update = control;
            record = _closure1_slot3;
            config = record.isBlockedDomain;
            control = mike;
            control = config.bind(record)(control);
            if(!(zulu === control)) { _fun00004_ip = 1930; continue _fun00003 }
 1321:
            config = _closure1_slot0;
            record = _closure1_slot2;
            control = 18;
            control = record[control];
            record = config.bind(offset)(control);
            config = record.shouldShowLinkNotDiscordWarning;
            control = mike;
            control = config.bind(record)(control);
            if(control) { _fun00004_ip = 1872; continue _fun00003 }
 1361:
            control = sequence;
            config = 'function';
            control = typeof control;
            if(!(config !== control)) { _fun00004_ip = 1380; continue _fun00003 }
 1375:
            control = sequence;
            _fun00004_ip = 1384; continue _fun00003;
 1380:
            control = sequence.bind(offset)();
 1384:
            echo = control;
            sequence = _closure1_slot0;
            config = _closure1_slot2;
            control = 12;
            control = config[control];
            config = sequence.bind(offset)(control);
            sequence = config.getProtocol;
            control = mike;
            config = sequence.bind(config)(control);
            vacuum = config;
            sequence = 'http:';
            sequence = sequence === config;
            control = sequence;
            if(sequence) { _fun00004_ip = 1449; continue _fun00003 }
 1438:
            sequence = vacuum;
            vacuum = 'https:';
            control = vacuum === sequence;
 1449:
            result = !control;
            if(!control) { _fun00004_ip = 1487; continue _fun00003 }
 1455:
            if(echo) { _fun00004_ip = 1792; continue _fun00003 }
 1461:
            vacuum = _closure1_slot6;
            control = vacuum.isTrustedDomain;
            echo = mike;
            echo = control.bind(vacuum)(echo);
            if(echo) { _fun00004_ip = 1792; continue _fun00003 }
 1487:
            echo = result;
            if(!echo) { _fun00004_ip = 1519; continue _fun00003 }
 1493:
            vacuum = _closure1_slot6;
            control = vacuum.isTrustedProtocol;
            echo = mike;
            echo = control.bind(vacuum)(echo);
            if(echo) { _fun00004_ip = 1792; continue _fun00003 }
 1519:
            echo = entity;
            if(!(zulu != echo)) { _fun00004_ip = 1539; continue _fun00003 }
 1526:
            control = entity;
            echo = control.preventDefault;
            echo = echo.bind(control)();
 1539:
            if(result) { _fun00004_ip = 1695; continue _fun00003 }
 1545:
            echo = _closure1_slot0;
            control = _closure1_slot2;
            result = 20;
            result = control[result];
            control = echo.bind(offset)(result);
            echo = control.punycodeLink;
            result = mike;
            result = echo.bind(control)(result);
            output = result;
            if(!(zulu == result)) { _fun00004_ip = 1591; continue _fun00003 }
 1586:
            control = mike;
            _fun00004_ip = 1597; continue _fun00003;
 1591:
            control = output.displayTarget;
 1597:
            result = _closure1_slot1;
            sequence = _closure1_slot2;
            output = 21;
            output = sequence[output];
            echo = result.bind(offset)(output);
            result = echo.show;
            output = {};
            output['url'] = control;
            vacuum = _closure1_slot0;
            control = 22;
            control = sequence[control];
            control = vacuum.bind(offset)(control);
            control = control.trustDomain;
            output['trustUrl'] = control;
            control = oscar;
            output['onConfirm'] = control;
            control = update;
            output['onCancel'] = control;
            output['isProtocol'] = source;
            source = tango;
            output['contextKey'] = source;
            output = result.bind(echo)(output);
            _fun00004_ip = 1870; continue _fun00003;
 1695:
            result = _closure1_slot1;
            vacuum = _closure1_slot2;
            output = 21;
            output = vacuum[output];
            echo = result.bind(offset)(output);
            result = echo.show;
            output = {};
            source = mike;
            output['url'] = source;
            control = _closure1_slot0;
            source = 22;
            source = vacuum[source];
            source = control.bind(offset)(source);
            source = source.trustProtocol;
            output['trustUrl'] = source;
            source = oscar;
            output['onConfirm'] = source;
            output['onCancel'] = update;
            update = true;
            output['isProtocol'] = update;
            update = tango;
            output['contextKey'] = update;
            output = result.bind(echo)(output);
            _fun00004_ip = 1870; continue _fun00003;
 1792:
            output = entity;
            if(!(zulu != output)) { _fun00004_ip = 1866; continue _fun00003 }
 1799:
            output = options;
            if(!(zulu != output)) { _fun00004_ip = 1809; continue _fun00003 }
 1806:
            if(options) { _fun00004_ip = 1866; continue _fun00003 }
 1809:
            if(!golf) { _fun00004_ip = 1870; continue _fun00003 }
 1812:
            options = _closure1_slot1;
            golf = _closure1_slot2;
            golf = golf[yankee];
            yankee = options.bind(offset)(golf);
            options = yankee.trackAnnouncementMessageLinkClicked;
            golf = {};
            golf['messageId'] = sizing;
            golf['channelId'] = kilo;
            golf['guildId'] = backup;
            golf['sourceChannelId'] = foxtrot;
            golf['sourceGuildId'] = romeo;
            golf = options.bind(yankee)(golf);
            _fun00004_ip = 1870; continue _fun00003;
 1866:
            oscar = oscar.bind(offset)();
 1870:
            return offset;
 1872:
            oscar = entity;
            if(!(zulu != oscar)) { _fun00004_ip = 1892; continue _fun00003 }
 1879:
            golf = entity;
            oscar = golf.preventDefault;
            oscar = oscar.bind(golf)();
 1892:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            oscar = 19;
            oscar = options[oscar];
            options = golf.bind(offset)(oscar);
            golf = options.show;
            oscar = mike;
            oscar = golf.bind(options)(oscar);
            oscar = undefined;
            return oscar;
 1930:
            oscar = entity;
            if(!(zulu != oscar)) { _fun00004_ip = 1950; continue _fun00003 }
 1937:
            golf = entity;
            oscar = golf.preventDefault;
            oscar = oscar.bind(golf)();
 1950:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            oscar = 17;
            oscar = options[oscar];
            golf = golf.bind(offset)(oscar);
            oscar = golf.show;
            mike = oscar.bind(golf)(mike);
            mike = undefined;
            return mike;
 1985:
            return offset;
 1987:
            mike = entity;
            if(!(zulu != mike)) { _fun00004_ip = 2007; continue _fun00003 }
 1994:
            mike = entity;
            entity = mike.preventDefault;
            entity = entity.bind(mike)();
 2007:
            mike = _closure1_slot1;
            yankee = _closure1_slot2;
            entity = 9;
            entity = yankee[entity];
            zulu = mike.bind(offset)(entity);
            mike = zulu.show;
            entity = {};
            oscar = _closure1_slot0;
            report = 10;
            golf = yankee[report];
            golf = oscar.bind(offset)(golf);
            romeo = golf.intl;
            options = romeo.string;
            golf = yankee[report];
            golf = oscar.bind(offset)(golf);
            golf = golf.t;
            golf = golf.x87gam;
            golf = options.bind(romeo)(golf);
            entity['title'] = golf;
            golf = yankee[report];
            golf = oscar.bind(offset)(golf);
            options = golf.intl;
            golf = options.format;
            report = yankee[report];
            report = oscar.bind(offset)(report);
            report = report.t;
            oscar = report.9rqRws;
            report = {};
            verify = verify.href;
            report['url'] = verify;
            report = golf.bind(options)(oscar, report);
            entity['body'] = report;
            report = true;
            entity['isDismissable'] = report;
            entity['contextKey'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        }
    };
    zulu['handleClick'] = mike;
    return entity;
})();