// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    offset = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = options;
    tango = function(argFoo) { // Original name: useVoiceChannelUsers
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 18;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresArray;
        golf = _closure1_slot7;
        zulu = new Array(3);
        zulu[0] = golf;
        golf = _closure1_slot6;
        zulu[1] = golf;
        oscar = _closure1_slot5;
        zulu[2] = oscar;
        oscar = mike.channelId;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            report = _closure1_slot7;
            tango = report.getVoiceStatesForChannel;
            zulu = _closure2_slot0;
            zulu = zulu.channelId;
            tango = tango.bind(report)(zulu);
            report = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 19;
            zulu = golf[zulu];
            oscar = undefined;
            zulu = report.bind(oscar)(zulu);
            report = zulu.bind(oscar)(tango);
            tango = report.map;
            zulu = function(argFoo) {
                zulu = _closure1_slot6;
                mike = zulu.getUser;
                entity = argFoo;
                entity = entity.userId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.filter;
            report = _closure1_slot0;
            mike = 20;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.isNotNullish;
            tango = zulu.bind(tango)(mike);
            zulu = tango.orderBy;
            mike = new Array(1);
            entity = function(argFoo) {
                _fun115330: for(var _fun115330_ip = 0; ; ) switch(_fun115330_ip) {
 0:
                    zulu = _closure1_slot5;
                    mike = zulu.getUserAffinity;
                    entity = argFoo;
                    entity = entity.id;
                    zulu = mike.bind(zulu)(entity);
                    entity = null;
                    tango = entity == zulu;
                    mike = undefined;
                    if(tango) { _fun115330_ip = 43; continue _fun115330 }
 37:
                    mike = zulu.affinity;
 43:
                    zulu = entity != mike;
                    entity = 0;
                    if(!zulu) { _fun115330_ip = 55; continue _fun115330 }
 52:
                    entity = mike;
 55:
                    return entity;
                }
            };
            mike[0] = entity;
            entity = ['desc'];
            mike = zulu.bind(tango)(mike, entity);
            entity = mike.value;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    var _closure1_slot13 = tango;
    mike = function(argFoo, argBar) { // Original name: formatVoiceActivityTitle
        _fun115331: for(var _fun115331_ip = 0; ; ) switch(_fun115331_ip) {
 0:
            mike = argFoo;
            report = argBar;
            zulu = mike.length;
            entity = 0;
            if(!(entity !== zulu)) { _fun115331_ip = 372; continue _fun115331 }
 20:
            options = 1;
            if(!(options !== zulu)) { _fun115331_ip = 326; continue _fun115331 }
 30:
            offset = 2;
            if(!(offset !== zulu)) { _fun115331_ip = 190; continue _fun115331 }
 40:
            tango = _closure1_slot0;
            backup = _closure1_slot2;
            zulu = 22;
            oscar = backup[zulu];
            romeo = undefined;
            oscar = tango.bind(romeo)(oscar);
            golf = oscar.intl;
            oscar = golf.formatToPlainString;
            zulu = backup[zulu];
            zulu = tango.bind(romeo)(zulu);
            zulu = zulu.t;
            tango = zulu.pjxkCA;
            zulu = {};
            yankee = _closure1_slot1;
            verify = 21;
            foxtrot = backup[verify];
            output = yankee.bind(romeo)(foxtrot);
            sizing = output.getName;
            kilo = mike[entity];
            foxtrot = null;
            kilo = sizing.bind(output)(report, foxtrot, kilo);
            zulu['user1'] = kilo;
            verify = backup[verify];
            romeo = yankee.bind(romeo)(verify);
            yankee = romeo.getName;
            verify = mike[options];
            verify = yankee.bind(romeo)(report, foxtrot, verify);
            zulu['user2'] = verify;
            verify = mike.length;
            verify = verify - offset;
            zulu['extras'] = verify;
            zulu = oscar.bind(golf)(tango, zulu);
            return zulu;
 190:
            tango = _closure1_slot0;
            foxtrot = _closure1_slot2;
            zulu = 22;
            oscar = foxtrot[zulu];
            romeo = undefined;
            oscar = tango.bind(romeo)(oscar);
            golf = oscar.intl;
            oscar = golf.formatToPlainString;
            zulu = foxtrot[zulu];
            zulu = tango.bind(romeo)(zulu);
            zulu = zulu.t;
            tango = zulu.4SM/RU;
            zulu = {};
            offset = _closure1_slot1;
            verify = 21;
            yankee = foxtrot[verify];
            sizing = offset.bind(romeo)(yankee);
            kilo = sizing.getName;
            backup = mike[entity];
            yankee = null;
            backup = kilo.bind(sizing)(report, yankee, backup);
            zulu['user1'] = backup;
            verify = foxtrot[verify];
            offset = offset.bind(romeo)(verify);
            verify = offset.getName;
            options = mike[options];
            options = verify.bind(offset)(report, yankee, options);
            zulu['user2'] = options;
            zulu = oscar.bind(golf)(tango, zulu);
            return zulu;
 326:
            oscar = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 21;
            tango = tango[zulu];
            zulu = undefined;
            tango = oscar.bind(zulu)(tango);
            zulu = tango.getName;
            mike = mike[entity];
            entity = null;
            entity = zulu.bind(tango)(report, entity, mike);
            return entity;
 372:
            entity = '';
            return entity;
        }
    };
    var _closure1_slot14 = mike;
    entity = global;
    yankee = entity.Object;
    verify = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    verify = options[entity];
    oscar = argCorge;
    entity = undefined;
    verify = oscar.bind(entity)(verify);
    var _closure1_slot3 = verify;
    foxtrot = 1;
    oscar = options[foxtrot];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.View;
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.HappeningNowCardTrackingType;
    var _closure1_slot8 = oscar;
    oscar = 6;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.AnalyticEvents;
    var _closure1_slot9 = oscar;
    oscar = 7;
    offset = options[oscar];
    offset = golf.bind(entity)(offset);
    offset = offset.jsx;
    var _closure1_slot10 = offset;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.jsxs;
    var _closure1_slot11 = oscar;
    oscar = 8;
    oscar = options[oscar];
    yankee = golf.bind(entity)(oscar);
    offset = yankee.createStyles;
    oscar = {};
    romeo = {};
    romeo['flexShrink'] = foxtrot;
    oscar['content'] = romeo;
    romeo = {};
    foxtrot = 12;
    romeo['marginRight'] = foxtrot;
    oscar['avatars'] = romeo;
    oscar = offset.bind(yankee)(oscar);
    var _closure1_slot12 = oscar;
    oscar = verify.memo;
    report = function(argFoo) {
        _fun115332: for(var _fun115332_ip = 0; ; ) switch(_fun115332_ip) {
 0:
            mike = argFoo;
            echo = mike.guildId;
            var _closure2_slot0 = echo;
            verify = mike.index;
            var _closure2_slot1 = verify;
            kilo = mike.voiceState;
            var _closure2_slot2 = kilo;
            options = mike.fullwidth;
            oscar = mike.panelVariant;
            report = undefined;
            if(!(oscar === report)) { _fun115332_ip = 53; continue _fun115332 }
 51:
            oscar = false;
 53:
            var _closure2_slot3 = report;
            zulu = _closure1_slot12;
            romeo = zulu.bind(report)();
            zulu = _closure1_slot13;
            result = zulu.bind(report)(kilo);
            _closure2_slot3 = result;
            zulu = _closure1_slot14;
            output = zulu.bind(report)(result, echo);
            golf = _closure1_slot3;
            tango = golf.useCallback;
            zulu = new Array(4);
            zulu[0] = verify;
            zulu[1] = echo;
            verify = kilo.channelId;
            zulu[2] = verify;
            zulu[3] = result;
            entity = function() {
                oscar = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 9;
                report = zulu[entity];
                entity = undefined;
                options = oscar.bind(entity)(report);
                golf = options.track;
                report = _closure1_slot9;
                oscar = report.ACTIVITY_CARD_CLICKED;
                report = {};
                offset = _closure2_slot1;
                report['order'] = offset;
                offset = _closure2_slot0;
                report['guild_id'] = offset;
                offset = _closure1_slot8;
                offset = offset.VOICE_CARD;
                report['type'] = offset;
                offset = _closure2_slot2;
                offset = offset.channelId;
                report['destination_channel_id'] = offset;
                yankee = _closure2_slot3;
                offset = yankee.map;
                verify = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                verify = offset.bind(yankee)(verify);
                report['highlighted_user_ids'] = verify;
                report = golf.bind(options)(oscar, report);
                report = _closure1_slot0;
                tango = 11;
                tango = zulu[tango];
                report = report.bind(entity)(tango);
                tango = 10;
                tango = zulu[tango];
                zulu = zulu.paths;
                tango = report.bind(entity)(tango, zulu);
                zulu = tango.then;
                mike = function(argFoo) {
                    _fun115335: for(var _fun115335_ip = 0; ; ) switch(_fun115335_ip) {
 0:
                        entity = argFoo;
                        tango = entity.default;
                        mike = _closure2_slot2;
                        zulu = mike.channelId;
                        mike = null;
                        if(!(mike != zulu)) { _fun115335_ip = 45; continue _fun115335 }
 26:
                        entity = _closure2_slot2;
                        zulu = entity.channelId;
                        mike = undefined;
                        entity = true;
                        entity = tango.bind(mike)(zulu, entity);
 45:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            golf = tango.bind(golf)(entity, zulu);
            zulu = result.length;
            entity = 0;
            if(!(entity !== zulu)) { _fun115332_ip = 440; continue _fun115332 }
 152:
            tango = _closure1_slot11;
            zulu = _closure1_slot1;
            entity = _closure1_slot2;
            yankee = 13;
            entity = entity[yankee];
            zulu = zulu.bind(report)(entity);
            entity = {};
            entity['onPress'] = golf;
            golf = 'large';
            if(!options) { _fun115332_ip = 193; continue _fun115332 }
 189:
            golf = 'full';
 193:
            entity['width'] = golf;
            verify = _closure1_slot1;
            sizing = _closure1_slot2;
            golf = 14;
            golf = sizing[golf];
            golf = verify.bind(report)(golf);
            entity['badgeIcon'] = golf;
            foxtrot = _closure1_slot0;
            golf = 15;
            golf = sizing[golf];
            golf = foxtrot.bind(report)(golf);
            golf = golf.VoiceNormalIcon;
            entity['IconComponent'] = golf;
            entity['panelVariant'] = oscar;
            backup = _closure1_slot10;
            offset = _closure1_slot4;
            golf = {};
            options = romeo.avatars;
            golf['style'] = options;
            options = 16;
            options = sizing[options];
            verify = verify.bind(report)(options);
            options = {};
            options['guildId'] = echo;
            options['users'] = result;
            options = backup.bind(report)(verify, options);
            golf['children'] = options;
            options = backup.bind(report)(offset, golf);
            golf = new Array(2);
            golf[0] = options;
            verify = _closure1_slot11;
            options = {};
            romeo = romeo.content;
            options['style'] = romeo;
            yankee = sizing[yankee];
            yankee = foxtrot.bind(report)(yankee);
            romeo = yankee.HappeningNowCardHeader;
            yankee = {};
            result = 2;
            yankee['lineClamp'] = result;
            yankee['children'] = output;
            romeo = backup.bind(report)(romeo, yankee);
            yankee = new Array(2);
            yankee[0] = romeo;
            romeo = 17;
            romeo = sizing[romeo];
            romeo = foxtrot.bind(report)(romeo);
            foxtrot = romeo.HappeningNowVoiceCardSubtitle;
            romeo = {};
            romeo['voiceState'] = kilo;
            romeo = backup.bind(report)(foxtrot, romeo);
            yankee[1] = romeo;
            options['children'] = yankee;
            options = verify.bind(report)(offset, options);
            golf[1] = options;
            entity['children'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun115332_ip = 483; continue _fun115332;
 440:
            tango = _closure1_slot10;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 12;
            mike = golf[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.HappeningNowCardPlaceholder;
            mike = {};
            mike['panelVariant'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 483:
            return entity;
        }
    };
    report = oscar.bind(verify)(report);
    oscar = 23;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['useVoiceChannelUsers'] = tango;
    zulu['formatVoiceActivityTitle'] = mike;
    return entity;
})();