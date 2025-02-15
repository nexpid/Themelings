// app/modules/search_v2/native/components/list/rows/MessageRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: GuildChannelMessageRowHeader
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            options = mike.channel;
            var _closure2_slot0 = options;
            verify = mike.muted;
            oscar = mike.isFavorite;
            mike = _closure1_slot12;
            tango = undefined;
            romeo = mike.bind(tango)();
            yankee = _closure1_slot0;
            sizing = _closure1_slot2;
            mike = 10;
            mike = sizing[mike];
            report = yankee.bind(tango)(mike);
            zulu = report.useStateFromStores;
            offset = _closure1_slot8;
            mike = new Array(1);
            mike[0] = offset;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure1_slot8;
                    mike = zulu.getGuild;
                    entity = _closure2_slot0;
                    entity = entity.guild_id;
                    mike = mike.bind(zulu)(entity);
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun00004_ip = 46; continue _fun00003 }
 40:
                    entity = mike.rulesChannelId;
 46:
                    return entity;
                }
            };
            offset = zulu.bind(report)(mike, entity);
            entity = 11;
            entity = sizing[entity];
            zulu = yankee.bind(tango)(entity);
            mike = zulu.getChannelIcon;
            entity = {};
            report = options.id;
            report = offset === report;
            entity['isRulesChannel'] = report;
            output = mike.bind(zulu)(options, entity);
            result = _closure1_slot1;
            entity = 12;
            entity = sizing[entity];
            entity = result.bind(tango)(entity);
            backup = entity.bind(tango)(options);
            zulu = _closure1_slot11;
            mike = _closure1_slot4;
            entity = {};
            report = romeo.header;
            entity['style'] = report;
            foxtrot = _closure1_slot10;
            kilo = 13;
            report = sizing[kilo];
            offset = result.bind(tango)(report);
            report = {};
            report['source'] = output;
            output = sizing[kilo];
            output = result.bind(tango)(output);
            output = output.Sizes;
            output = output.REFRESH_SMALL_16;
            report['size'] = output;
            output = romeo.channelIcon;
            report['style'] = output;
            offset = foxtrot.bind(tango)(offset, report);
            report = new Array(5);
            report[0] = offset;
            foxtrot = _closure1_slot10;
            offset = 14;
            offset = sizing[offset];
            offset = yankee.bind(tango)(offset);
            yankee = offset.Text;
            offset = {'lineClamp': 1, 'variant': 'text-sm/semibold', 'color': 'interactive-normal'};
            sizing = romeo.channelName;
            offset['style'] = sizing;
            offset['children'] = backup;
            offset = foxtrot.bind(tango)(yankee, offset);
            report[1] = offset;
            if(!verify) { _fun00002_ip = 382; continue _fun00001 }
 302:
            foxtrot = _closure1_slot10;
            sizing = _closure1_slot1;
            backup = _closure1_slot2;
            offset = backup[kilo];
            yankee = sizing.bind(tango)(offset);
            offset = {};
            output = 15;
            output = backup[output];
            output = sizing.bind(tango)(output);
            offset['source'] = output;
            backup = backup[kilo];
            backup = sizing.bind(tango)(backup);
            backup = backup.Sizes;
            backup = backup.EXTRA_SMALL;
            offset['size'] = backup;
            backup = romeo.channelStatus;
            offset['style'] = backup;
            verify = foxtrot.bind(tango)(yankee, offset);
 382:
            report[2] = verify;
            if(!oscar) { _fun00002_ip = 469; continue _fun00001 }
 389:
            yankee = _closure1_slot10;
            backup = _closure1_slot1;
            foxtrot = _closure1_slot2;
            verify = foxtrot[kilo];
            offset = backup.bind(tango)(verify);
            verify = {};
            sizing = 16;
            sizing = foxtrot[sizing];
            sizing = backup.bind(tango)(sizing);
            verify['source'] = sizing;
            foxtrot = foxtrot[kilo];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.Sizes;
            foxtrot = foxtrot.EXTRA_SMALL;
            verify['size'] = foxtrot;
            romeo = romeo.channelStatus;
            verify['style'] = romeo;
            oscar = yankee.bind(tango)(offset, verify);
 469:
            report[3] = oscar;
            oscar = options.isSystemDM;
            oscar = oscar.bind(options)();
            if(!oscar) { _fun00002_ip = 550; continue _fun00001 }
 486:
            verify = _closure1_slot10;
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            offset = 17;
            golf = romeo[offset];
            options = yankee.bind(tango)(golf);
            golf = {};
            offset = romeo[offset];
            offset = yankee.bind(tango)(offset);
            offset = offset.Types;
            offset = offset.SYSTEM_DM;
            golf['type'] = offset;
            offset = true;
            golf['verified'] = offset;
            oscar = verify.bind(tango)(options, golf);
 550:
            report[4] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: MessageRowIcon
        entity = argFoo;
        report = entity.message;
        verify = entity.channel;
        tango = _closure1_slot10;
        mike = _closure1_slot1;
        options = _closure1_slot2;
        oscar = 18;
        entity = options[oscar];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = {};
        offset = report.author;
        entity['user'] = offset;
        verify = verify.guild_id;
        entity['guildId'] = verify;
        golf = _closure1_slot0;
        oscar = options[oscar];
        oscar = golf.bind(zulu)(oscar);
        oscar = oscar.AvatarSizes;
        oscar = oscar.LARGE_48;
        entity['size'] = oscar;
        report = report.author;
        report = report.avatarDecoration;
        entity['avatarDecoration'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: PrivateChannelMessageRowLabel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            verify = mike.message;
            var _closure2_slot0 = verify;
            result = mike.channel;
            var _closure2_slot1 = result;
            foxtrot = mike.muted;
            mike = _closure1_slot12;
            tango = undefined;
            offset = mike.bind(tango)();
            oscar = _closure1_slot3;
            report = oscar.useMemo;
            mike = verify.author;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 19;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getName;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sizing = report.bind(oscar)(mike, zulu);
            report = _closure1_slot3;
            zulu = report.useEffect;
            mike = new Array(1);
            mike[0] = result;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = zulu.isDM;
                    mike = mike.bind(zulu)();
                    if(mike) { _fun00008_ip = 34; continue _fun00007 }
 20:
                    tango = _closure2_slot1;
                    zulu = tango.isGroupDM;
                    mike = zulu.bind(tango)();
 34:
                    if(!mike) { _fun00008_ip = 66; continue _fun00007 }
 37:
                    entity = _closure2_slot1;
                    zulu = entity.recipients;
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 20;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.getUser;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 66:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot11;
            mike = _closure1_slot4;
            entity = {};
            report = offset.labelContainer;
            entity['style'] = report;
            yankee = _closure1_slot11;
            options = _closure1_slot4;
            report = {};
            oscar = offset.channelName;
            report['style'] = oscar;
            kilo = _closure1_slot10;
            backup = _closure1_slot0;
            romeo = _closure1_slot2;
            oscar = 14;
            romeo = romeo[oscar];
            romeo = backup.bind(tango)(romeo);
            backup = romeo.Text;
            romeo = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'interactive-active'};
            output = offset.channelName;
            romeo['style'] = output;
            romeo['children'] = sizing;
            backup = kilo.bind(tango)(backup, romeo);
            romeo = new Array(3);
            romeo[0] = backup;
            if(!foxtrot) { _fun00006_ip = 305; continue _fun00005 }
 222:
            sizing = _closure1_slot10;
            echo = _closure1_slot1;
            update = _closure1_slot2;
            output = 13;
            backup = update[output];
            kilo = echo.bind(tango)(backup);
            backup = {};
            source = 15;
            source = update[source];
            source = echo.bind(tango)(source);
            backup['source'] = source;
            output = update[output];
            output = echo.bind(tango)(output);
            output = output.Sizes;
            output = output.EXTRA_SMALL;
            backup['size'] = output;
            output = offset.channelStatus;
            backup['style'] = output;
            foxtrot = sizing.bind(tango)(kilo, backup);
 305:
            romeo[1] = foxtrot;
            foxtrot = result.isSystemDM;
            foxtrot = foxtrot.bind(result)();
            if(!foxtrot) { _fun00006_ip = 386; continue _fun00005 }
 322:
            sizing = _closure1_slot10;
            echo = _closure1_slot1;
            update = _closure1_slot2;
            output = 17;
            backup = update[output];
            kilo = echo.bind(tango)(backup);
            backup = {};
            output = update[output];
            output = echo.bind(tango)(output);
            output = output.Types;
            output = output.SYSTEM_DM;
            backup['type'] = output;
            output = true;
            backup['verified'] = output;
            foxtrot = sizing.bind(tango)(kilo, backup);
 386:
            romeo[2] = foxtrot;
            report['children'] = romeo;
            options = yankee.bind(tango)(options, report);
            report = new Array(3);
            report[0] = options;
            romeo = _closure1_slot10;
            foxtrot = _closure1_slot0;
            sizing = _closure1_slot2;
            oscar = sizing[oscar];
            oscar = foxtrot.bind(tango)(oscar);
            yankee = oscar.Text;
            options = {'variant': 'text-xs/medium', 'color': 'interactive-active', 'lineClamp': 1};
            oscar = offset.timestamp;
            options['style'] = oscar;
            oscar = 21;
            oscar = sizing[oscar];
            kilo = foxtrot.bind(tango)(oscar);
            backup = kilo.getRelativeTimestamp;
            foxtrot = _closure1_slot1;
            oscar = 22;
            oscar = sizing[oscar];
            output = foxtrot.bind(tango)(oscar);
            sizing = output.extractTimestamp;
            foxtrot = verify.id;
            oscar = null;
            if(!(oscar == foxtrot)) { _fun00006_ip = 514; continue _fun00005 }
 509:
            foxtrot = result.id;
 514:
            foxtrot = sizing.bind(output)(foxtrot);
            foxtrot = backup.bind(kilo)(foxtrot);
            options['children'] = foxtrot;
            options = romeo.bind(tango)(yankee, options);
            report[1] = options;
            options = verify.isPoll;
            options = options.bind(verify)();
            oscar = null;
            if(!options) { _fun00006_ip = 595; continue _fun00005 }
 553:
            verify = _closure1_slot10;
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            golf = 23;
            golf = yankee[golf];
            options = options.bind(tango)(golf);
            golf = {};
            offset = offset.pollBadge;
            golf['style'] = offset;
            oscar = verify.bind(tango)(options, golf);
 595:
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: GuildChannelMessageRowLabel
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            verify = entity.message;
            result = entity.channel;
            entity = _closure1_slot12;
            tango = undefined;
            offset = entity.bind(tango)();
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 10;
            entity = zulu[entity];
            oscar = mike.bind(tango)(entity);
            report = oscar.useStateFromStores;
            entity = _closure1_slot5;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                entity = _closure1_slot5;
                entity = entity.roleStyle;
                return entity;
            };
            romeo = report.bind(oscar)(mike, entity);
            mike = _closure1_slot1;
            entity = 24;
            entity = zulu[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.bind(tango)(verify);
            echo = entity.nick;
            kilo = entity.colorString;
            entity = 'username';
            if(!(entity === romeo)) { _fun00010_ip = 125; continue _fun00009 }
 119:
            entity = null;
            if(!(entity == kilo)) { _fun00010_ip = 129; continue _fun00009 }
 125:
            update = {};
            _fun00010_ip = 138; continue _fun00009;
 129:
            entity = {};
            entity['color'] = kilo;
            update = entity;
 138:
            zulu = _closure1_slot11;
            mike = _closure1_slot4;
            entity = {};
            report = offset.labelContainer;
            entity['style'] = report;
            yankee = _closure1_slot11;
            options = _closure1_slot4;
            report = {};
            oscar = offset.channelName;
            report['style'] = oscar;
            oscar = 'dot';
            oscar = oscar === romeo;
            if(!oscar) { _fun00010_ip = 195; continue _fun00009 }
 189:
            romeo = null;
            oscar = romeo != kilo;
 195:
            if(!oscar) { _fun00010_ip = 248; continue _fun00009 }
 198:
            backup = _closure1_slot10;
            foxtrot = _closure1_slot0;
            sizing = _closure1_slot2;
            romeo = 25;
            romeo = sizing[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            foxtrot = romeo.RoleDot;
            romeo = {};
            sizing = 'small';
            romeo['size'] = sizing;
            romeo['color'] = kilo;
            oscar = backup.bind(tango)(foxtrot, romeo);
 248:
            romeo = new Array(2);
            romeo[0] = oscar;
            output = _closure1_slot10;
            foxtrot = _closure1_slot0;
            sizing = _closure1_slot2;
            oscar = 14;
            backup = sizing[oscar];
            backup = foxtrot.bind(tango)(backup);
            kilo = backup.Text;
            backup = {'variant': 'text-sm/semibold', 'color': 'interactive-active', 'lineClamp': 1};
            backup['style'] = update;
            backup['children'] = echo;
            backup = output.bind(tango)(kilo, backup);
            romeo[1] = backup;
            report['children'] = romeo;
            options = yankee.bind(tango)(options, report);
            report = new Array(3);
            report[0] = options;
            romeo = _closure1_slot10;
            oscar = sizing[oscar];
            oscar = foxtrot.bind(tango)(oscar);
            yankee = oscar.Text;
            options = {'variant': 'text-xs/medium', 'color': 'header-secondary', 'lineClamp': 1};
            oscar = offset.timestamp;
            options['style'] = oscar;
            oscar = 21;
            oscar = sizing[oscar];
            kilo = foxtrot.bind(tango)(oscar);
            backup = kilo.getRelativeTimestamp;
            foxtrot = _closure1_slot1;
            oscar = 22;
            oscar = sizing[oscar];
            output = foxtrot.bind(tango)(oscar);
            sizing = output.extractTimestamp;
            foxtrot = verify.id;
            oscar = null;
            if(!(oscar == foxtrot)) { _fun00010_ip = 433; continue _fun00009 }
 428:
            foxtrot = result.id;
 433:
            foxtrot = sizing.bind(output)(foxtrot);
            foxtrot = backup.bind(kilo)(foxtrot);
            options['children'] = foxtrot;
            options = romeo.bind(tango)(yankee, options);
            report[1] = options;
            options = verify.isPoll;
            options = options.bind(verify)();
            oscar = null;
            if(!options) { _fun00010_ip = 514; continue _fun00009 }
 472:
            verify = _closure1_slot10;
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            golf = 23;
            golf = yankee[golf];
            options = options.bind(tango)(golf);
            golf = {};
            offset = offset.pollBadge;
            golf['style'] = offset;
            oscar = verify.bind(tango)(options, golf);
 514:
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Platform;
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot10 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot11 = tango;
    yankee = 8;
    tango = oscar[yankee];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'marginRight': 5, 'alignSelf': 'center'};
    tango['channelIcon'] = offset;
    offset = {'marginLeft': 5, 'alignSelf': 'center'};
    romeo = 9;
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.INTERACTIVE_NORMAL;
    offset['tintColor'] = romeo;
    tango['channelStatus'] = offset;
    romeo = 'row';
    offset = {'flexDirection': 'row', 'width': '100%', 'marginBottom': 2};
    tango['labelContainer'] = offset;
    offset = {};
    offset['flexDirection'] = romeo;
    tango['channelName'] = offset;
    offset = {};
    offset['marginLeft'] = yankee;
    tango['timestamp'] = offset;
    offset = {'marginLeft': 8, 'opacity': 0.8};
    tango['timestampMuted'] = offset;
    offset = {'flexDirection': 'row', 'marginRight': 16, 'marginBottom': 12};
    tango['header'] = offset;
    offset = {};
    romeo = 'flex-start';
    offset['alignItems'] = romeo;
    tango['body'] = offset;
    offset = {};
    offset['marginLeft'] = yankee;
    tango['pollBadge'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot12 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: MessageRow
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            sizing = entity.message;
            var _closure2_slot0 = sizing;
            zulu = entity.onPress;
            var _closure2_slot1 = zulu;
            romeo = entity.lineClamp;
            yankee = entity.messageSizeCacheRef;
            report = undefined;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            entity = _closure1_slot12;
            oscar = entity.bind(report)();
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 10;
            entity = entity[verify];
            offset = tango.bind(report)(entity);
            golf = offset.useStateFromStores;
            entity = _closure1_slot7;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                zulu = _closure1_slot7;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channel_id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = golf.bind(offset)(tango, entity);
            var _closure2_slot2 = foxtrot;
            entity = null;
            golf = entity == foxtrot;
            tango = undefined;
            if(golf) { _fun00012_ip = 130; continue _fun00011 }
 125:
            tango = foxtrot.guild_id;
 130:
            _closure2_slot3 = tango;
            golf = _closure1_slot0;
            tango = _closure1_slot2;
            offset = tango[verify];
            output = golf.bind(report)(offset);
            kilo = output.useStateFromStores;
            offset = _closure1_slot6;
            backup = new Array(1);
            backup[0] = offset;
            offset = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot3;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00014_ip = 43; continue _fun00013 }
 16:
                    tango = _closure1_slot6;
                    zulu = tango.isFavorite;
                    mike = _closure2_slot0;
                    mike = mike.channel_id;
                    entity = zulu.bind(tango)(mike);
 43:
                    return entity;
                }
            };
            offset = kilo.bind(output)(backup, offset);
            _closure2_slot4 = offset;
            tango = tango[verify];
            backup = golf.bind(report)(tango);
            verify = backup.useStateFromStores;
            tango = _closure1_slot9;
            golf = new Array(1);
            golf[0] = tango;
            tango = function() {
                tango = _closure1_slot9;
                zulu = tango.isChannelMuted;
                mike = _closure2_slot3;
                entity = _closure2_slot0;
                entity = entity.channel_id;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            result = verify.bind(backup)(golf, tango);
            _closure2_slot5 = result;
            verify = _closure1_slot3;
            golf = verify.useCallback;
            backup = sizing.channel_id;
            tango = new Array(3);
            tango[0] = backup;
            backup = sizing.id;
            tango[1] = backup;
            tango[2] = zulu;
            zulu = function() {
                tango = _closure2_slot1;
                entity = _closure2_slot0;
                zulu = entity.channel_id;
                mike = entity.id;
                entity = undefined;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            golf = golf.bind(verify)(zulu, tango);
            backup = _closure1_slot3;
            verify = backup.useMemo;
            tango = entity == foxtrot;
            zulu = undefined;
            if(tango) { _fun00012_ip = 299; continue _fun00011 }
 294:
            zulu = foxtrot.guild_id;
 299:
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot2;
                    mike = null;
                    tango = mike == entity;
                    entity = undefined;
                    if(tango) { _fun00016_ip = 27; continue _fun00015 }
 18:
                    zulu = _closure2_slot2;
                    entity = zulu.guild_id;
 27:
                    if(!(mike != entity)) { _fun00016_ip = 40; continue _fun00015 }
 31:
                    entity = _closure1_slot16;
                    _fun00016_ip = 47; continue _fun00015;
 40:
                    entity = _closure1_slot15;
 47:
                    return entity;
                }
            };
            output = verify.bind(backup)(zulu, tango);
            verify = _closure1_slot3;
            tango = verify.useMemo;
            zulu = new Array(3);
            zulu[0] = foxtrot;
            zulu[1] = offset;
            zulu[2] = result;
            mike = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    mike = _closure2_slot2;
                    entity = null;
                    zulu = entity == mike;
                    report = undefined;
                    mike = undefined;
                    if(zulu) { _fun00018_ip = 29; continue _fun00017 }
 20:
                    zulu = _closure2_slot2;
                    mike = zulu.guild_id;
 29:
                    mike = entity != mike;
                    entity = null;
                    if(!mike) { _fun00018_ip = 83; continue _fun00017 }
 38:
                    tango = _closure1_slot10;
                    zulu = _closure1_slot13;
                    mike = {};
                    golf = _closure2_slot2;
                    mike['channel'] = golf;
                    golf = _closure2_slot5;
                    mike['muted'] = golf;
                    oscar = _closure2_slot4;
                    mike['isFavorite'] = oscar;
                    entity = tango.bind(report)(zulu, mike);
 83:
                    return entity;
                }
            };
            verify = tango.bind(verify)(mike, zulu);
            mike = entity == foxtrot;
            entity = null;
            if(mike) { _fun00012_ip = 582; continue _fun00011 }
 370:
            tango = _closure1_slot10;
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            mike = 26;
            mike = kilo[mike];
            mike = backup.bind(report)(mike);
            zulu = mike.SearchListRow;
            mike = {};
            mike['header'] = verify;
            echo = _closure1_slot10;
            offset = _closure1_slot14;
            verify = {};
            verify['message'] = sizing;
            verify['channel'] = foxtrot;
            verify = echo.bind(report)(offset, verify);
            mike['icon'] = verify;
            offset = _closure1_slot10;
            verify = {};
            verify['message'] = sizing;
            verify['channel'] = foxtrot;
            verify['muted'] = result;
            verify = offset.bind(report)(output, verify);
            mike['label'] = verify;
            offset = _closure1_slot10;
            options = 27;
            options = kilo[options];
            options = backup.bind(report)(options);
            verify = options.SearchChannelRowPreview;
            options = {};
            options['message'] = sizing;
            options['channel'] = foxtrot;
            foxtrot = false;
            options['muted'] = foxtrot;
            foxtrot = 28;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(report)(foxtrot);
            foxtrot = foxtrot.ChannelListLayoutTypes;
            foxtrot = foxtrot.COZY;
            options['layout'] = foxtrot;
            foxtrot = 'interactive-normal';
            options['color'] = foxtrot;
            options['lineClamp'] = romeo;
            options['messageSizeCacheRef'] = yankee;
            options = offset.bind(report)(verify, options);
            mike['subLabel'] = options;
            mike['onPress'] = golf;
            oscar = oscar.body;
            mike['bodyStyle'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 582:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 29;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/list/rows/MessageRow.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();