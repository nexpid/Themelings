// app/modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ActivityActionOverlay
        _fun122146: for(var _fun122146_ip = 0; ; ) switch(_fun122146_ip) {
 0:
            entity = argFoo;
            golf = entity.action;
            verify = entity.applicationId;
            foxtrot = entity.context;
            mike = entity.activityItem;
            options = entity.launchingComponentId;
            report = _closure1_slot1;
            entity = _closure1_slot2;
            zulu = 9;
            zulu = entity[zulu];
            tango = undefined;
            report = report.bind(tango)(zulu);
            zulu = {};
            zulu['applicationId'] = verify;
            zulu['context'] = foxtrot;
            zulu['launchingComponentId'] = options;
            zulu = report.bind(tango)(zulu);
            verify = zulu.submitting;
            zulu = _closure1_slot10;
            backup = zulu.bind(tango)();
            mike = mike.application;
            yankee = mike.id;
            offset = mike.name;
            mike = _closure1_slot0;
            romeo = 10;
            entity = entity[romeo];
            entity = mike.bind(tango)(entity);
            entity = entity.ActivityAction;
            entity = entity.JOIN;
            if(!(entity !== golf)) { _fun122146_ip = 173; continue _fun122146 }
 136:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[romeo];
            entity = mike.bind(tango)(entity);
            entity = entity.ActivityAction;
            entity = entity.LEAVE;
            if(!(entity !== golf)) { _fun122146_ip = 173; continue _fun122146 }
 169:
            entity = null;
            return entity;
 173:
            zulu = _closure1_slot9;
            mike = _closure1_slot8;
            entity = {};
            options = _closure1_slot0;
            report = _closure1_slot2;
            report = report[romeo];
            report = options.bind(tango)(report);
            report = report.ActivityAction;
            report = report.LEAVE;
            golf = golf === report;
            if(!golf) { _fun122146_ip = 261; continue _fun122146 }
 219:
            romeo = _closure1_slot7;
            options = _closure1_slot1;
            kilo = _closure1_slot2;
            report = 11;
            report = kilo[report];
            options = options.bind(tango)(report);
            report = {};
            backup = backup.ongoingActivityJoinedContainer;
            report['style'] = backup;
            golf = romeo.bind(tango)(options, report);
 261:
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot7;
            golf = _closure1_slot1;
            romeo = _closure1_slot2;
            oscar = 12;
            oscar = romeo[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            kilo = foxtrot.type;
            backup = 'channel';
            romeo = undefined;
            if(!(backup === kilo)) { _fun122146_ip = 320; continue _fun122146 }
 310:
            foxtrot = foxtrot.channel;
            romeo = foxtrot.id;
 320:
            oscar['channelId'] = romeo;
            oscar['applicationId'] = yankee;
            oscar['applicationName'] = offset;
            oscar['submitting'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: ParticipantsText
        _fun122147: for(var _fun122147_ip = 0; ; ) switch(_fun122147_ip) {
 0:
            entity = argFoo;
            romeo = entity.action;
            foxtrot = entity.activityItem;
            oscar = entity.channelId;
            report = entity.guildId;
            entity = _closure1_slot10;
            tango = undefined;
            verify = entity.bind(tango)();
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 24;
            entity = zulu[entity];
            golf = mike.bind(tango)(entity);
            entity = foxtrot.application;
            entity = entity.id;
            result = golf.bind(tango)(entity, oscar);
            entity = 25;
            entity = zulu[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.getName;
            offset = null;
            golf = offset == result;
            entity = undefined;
            if(golf) { _fun122147_ip = 108; continue _fun122147 }
 102:
            golf = 0;
            entity = result[golf];
 108:
            output = mike.bind(zulu)(report, oscar, entity);
            zulu = _closure1_slot9;
            backup = _closure1_slot1;
            kilo = _closure1_slot2;
            entity = 11;
            entity = kilo[entity];
            mike = backup.bind(tango)(entity);
            entity = {};
            oscar = verify.participantsContainer;
            report = new Array(2);
            report[0] = oscar;
            oscar = verify.overlayBubble;
            report[1] = oscar;
            entity['style'] = report;
            golf = _closure1_slot7;
            options = 22;
            report = kilo[options];
            oscar = backup.bind(tango)(report);
            report = {};
            sizing = 26;
            sizing = kilo[sizing];
            sizing = backup.bind(tango)(sizing);
            report['source'] = sizing;
            options = kilo[options];
            options = backup.bind(tango)(options);
            options = options.Sizes;
            options = options.EXTRA_SMALL;
            report['size'] = options;
            options = 'white';
            report['color'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot7;
            backup = _closure1_slot0;
            oscar = 27;
            oscar = kilo[oscar];
            oscar = backup.bind(tango)(oscar);
            golf = oscar.Text;
            oscar = {'lineClamp': 1, 'style': null, 'variant': 'text-xxs/medium', 'color': 'always-white'};
            echo = 1;
            verify = verify.participantsText;
            oscar['style'] = verify;
            verify = 10;
            verify = kilo[verify];
            verify = backup.bind(tango)(verify);
            verify = verify.ActivityAction;
            verify = verify.START;
            if(!(romeo !== verify)) { _fun122147_ip = 421; continue _fun122147 }
 332:
            romeo = result.length;
            verify = output;
            if(!(!(romeo <= echo))) { _fun122147_ip = 419; continue _fun122147 }
 344:
            backup = _closure1_slot0;
            update = _closure1_slot2;
            romeo = 29;
            kilo = update[romeo];
            kilo = backup.bind(tango)(kilo);
            sizing = kilo.intl;
            kilo = sizing.formatToPlainString;
            romeo = update[romeo];
            romeo = backup.bind(tango)(romeo);
            romeo = romeo.t;
            backup = romeo.cpe6CA;
            romeo = {};
            result = result.length;
            result = result - echo;
            romeo['count'] = result;
            romeo['username'] = output;
            verify = kilo.bind(sizing)(backup, romeo);
 419:
            _fun122147_ip = 475; continue _fun122147;
 421:
            romeo = _closure1_slot0;
            backup = _closure1_slot2;
            yankee = 28;
            yankee = backup[yankee];
            romeo = romeo.bind(tango)(yankee);
            yankee = romeo.getItemSubtitleForMaxPlayersShort;
            foxtrot = foxtrot.application;
            foxtrot = foxtrot.maxParticipants;
            backup = offset != foxtrot;
            offset = 0;
            if(!backup) { _fun122147_ip = 470; continue _fun122147 }
 467:
            offset = foxtrot;
 470:
            verify = yankee.bind(romeo)(offset);
 475:
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot6 = tango;
    tango = 4;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot7 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot8 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot9 = tango;
    romeo = 5;
    tango = oscar[romeo];
    tango = report.bind(entity)(tango);
    tango = tango.AvatarSizes;
    foxtrot = tango.SIZE_16;
    tango = 6;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'borderRadius': null, 'overflow': 'hidden', 'height': 120, 'position': 'relative', 'backgroundColor': 'black', 'justifyContent': 'center'};
    offset = 7;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.md;
    verify['borderRadius'] = backup;
    tango['container'] = verify;
    verify = {'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': 'black'};
    tango['imageInnerContainer'] = verify;
    verify = {'justifyContent': 'center', 'alignItems': 'center'};
    tango['imageOuterContainer'] = verify;
    verify = {'position': 'absolute', 'width': '100%', 'height': '100%', 'backgroundColor': 'rgba(255,255,255,0.5)', 'zIndex': 1};
    tango['ongoingActivityJoinedContainer'] = verify;
    verify = {};
    backup = 8;
    backup = oscar[backup];
    output = report.bind(entity)(backup);
    sizing = output.hexWithOpacity;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.unsafe_rawColors;
    kilo = backup.BLACK_500;
    backup = 0.5;
    backup = sizing.bind(output)(kilo, backup);
    verify['backgroundColor'] = backup;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.round;
    verify['borderRadius'] = backup;
    tango['overlayBubble'] = verify;
    backup = 20;
    verify = {'paddingHorizontal': 8, 'position': 'absolute', 'left': 8, 'bottom': 8, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'height': 20};
    tango['participantsContainer'] = verify;
    verify = {'marginLeft': 4, 'lineHeight': 20};
    tango['participantsText'] = verify;
    verify = {};
    verify['height'] = backup;
    tango['participants'] = verify;
    verify = {};
    romeo = oscar[romeo];
    romeo = report.bind(entity)(romeo);
    romeo = romeo.AVATAR_SIZE_MAP;
    romeo = romeo[foxtrot];
    verify['height'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_SECONDARY_ALT;
    verify['backgroundColor'] = romeo;
    tango['overflow'] = verify;
    verify = {'paddingVertical': 2, 'paddingHorizontal': 4, 'position': 'absolute', 'top': 8, 'right': 8};
    tango['premiumLockedActivityIndicator'] = verify;
    verify = {'position': 'absolute', 'top': 4, 'right': 4, 'width': 22, 'height': 22, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.md;
    verify['borderRadius'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.ACTIVITY_CARD_ICON_OVERLAY;
    verify['backgroundColor'] = romeo;
    tango['developerIconContainer'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.WHITE;
    verify['color'] = offset;
    tango['developerIconColor'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot10 = tango;
    tango = 30;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ActivityShelfItem
        _fun122148: for(var _fun122148_ip = 0; ; ) switch(_fun122148_ip) {
 0:
            mike = argFoo;
            zulu = mike.itemDimensions;
            offset = mike.activityItem;
            var _closure2_slot0 = offset;
            context = mike.context;
            sizing = mike.guildId;
            kilo = mike.locationObject;
            romeo = mike.onActivityItemSelected;
            mike = mike.disableBadges;
            tango = undefined;
            if(!(mike === tango)) { _fun122148_ip = 57; continue _fun122148 }
 55:
            mike = false;
 57:
            var _closure2_slot1 = tango;
            report = _closure1_slot10;
            control = report.bind(tango)();
            oscar = context.type;
            yankee = null;
            report = 'channel';
            backup = null;
            if(!(report === oscar)) { _fun122148_ip = 94; continue _fun122148 }
 89:
            backup = context.channel;
 94:
            papa = zulu.width;
            config = zulu.height;
            oscar = _closure1_slot1;
            foxtrot = _closure1_slot2;
            zulu = 13;
            zulu = foxtrot[zulu];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.bind(tango)();
            options = papa * zulu;
            report = _closure1_slot3;
            zulu = report.useId;
            record = zulu.bind(report)();
            verify = 10;
            zulu = foxtrot[verify];
            report = oscar.bind(tango)(zulu);
            zulu = {};
            zulu['activityItem'] = offset;
            zulu['context'] = context;
            zulu['guildId'] = sizing;
            zulu['locationObject'] = kilo;
            zulu['onActivityItemSelected'] = romeo;
            romeo = 14;
            romeo = foxtrot[romeo];
            romeo = oscar.bind(tango)(romeo);
            zulu['embeddedActivitiesManager'] = romeo;
            zulu['backgroundResolution'] = options;
            romeo = ['embedded_cover'];
            zulu['assetNames'] = romeo;
            zulu['launchingComponentId'] = record;
            kilo = _closure1_slot0;
            romeo = 15;
            romeo = foxtrot[romeo];
            romeo = kilo.bind(tango)(romeo);
            romeo = romeo.CommandOrigin;
            romeo = romeo.VOICE_UI;
            zulu['commandOrigin'] = romeo;
            zulu = report.bind(tango)(zulu);
            status = zulu.imageBackground;
            romeo = zulu.activityAction;
            report = zulu.onActivityItemSelected;
            source = zulu.labelType;
            zulu = 16;
            zulu = foxtrot[zulu];
            oscar = oscar.bind(tango)(zulu);
            zulu = {};
            foxtrot = offset.application;
            foxtrot = foxtrot.id;
            zulu['applicationId'] = foxtrot;
            zulu['size'] = options;
            options = ['embedded_background'];
            zulu['names'] = options;
            target = oscar.bind(tango)(zulu);
            result = !mike;
            if(!result) { _fun122148_ip = 419; continue _fun122148 }
 344:
            oscar = _closure1_slot0;
            mike = _closure1_slot2;
            zulu = mike[verify];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.ActivityAction;
            options = zulu.LEAVE;
            zulu = new Array(2);
            zulu[0] = options;
            mike = mike[verify];
            mike = oscar.bind(tango)(mike);
            mike = mike.ActivityAction;
            mike = mike.JOIN;
            zulu[1] = mike;
            mike = zulu.includes;
            mike = mike.bind(zulu)(romeo);
            result = !mike;
 419:
            _closure2_slot1 = result;
            lima = _closure1_slot0;
            sierra = _closure1_slot2;
            mike = 17;
            mike = sierra[mike];
            options = lima.bind(tango)(mike);
            oscar = options.useStateFromStores;
            mike = _closure1_slot4;
            zulu = new Array(2);
            zulu[0] = mike;
            mike = _closure1_slot5;
            zulu[1] = mike;
            mike = offset.application;
            foxtrot = mike.id;
            mike = new Array(2);
            mike[0] = foxtrot;
            mike[1] = result;
            entity = function() {
                _fun122149: for(var _fun122149_ip = 0; ; ) switch(_fun122149_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun122149_ip = 77; continue _fun122149 }
 10:
                    oscar = _closure1_slot4;
                    report = oscar.inDevModeForApplication;
                    mike = _closure2_slot0;
                    mike = mike.application;
                    mike = mike.id;
                    mike = report.bind(oscar)(mike);
                    if(mike) { _fun122149_ip = 74; continue _fun122149 }
 45:
                    report = _closure1_slot5;
                    tango = report.inTestModeForApplication;
                    zulu = _closure2_slot0;
                    zulu = zulu.application;
                    zulu = zulu.id;
                    mike = tango.bind(report)(zulu);
 74:
                    entity = mike;
 77:
                    return entity;
                }
            };
            output = oscar.bind(options)(zulu, entity, mike);
            zulu = _closure1_slot9;
            entity = 18;
            entity = sierra[entity];
            entity = lima.bind(tango)(entity);
            mike = entity.PressableOpacity;
            entity = {};
            oscar = 0.7;
            entity['activeOpacity'] = oscar;
            entity['onPress'] = report;
            report = sierra[verify];
            report = lima.bind(tango)(report);
            report = report.ActivityAction;
            report = report.LEAVE;
            report = romeo === report;
            entity['disabled'] = report;
            report = _closure1_slot6;
            entity['androidRippleConfig'] = report;
            oscar = control.container;
            report = new Array(2);
            report[0] = oscar;
            oscar = {};
            oscar['width'] = papa;
            oscar['height'] = config;
            report[1] = oscar;
            entity['style'] = report;
            options = _closure1_slot9;
            report = 19;
            report = sierra[report];
            report = lima.bind(tango)(report);
            oscar = report.ThemeContextProvider;
            report = {};
            foxtrot = 'dark';
            report['theme'] = foxtrot;
            echo = _closure1_slot9;
            vacuum = _closure1_slot1;
            sizing = 11;
            foxtrot = sierra[sizing];
            kilo = vacuum.bind(tango)(foxtrot);
            foxtrot = {};
            update = control.imageOuterContainer;
            foxtrot['style'] = update;
            sequence = _closure1_slot7;
            update = 20;
            update = sierra[update];
            vacuum = vacuum.bind(tango)(update);
            update = {};
            whiskey = offset.application;
            whiskey = whiskey.name;
            update['accessibilityLabel'] = whiskey;
            sierra = sierra[verify];
            sierra = lima.bind(tango)(sierra);
            sierra = sierra.ActivityAction;
            sierra = sierra.START;
            if(!(romeo === sierra)) { _fun122148_ip = 741; continue _fun122148 }
 738:
            target = status;
 741:
            update['imageBackground'] = target;
            config = papa / config;
            update['aspectRatio'] = config;
            vacuum = sequence.bind(tango)(vacuum, update);
            update = new Array(2);
            update[0] = vacuum;
            config = _closure1_slot7;
            sequence = _closure1_slot11;
            vacuum = {};
            vacuum['action'] = romeo;
            papa = offset.application;
            papa = papa.id;
            vacuum['applicationId'] = papa;
            vacuum['context'] = context;
            vacuum['activityItem'] = offset;
            vacuum['launchingComponentId'] = record;
            vacuum = config.bind(tango)(sequence, vacuum);
            update[1] = vacuum;
            foxtrot['children'] = update;
            kilo = echo.bind(tango)(kilo, foxtrot);
            foxtrot = new Array(3);
            foxtrot[0] = kilo;
            kilo = null;
            if(!result) { _fun122148_ip = 881; continue _fun122148 }
 844:
            update = _closure1_slot7;
            echo = _closure1_slot1;
            vacuum = _closure1_slot2;
            result = 21;
            result = vacuum[result];
            echo = echo.bind(tango)(result);
            result = {};
            result['labelType'] = source;
            kilo = update.bind(tango)(echo, result);
 881:
            foxtrot[1] = kilo;
            kilo = null;
            if(!output) { _fun122148_ip = 1016; continue _fun122148 }
 893:
            result = _closure1_slot7;
            sequence = _closure1_slot1;
            config = _closure1_slot2;
            sizing = config[sizing];
            output = sequence.bind(tango)(sizing);
            sizing = {};
            echo = control.developerIconContainer;
            sizing['style'] = echo;
            source = _closure1_slot7;
            vacuum = 22;
            echo = config[vacuum];
            update = sequence.bind(tango)(echo);
            echo = {};
            vacuum = config[vacuum];
            vacuum = sequence.bind(tango)(vacuum);
            vacuum = vacuum.Sizes;
            vacuum = vacuum.REFRESH_SMALL_16;
            echo['size'] = vacuum;
            vacuum = 23;
            vacuum = config[vacuum];
            vacuum = sequence.bind(tango)(vacuum);
            echo['source'] = vacuum;
            control = control.developerIconColor;
            control = control.color;
            echo['color'] = control;
            echo = source.bind(tango)(update, echo);
            sizing['children'] = echo;
            kilo = result.bind(tango)(output, sizing);
 1016:
            foxtrot[2] = kilo;
            report['children'] = foxtrot;
            oscar = options.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[verify];
            oscar = options.bind(tango)(oscar);
            oscar = oscar.ActivityAction;
            oscar = oscar.START;
            oscar = romeo === oscar;
            if(!oscar) { _fun122148_ip = 1152; continue _fun122148 }
 1074:
            verify = _closure1_slot7;
            options = _closure1_slot12;
            golf = {};
            golf['action'] = romeo;
            foxtrot = yankee == backup;
            romeo = undefined;
            if(foxtrot) { _fun122148_ip = 1102; continue _fun122148 }
 1097:
            romeo = backup.id;
 1102:
            golf['channelId'] = romeo;
            foxtrot = yankee == backup;
            romeo = undefined;
            if(foxtrot) { _fun122148_ip = 1125; continue _fun122148 }
 1115:
            foxtrot = backup.getGuildId;
            romeo = foxtrot.bind(backup)();
 1125:
            foxtrot = yankee != romeo;
            yankee = undefined;
            if(!foxtrot) { _fun122148_ip = 1137; continue _fun122148 }
 1134:
            yankee = romeo;
 1137:
            golf['guildId'] = yankee;
            golf['activityItem'] = offset;
            oscar = verify.bind(tango)(options, golf);
 1152:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();