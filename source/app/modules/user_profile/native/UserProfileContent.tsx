// app/modules/user_profile/native/UserProfileContent.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: CustomStatusBubble
        _fun102518: for(var _fun102518_ip = 0; ; ) switch(_fun102518_ip) {
 0:
            entity = argFoo;
            offset = entity.customStatusActivity;
            backup = entity.user;
            var _closure2_slot0 = backup;
            kilo = entity.guildId;
            var _closure2_slot1 = kilo;
            sizing = entity.channelId;
            var _closure2_slot2 = sizing;
            verify = entity.hasCustomProfileTheme;
            options = entity.isPreviewingChanges;
            mike = _closure1_slot1;
            yankee = _closure1_slot2;
            tango = 10;
            report = yankee[tango];
            tango = undefined;
            report = mike.bind(tango)(report);
            report = report.bind(tango)();
            golf = _closure1_slot0;
            oscar = 11;
            oscar = yankee[oscar];
            output = golf.bind(tango)(oscar);
            foxtrot = output.useStateFromStores;
            oscar = _closure1_slot8;
            romeo = new Array(1);
            romeo[0] = oscar;
            golf = new Array(1);
            golf[0] = backup;
            oscar = function() {
                _fun102519: for(var _fun102519_ip = 0; ; ) switch(_fun102519_ip) {
 0:
                    mike = _closure1_slot8;
                    entity = mike.getCurrentUser;
                    entity = entity.bind(mike)();
                    mike = null;
                    zulu = mike == entity;
                    mike = undefined;
                    if(zulu) { _fun102519_ip = 32; continue _fun102519 }
 27:
                    mike = entity.id;
 32:
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = mike === entity;
                    return entity;
                }
            };
            oscar = foxtrot.bind(output)(romeo, oscar, golf);
            foxtrot = _closure1_slot3;
            romeo = foxtrot.useCallback;
            golf = new Array(3);
            golf[0] = sizing;
            golf[1] = kilo;
            golf[2] = backup;
            zulu = function() {
                report = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 12;
                tango = mike[entity];
                entity = undefined;
                golf = report.bind(entity)(tango);
                oscar = golf.openLazy;
                tango = _closure1_slot0;
                zulu = 14;
                zulu = mike[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = 13;
                zulu = mike[zulu];
                mike = mike.paths;
                yankee = tango.bind(entity)(zulu, mike);
                tango = {};
                zulu = _closure2_slot0;
                tango['user'] = zulu;
                zulu = _closure2_slot1;
                tango['guildId'] = zulu;
                mike = _closure2_slot2;
                tango['channelId'] = mike;
                offset = 'UserProfileCustomStatusActionSheet';
                options = 'stack';
                romeo = golf;
                verify = tango;
                mike = romeo[oscar](yankee, offset, verify, options, golf);
                return entity;
            };
            golf = romeo.bind(foxtrot)(zulu, golf);
            zulu = _closure1_slot13;
            entity = 15;
            entity = yankee[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['customStatusActivity'] = offset;
            entity['hasCustomProfileTheme'] = verify;
            if(!oscar) { _fun102518_ip = 206; continue _fun102518 }
 203:
            oscar = !options;
 206:
            entity['editEnabled'] = oscar;
            oscar = undefined;
            if(options) { _fun102518_ip = 219; continue _fun102518 }
 216:
            oscar = golf;
 219:
            entity['onPressTruncatedStatus'] = oscar;
            oscar = report.customStatusBubble;
            entity['style'] = oscar;
            report = report.emojiOnlyCustomStatusBubble;
            entity['emojiOnlyStyle'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: RemoveFriendIconButton
        entity = argFoo;
        entity = entity.user;
        var _closure2_slot0 = entity;
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        entity = 16;
        entity = offset[entity];
        tango = undefined;
        mike = verify.bind(tango)(entity);
        entity = mike.useUserProfileAnalyticsContext;
        entity = entity.bind(mike)();
        entity = entity.trackUserProfileAction;
        var _closure2_slot1 = entity;
        mike = _closure1_slot1;
        entity = 17;
        entity = offset[entity];
        entity = mike.bind(tango)(entity);
        entity = entity.bind(tango)();
        entity = entity.newestAnalyticsLocation;
        var _closure2_slot2 = entity;
        entity = function() { // Original name: handleConfirm
            zulu = _closure2_slot1;
            mike = {};
            entity = 'REMOVE_FRIEND';
            mike['action'] = entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 18;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.removeFriend;
            mike = _closure2_slot0;
            zulu = mike.id;
            mike = {};
            oscar = _closure2_slot2;
            mike['location'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        var _closure2_slot3 = entity;
        zulu = _closure1_slot13;
        entity = 19;
        entity = offset[entity];
        entity = verify.bind(tango)(entity);
        mike = entity.IconButton;
        entity = {'size': 'sm', 'variant': 'secondary-overlay'};
        options = _closure1_slot13;
        oscar = 20;
        oscar = offset[oscar];
        oscar = verify.bind(tango)(oscar);
        golf = oscar.UserCheckIcon;
        oscar = {'size': 'sm', 'color': 'white'};
        oscar = options.bind(tango)(golf, oscar);
        entity['icon'] = oscar;
        oscar = 21;
        golf = offset[oscar];
        golf = verify.bind(tango)(golf);
        options = golf.intl;
        golf = options.string;
        oscar = offset[oscar];
        oscar = verify.bind(tango)(oscar);
        oscar = oscar.t;
        oscar = oscar.cvSt1N;
        oscar = golf.bind(options)(oscar);
        entity['accessibilityLabel'] = oscar;
        report = function() { // Original name: onPress
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 22;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.confirmRemoveFriend;
            mike = {};
            oscar = _closure2_slot0;
            oscar = oscar.username;
            mike['username'] = oscar;
            report = _closure2_slot3;
            mike['onConfirm'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['onPress'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: RemoveGameFriendIconButton
        mike = argFoo;
        report = mike.user;
        var _closure2_slot0 = report;
        golf = mike.guildId;
        var _closure2_slot1 = golf;
        options = mike.channelId;
        var _closure2_slot2 = options;
        tango = _closure1_slot3;
        zulu = tango.useCallback;
        mike = new Array(3);
        mike[0] = options;
        mike[1] = golf;
        mike[2] = report;
        entity = function() {
            report = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 12;
            tango = mike[entity];
            entity = undefined;
            golf = report.bind(entity)(tango);
            oscar = golf.openLazy;
            tango = _closure1_slot0;
            zulu = 14;
            zulu = mike[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = 23;
            zulu = mike[zulu];
            mike = mike.paths;
            yankee = tango.bind(entity)(zulu, mike);
            tango = {};
            zulu = _closure2_slot0;
            tango['user'] = zulu;
            zulu = _closure2_slot1;
            tango['guildId'] = zulu;
            mike = _closure2_slot2;
            tango['channelId'] = mike;
            offset = 'UserProfileGameFriendActionSheet';
            options = 'stack';
            romeo = golf;
            verify = tango;
            mike = romeo[oscar](yankee, offset, verify, options, golf);
            return entity;
        };
        report = zulu.bind(tango)(entity, mike);
        tango = _closure1_slot13;
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        entity = 19;
        entity = offset[entity];
        zulu = undefined;
        entity = verify.bind(zulu)(entity);
        mike = entity.IconButton;
        entity = {'size': 'sm', 'variant': 'secondary-overlay'};
        options = _closure1_slot13;
        oscar = 24;
        oscar = offset[oscar];
        oscar = verify.bind(zulu)(oscar);
        golf = oscar.UserPlatformIcon;
        oscar = {'size': 'sm', 'color': 'white'};
        oscar = options.bind(zulu)(golf, oscar);
        entity['icon'] = oscar;
        oscar = 21;
        golf = offset[oscar];
        golf = verify.bind(zulu)(golf);
        options = golf.intl;
        golf = options.string;
        oscar = offset[oscar];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.cvSt1N;
        oscar = golf.bind(options)(oscar);
        entity['accessibilityLabel'] = oscar;
        entity['onPress'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: PrimaryInfo
        _fun102526: for(var _fun102526_ip = 0; ; ) switch(_fun102526_ip) {
 0:
            entity = argFoo;
            kilo = entity.user;
            sizing = entity.channelId;
            foxtrot = entity.displayProfile;
            mike = entity.displayNameOverride;
            yankee = entity.pronounsOverride;
            offset = entity.style;
            verify = entity.badgeContainerBackground;
            report = entity.isPreviewingChanges;
            tango = undefined;
            var _closure2_slot1 = tango;
            options = _closure1_slot1;
            romeo = _closure1_slot2;
            entity = 25;
            entity = romeo[entity];
            zulu = options.bind(tango)(entity);
            entity = zulu.useUserTag;
            entity = entity.bind(zulu)(kilo);
            var _closure2_slot0 = entity;
            zulu = 26;
            zulu = romeo[zulu];
            backup = options.bind(tango)(zulu);
            options = backup.useName;
            romeo = null;
            output = romeo == foxtrot;
            zulu = undefined;
            if(output) { _fun102526_ip = 128; continue _fun102526 }
 123:
            zulu = foxtrot.guildId;
 128:
            sizing = options.bind(backup)(zulu, sizing, kilo);
            backup = sizing;
            if(!(romeo != mike)) { _fun102526_ip = 169; continue _fun102526 }
 142:
            zulu = mike.trim;
            zulu = zulu.bind(mike)();
            options = zulu.length;
            zulu = 0;
            backup = sizing;
            if(!(options > zulu)) { _fun102526_ip = 169; continue _fun102526 }
 166:
            backup = mike;
 169:
            zulu = _closure1_slot0;
            sizing = _closure1_slot2;
            mike = 16;
            mike = sizing[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useUserProfileAnalyticsContext;
            mike = mike.bind(zulu)();
            output = mike.trackUserProfileAction;
            _closure2_slot1 = output;
            options = _closure1_slot3;
            zulu = options.useCallback;
            mike = new Array(2);
            mike[0] = output;
            mike[1] = entity;
            entity = function() {
                tango = _closure2_slot1;
                zulu = {};
                entity = 'COPY_USERNAME';
                zulu['action'] = entity;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                report = 27;
                report = tango[report];
                oscar = zulu.bind(entity)(report);
                report = oscar.copy;
                mike = _closure2_slot0;
                mike = report.bind(oscar)(mike);
                mike = 28;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.presentUsernameCopied;
                mike = mike.bind(zulu)();
                return entity;
            };
            options = zulu.bind(options)(entity, mike);
            zulu = _closure1_slot13;
            mike = _closure1_slot1;
            entity = 29;
            entity = sizing[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['user'] = kilo;
            sizing = romeo == foxtrot;
            kilo = undefined;
            if(sizing) { _fun102526_ip = 283; continue _fun102526 }
 278:
            kilo = foxtrot.guildId;
 283:
            entity['guildId'] = kilo;
            entity['displayName'] = backup;
            if(!(romeo == yankee)) { _fun102526_ip = 313; continue _fun102526 }
 295:
            backup = romeo == foxtrot;
            romeo = undefined;
            if(backup) { _fun102526_ip = 310; continue _fun102526 }
 304:
            romeo = foxtrot.pronouns;
 310:
            yankee = romeo;
 313:
            entity['pronouns'] = yankee;
            entity['style'] = offset;
            entity['badgeContainerBackground'] = verify;
            verify = undefined;
            if(report) { _fun102526_ip = 335; continue _fun102526 }
 332:
            verify = options;
 335:
            entity['onPressDisplayName'] = verify;
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            oscar = 21;
            verify = romeo[oscar];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            oscar = romeo[oscar];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.t;
            oscar = oscar.y5MwJy;
            oscar = verify.bind(offset)(oscar);
            entity['displayNameAccessibilityHint'] = oscar;
            oscar = undefined;
            if(report) { _fun102526_ip = 408; continue _fun102526 }
 405:
            oscar = options;
 408:
            entity['onPressUserTag'] = oscar;
            oscar = undefined;
            if(report) { _fun102526_ip = 425; continue _fun102526 }
 418:
            oscar = function() {
                zulu = _closure2_slot1;
                mike = {};
                entity = 'PRESS_PRONOUNS';
                mike['action'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 28;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.presentUserPronouns;
                mike = mike.bind(zulu)();
                return entity;
            };
 425:
            entity['onPressPronouns'] = oscar;
            report = !report;
            entity['showBadgeToastOnPress'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: EditSection
        _fun102529: for(var _fun102529_ip = 0; ; ) switch(_fun102529_ip) {
 0:
            entity = argFoo;
            entity = entity.guildId;
            var _closure2_slot0 = entity;
            update = _closure1_slot1;
            echo = _closure1_slot2;
            entity = 10;
            entity = echo[entity];
            tango = undefined;
            entity = update.bind(tango)(entity);
            report = entity.bind(tango)();
            verify = _closure1_slot0;
            entity = 16;
            entity = echo[entity];
            mike = verify.bind(tango)(entity);
            entity = mike.useUserProfileAnalyticsContext;
            entity = entity.bind(mike)();
            entity = entity.trackUserProfileAction;
            var _closure2_slot1 = entity;
            entity = 11;
            entity = echo[entity];
            oscar = verify.bind(tango)(entity);
            zulu = oscar.useStateFromStores;
            entity = _closure1_slot5;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                zulu = _closure1_slot5;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = zulu.bind(oscar)(mike, entity);
            entity = 30;
            mike = echo[entity];
            mike = update.bind(tango)(mike);
            mike = mike.bind(tango)();
            var _closure2_slot2 = mike;
            entity = echo[entity];
            mike = update.bind(tango)(entity);
            entity = {};
            entity['guild'] = golf;
            entity = mike.bind(tango)(entity);
            var _closure2_slot3 = entity;
            zulu = _closure1_slot13;
            entity = 31;
            entity = echo[entity];
            mike = update.bind(tango)(entity);
            entity = {};
            report = report.primaryButtons;
            entity['style'] = report;
            report = _closure1_slot12;
            entity['maxWidth'] = report;
            backup = _closure1_slot13;
            oscar = 32;
            report = echo[oscar];
            report = verify.bind(tango)(report);
            foxtrot = report.Button;
            options = {};
            romeo = 'primary';
            options['variant'] = romeo;
            kilo = _closure1_slot13;
            yankee = 33;
            report = echo[yankee];
            report = verify.bind(tango)(report);
            verify = report.PencilIcon;
            report = {};
            result = 'sm';
            report['size'] = result;
            sizing = 34;
            echo = echo[sizing];
            echo = update.bind(tango)(echo);
            echo = echo.colors;
            echo = echo.WHITE;
            report['color'] = echo;
            report = kilo.bind(tango)(verify, report);
            options['icon'] = report;
            report = null;
            if(!(report == golf)) { _fun102529_ip = 366; continue _fun102529 }
 309:
            update = _closure1_slot0;
            source = _closure1_slot2;
            verify = 21;
            kilo = source[verify];
            kilo = update.bind(tango)(kilo);
            echo = kilo.intl;
            kilo = echo.string;
            verify = source[verify];
            verify = update.bind(tango)(verify);
            verify = verify.t;
            verify = verify.s5vZlZ;
            verify = kilo.bind(echo)(verify);
            _fun102529_ip = 421; continue _fun102529;
 366:
            source = _closure1_slot0;
            control = _closure1_slot2;
            kilo = 21;
            echo = control[kilo];
            echo = source.bind(tango)(echo);
            update = echo.intl;
            echo = update.string;
            kilo = control[kilo];
            kilo = source.bind(tango)(kilo);
            kilo = kilo.t;
            kilo = kilo.HmFaFB;
            verify = echo.bind(update)(kilo);
 421:
            options['text'] = verify;
            verify = function() { // Original name: onPress
                tango = _closure2_slot1;
                zulu = {};
                entity = 'EDIT_PROFILE';
                zulu['action'] = entity;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 12;
                zulu = report[zulu];
                oscar = tango.bind(entity)(zulu);
                zulu = oscar.hideActionSheet;
                zulu = zulu.bind(oscar)();
                zulu = 35;
                zulu = report[zulu];
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.bind(entity)();
                mike = _closure2_slot2;
                mike = mike.bind(entity)();
                return entity;
            };
            options['onPress'] = verify;
            verify = true;
            options['grow'] = verify;
            options = backup.bind(tango)(foxtrot, options);
            entity['primaryButton'] = options;
            golf = report != golf;
            report = undefined;
            if(!golf) { _fun102529_ip = 635; continue _fun102529 }
 466:
            options = _closure1_slot13;
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            oscar = kilo[oscar];
            oscar = backup.bind(tango)(oscar);
            golf = oscar.Button;
            oscar = {};
            oscar['variant'] = romeo;
            foxtrot = _closure1_slot13;
            yankee = kilo[yankee];
            yankee = backup.bind(tango)(yankee);
            romeo = yankee.PencilIcon;
            yankee = {};
            yankee['size'] = result;
            output = _closure1_slot1;
            sizing = kilo[sizing];
            sizing = output.bind(tango)(sizing);
            sizing = sizing.colors;
            sizing = sizing.WHITE;
            yankee['color'] = sizing;
            yankee = foxtrot.bind(tango)(romeo, yankee);
            oscar['icon'] = yankee;
            yankee = 21;
            romeo = kilo[yankee];
            romeo = backup.bind(tango)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            yankee = kilo[yankee];
            yankee = backup.bind(tango)(yankee);
            yankee = yankee.t;
            yankee = yankee.PKQB/P;
            yankee = romeo.bind(foxtrot)(yankee);
            oscar['text'] = yankee;
            offset = function() { // Original name: onPress
                tango = _closure2_slot1;
                zulu = {};
                entity = 'EDIT_GUILD_PROFILE';
                zulu['action'] = entity;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 12;
                zulu = report[zulu];
                oscar = tango.bind(entity)(zulu);
                zulu = oscar.hideActionSheet;
                zulu = zulu.bind(oscar)();
                zulu = 35;
                zulu = report[zulu];
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.bind(entity)();
                mike = _closure2_slot3;
                mike = mike.bind(entity)();
                return entity;
            };
            oscar['onPress'] = offset;
            oscar['grow'] = verify;
            report = options.bind(tango)(golf, oscar);
 635:
            entity['secondaryButton'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.PROFILE_CONTENT_BOTTOM_PADDING;
    var _closure1_slot9 = options;
    tango = tango.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RelationshipTypes;
    var _closure1_slot11 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot12 = tango;
    tango = 9;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot13 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot14 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot15 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: UserProfileContent
        _fun102533: for(var _fun102533_ip = 0; ; ) switch(_fun102533_ip) {
 0:
            entity = argFoo;
            result = entity.user;
            var _closure2_slot0 = result;
            kilo = entity.channel;
            var _closure2_slot1 = kilo;
            sizing = entity.displayProfile;
            whiskey = entity.showUserProfileActionSheet;
            var _closure2_slot2 = whiskey;
            variable42 = entity.disableCalls;
            variable41 = entity.disableMessage;
            vacuum = entity.disableStatus;
            golf = entity.isPreviewingChanges;
            variable43 = entity.friendToken;
            variable40 = entity.location;
            mike = entity.navigateToPremium;
            var _closure2_slot3 = mike;
            entity = entity.navigateToShop;
            var _closure2_slot4 = entity;
            report = undefined;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            zulu = _closure1_slot1;
            entity = _closure1_slot2;
            mike = 10;
            mike = entity[mike];
            mike = zulu.bind(report)(mike);
            yankee = mike.bind(report)();
            mike = 36;
            mike = entity[mike];
            tango = zulu.bind(report)(mike);
            mike = _closure1_slot12;
            offset = tango.bind(report)(mike);
            mike = 37;
            mike = entity[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.bind(report)();
            papa = mike.bottom;
            zulu = _closure1_slot0;
            mike = 11;
            entity = entity[mike];
            oscar = zulu.bind(report)(entity);
            tango = oscar.useStateFromStores;
            entity = _closure1_slot8;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                mike = _closure1_slot8;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            output = tango.bind(oscar)(zulu, entity);
            entity = null;
            zulu = entity == output;
            target = undefined;
            if(zulu) { _fun102533_ip = 235; continue _fun102533 }
 230:
            target = output.id;
 235:
            record = result.id;
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = oscar[mike];
            foxtrot = tango.bind(report)(zulu);
            verify = foxtrot.useStateFromStoresObject;
            zulu = _closure1_slot6;
            options = new Array(1);
            options[0] = zulu;
            zulu = function() {
                entity = {};
                tango = _closure1_slot6;
                report = tango.getRelationshipType;
                mike = _closure2_slot0;
                zulu = mike.id;
                zulu = report.bind(tango)(zulu);
                entity['relationshipType'] = zulu;
                zulu = tango.getOriginApplicationId;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                entity['originApplicationId'] = mike;
                return entity;
            };
            zulu = verify.bind(foxtrot)(options, zulu);
            update = zulu.relationshipType;
            variable46 = zulu.originApplicationId;
            zulu = 38;
            zulu = oscar[zulu];
            verify = tango.bind(report)(zulu);
            options = verify.useIncomingGameRelationshipsForUser;
            zulu = result.id;
            lima = options.bind(verify)(zulu);
            zulu = 39;
            zulu = oscar[zulu];
            verify = tango.bind(report)(zulu);
            options = verify.useIsGameFriends;
            zulu = result.id;
            backup = options.bind(verify)(zulu);
            zulu = 40;
            zulu = oscar[zulu];
            foxtrot = tango.bind(report)(zulu);
            verify = foxtrot.useUserProfileGameFriendApplicationIds;
            zulu = {};
            options = result.id;
            zulu['userId'] = options;
            options = 'UserProfileModalBody';
            zulu['location'] = options;
            variable36 = verify.bind(foxtrot)(zulu);
            zulu = 41;
            zulu = oscar[zulu];
            oscar = tango.bind(report)(zulu);
            tango = oscar.useIsFriendTiersUIEnabled;
            zulu = {};
            zulu['location'] = options;
            echo = tango.bind(oscar)(zulu);
            if(!(entity == sizing)) { _fun102533_ip = 449; continue _fun102533 }
 433:
            zulu = entity == kilo;
            variable39 = undefined;
            if(zulu) { _fun102533_ip = 447; continue _fun102533 }
 442:
            variable39 = kilo.guild_id;
 447:
            _fun102533_ip = 469; continue _fun102533;
 449:
            tango = sizing.guildId;
            oscar = entity != tango;
            zulu = undefined;
            if(!oscar) { _fun102533_ip = 466; continue _fun102533 }
 463:
            zulu = tango;
 466:
            variable39 = zulu;
 469:
            _closure2_slot5 = variable39;
            options = _closure1_slot3;
            oscar = options.useMemo;
            tango = new Array(2);
            tango[0] = variable39;
            tango[1] = result;
            zulu = function() {
                _fun102536: for(var _fun102536_ip = 0; ; ) switch(_fun102536_ip) {
 0:
                    entity = _closure2_slot5;
                    mike = null;
                    if(!(mike != entity)) { _fun102536_ip = 21; continue _fun102536 }
 13:
                    entity = _closure2_slot0;
                    if(!(mike == entity)) { _fun102536_ip = 25; continue _fun102536 }
 21:
                    entity = {};
                    _fun102536_ip = 56; continue _fun102536;
 25:
                    mike = {};
                    tango = _closure2_slot5;
                    zulu = _closure2_slot0;
                    report = zulu.id;
                    zulu = new Array(1);
                    zulu[0] = report;
                    mike[tango] = zulu;
                    entity = mike;
 56:
                    return entity;
                }
            };
            verify = oscar.bind(options)(zulu, tango);
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 42;
            zulu = tango[zulu];
            options = oscar.bind(report)(zulu);
            zulu = options.useSubscribeGuildMembers;
            zulu = zulu.bind(options)(verify);
            zulu = _closure1_slot1;
            options = 43;
            options = tango[options];
            verify = zulu.bind(report)(options);
            options = result.id;
            context = verify.bind(report)(options);
            mike = tango[mike];
            verify = oscar.bind(report)(mike);
            options = verify.useStateFromStoresObject;
            mike = _closure1_slot7;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                mike = _closure1_slot7;
                entity = mike.getAllPending;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = options.bind(verify)(oscar, mike);
            control = mike.pendingBanner;
            variable48 = mike.pendingAvatar;
            variable44 = mike.pendingAvatarDecoration;
            variable47 = mike.pendingGlobalName;
            variable45 = mike.pendingPronouns;
            quebec = mike.pendingBio;
            source = mike.pendingAccentColor;
            foxtrot = mike.pendingThemeColors;
            mike = 44;
            mike = tango[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['user'] = result;
            mike['displayProfile'] = sizing;
            tango = undefined;
            if(!golf) { _fun102533_ip = 683; continue _fun102533 }
 680:
            tango = foxtrot;
 683:
            mike['pendingThemeColors'] = tango;
            mike = zulu.bind(report)(mike);
            oscar = mike.theme;
            config = mike.primaryColor;
            sequence = mike.secondaryColor;
            variable37 = entity != config;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 45;
            mike = tango[mike];
            tango = zulu.bind(report)(mike);
            zulu = tango.useUserProfileColors;
            mike = {};
            mike['theme'] = oscar;
            mike['primaryColor'] = config;
            mike['secondaryColor'] = sequence;
            mike = zulu.bind(tango)(mike);
            status = mike.gradientFallbackBackground;
            variable49 = mike.avatarBackground;
            sierra = mike.containerBackground;
            if(!(entity != result)) { _fun102533_ip = 2657; continue _fun102533 }
 788:
            if(!(entity != output)) { _fun102533_ip = 2657; continue _fun102533 }
 795:
            equality = {};
            equality['backgroundColor'] = sierra;
            _closure2_slot6 = equality;
            tango = _closure1_slot14;
            zulu = _closure1_slot15;
            mike = {};
            verify = _closure1_slot13;
            options = _closure1_slot1;
            variable50 = _closure1_slot2;
            oscar = 46;
            oscar = variable50[oscar];
            options = options.bind(report)(oscar);
            oscar = {};
            oscar['user'] = result;
            oscar['displayProfile'] = sizing;
            oscar['bannerHeight'] = offset;
            offset = undefined;
            if(!golf) { _fun102533_ip = 863; continue _fun102533 }
 860:
            offset = control;
 863:
            oscar['pendingBanner'] = offset;
            offset = undefined;
            if(!golf) { _fun102533_ip = 876; continue _fun102533 }
 873:
            offset = variable48;
 876:
            oscar['pendingAvatar'] = offset;
            offset = undefined;
            if(!golf) { _fun102533_ip = 898; continue _fun102533 }
 886:
            control = entity != source;
            offset = undefined;
            if(!control) { _fun102533_ip = 898; continue _fun102533 }
 895:
            offset = source;
 898:
            oscar['pendingAccentColor'] = offset;
            offset = undefined;
            if(!golf) { _fun102533_ip = 920; continue _fun102533 }
 908:
            source = entity != foxtrot;
            offset = undefined;
            if(!source) { _fun102533_ip = 920; continue _fun102533 }
 917:
            offset = foxtrot;
 920:
            oscar['pendingThemeColors'] = offset;
            oscar['disableInteraction'] = golf;
            options = verify.bind(report)(options, oscar);
            oscar = new Array(3);
            oscar[0] = options;
            offset = _closure1_slot14;
            verify = _closure1_slot4;
            options = {};
            control = _closure1_slot13;
            source = _closure1_slot1;
            variable50 = _closure1_slot2;
            foxtrot = 47;
            foxtrot = variable50[foxtrot];
            source = source.bind(report)(foxtrot);
            foxtrot = {};
            foxtrot['backgroundColor'] = variable49;
            foxtrot['user'] = result;
            foxtrot['guildId'] = variable39;
            foxtrot['disableStatus'] = vacuum;
            vacuum = undefined;
            if(!golf) { _fun102533_ip = 1005; continue _fun102533 }
 1002:
            vacuum = variable48;
 1005:
            foxtrot['pendingAvatar'] = vacuum;
            vacuum = undefined;
            if(!golf) { _fun102533_ip = 1018; continue _fun102533 }
 1015:
            vacuum = variable44;
 1018:
            foxtrot['pendingAvatarDecoration'] = vacuum;
            source = control.bind(report)(source, foxtrot);
            foxtrot = new Array(2);
            foxtrot[0] = source;
            vacuum = _closure1_slot14;
            control = _closure1_slot1;
            variable44 = _closure1_slot2;
            source = 48;
            source = variable44[source];
            control = control.bind(report)(source);
            source = {};
            source['fallbackBackground'] = status;
            source['primaryColor'] = config;
            source['secondaryColor'] = sequence;
            config = yankee.profileContent;
            sequence = new Array(2);
            sequence[0] = config;
            config = {};
            if(!(target === record)) { _fun102533_ip = 1103; continue _fun102533 }
 1098:
            record = 0;
            if(!golf) { _fun102533_ip = 1116; continue _fun102533 }
 1103:
            target = entity != context;
            record = 0;
            if(target) { _fun102533_ip = 1116; continue _fun102533 }
 1112:
            record = _closure1_slot10;
 1116:
            config['paddingTop'] = record;
            record = _closure1_slot9;
            record = papa + record;
            config['paddingBottom'] = record;
            sequence[1] = config;
            source['containerStyle'] = sequence;
            record = _closure1_slot13;
            config = _closure1_slot16;
            sequence = {};
            sequence['customStatusActivity'] = context;
            sequence['user'] = result;
            sequence['guildId'] = variable39;
            papa = entity == kilo;
            context = undefined;
            if(papa) { _fun102533_ip = 1180; continue _fun102533 }
 1175:
            context = kilo.id;
 1180:
            sequence['channelId'] = context;
            sequence['hasCustomProfileTheme'] = variable37;
            sequence['showUserProfileActionSheet'] = whiskey;
            sequence['isPreviewingChanges'] = golf;
            config = record.bind(report)(config, sequence);
            sequence = new Array(3);
            sequence[0] = config;
            context = _closure1_slot14;
            record = _closure1_slot4;
            config = {};
            papa = yankee.primaryInfo;
            config['style'] = papa;
            status = _closure1_slot13;
            target = _closure1_slot19;
            papa = {};
            papa['user'] = result;
            variable48 = entity == kilo;
            variable44 = undefined;
            if(variable48) { _fun102533_ip = 1261; continue _fun102533 }
 1256:
            variable44 = kilo.id;
 1261:
            papa['channelId'] = variable44;
            papa['displayProfile'] = sizing;
            variable44 = undefined;
            if(!golf) { _fun102533_ip = 1278; continue _fun102533 }
 1275:
            variable44 = variable47;
 1278:
            papa['displayNameOverride'] = variable44;
            variable44 = undefined;
            if(!golf) { _fun102533_ip = 1291; continue _fun102533 }
 1288:
            variable44 = variable45;
 1291:
            papa['pronounsOverride'] = variable44;
            papa['badgeContainerBackground'] = sierra;
            papa['isPreviewingChanges'] = golf;
            target = status.bind(report)(target, papa);
            papa = new Array(7);
            papa[0] = target;
            status = result.id;
            target = output.id;
            target = status !== target;
            if(!target) { _fun102533_ip = 1377; continue _fun102533 }
 1337:
            variable44 = _closure1_slot13;
            sierra = _closure1_slot1;
            variable45 = _closure1_slot2;
            status = 49;
            status = variable45[status];
            sierra = sierra.bind(report)(status);
            status = {};
            status['user'] = result;
            status['guildId'] = variable39;
            target = variable44.bind(report)(sierra, status);
 1377:
            papa[1] = target;
            target = _closure1_slot11;
            target = target.PENDING_INCOMING;
            target = update === target;
            if(!target) { _fun102533_ip = 1477; continue _fun102533 }
 1398:
            variable44 = _closure1_slot13;
            sierra = _closure1_slot1;
            variable45 = _closure1_slot2;
            status = 50;
            status = variable45[status];
            sierra = sierra.bind(report)(status);
            status = {};
            status['user'] = result;
            variable47 = entity == kilo;
            variable45 = undefined;
            if(variable47) { _fun102533_ip = 1442; continue _fun102533 }
 1437:
            variable45 = kilo.id;
 1442:
            status['channelId'] = variable45;
            status['guildId'] = variable39;
            variable45 = undefined;
            if(!echo) { _fun102533_ip = 1458; continue _fun102533 }
 1455:
            variable45 = variable46;
 1458:
            status['applicationId'] = variable45;
            status['style'] = equality;
            status['showUserProfile'] = whiskey;
            target = variable44.bind(report)(sierra, status);
 1477:
            papa[2] = target;
            target = echo;
            if(!target) { _fun102533_ip = 1504; continue _fun102533 }
 1487:
            sierra = lima.map;
            status = function(argFoo) {
                _fun102540: for(var _fun102540_ip = 0; ; ) switch(_fun102540_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot13;
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 50;
                    mike = tango[mike];
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    mike = {};
                    golf = _closure2_slot0;
                    mike['user'] = golf;
                    golf = true;
                    mike['isGameRelationship'] = golf;
                    golf = entity.applicationId;
                    mike['applicationId'] = golf;
                    options = _closure2_slot1;
                    golf = null;
                    options = golf == options;
                    golf = undefined;
                    if(options) { _fun102540_ip = 85; continue _fun102540 }
 76:
                    options = _closure2_slot1;
                    golf = options.id;
 85:
                    mike['channelId'] = golf;
                    golf = _closure2_slot5;
                    mike['guildId'] = golf;
                    golf = _closure2_slot6;
                    mike['style'] = golf;
                    oscar = _closure2_slot2;
                    mike['showUserProfile'] = oscar;
                    entity = entity.applicationId;
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                }
            };
            target = sierra.bind(lima)(status);
 1504:
            papa[3] = target;
            sierra = _closure1_slot13;
            status = _closure1_slot1;
            lima = _closure1_slot2;
            target = 51;
            target = lima[target];
            status = status.bind(report)(target);
            target = {};
            target['user'] = result;
            target['style'] = equality;
            target = sierra.bind(report)(status, target);
            papa[4] = target;
            status = result.id;
            target = output.id;
            target = status === target;
            if(!target) { _fun102533_ip = 1572; continue _fun102533 }
 1569:
            target = !golf;
 1572:
            if(!target) { _fun102533_ip = 1595; continue _fun102533 }
 1575:
            lima = _closure1_slot13;
            sierra = _closure1_slot20;
            status = {};
            status['guildId'] = variable39;
            target = lima.bind(report)(sierra, status);
 1595:
            papa[5] = target;
            status = result.id;
            target = output.id;
            target = status !== target;
            if(!target) { _fun102533_ip = 1712; continue _fun102533 }
 1616:
            lima = _closure1_slot13;
            sierra = _closure1_slot1;
            variable44 = _closure1_slot2;
            status = 52;
            status = variable44[status];
            sierra = sierra.bind(report)(status);
            status = {};
            status['user'] = result;
            status['friendToken'] = variable43;
            if(variable42) { _fun102533_ip = 1668; continue _fun102533 }
 1654:
            variable43 = _closure1_slot11;
            variable43 = variable43.BLOCKED;
            variable42 = update === variable43;
 1668:
            if(variable42) { _fun102533_ip = 1677; continue _fun102533 }
 1671:
            variable42 = result.isProvisional;
 1677:
            status['disableCalls'] = variable42;
            status['disableMessage'] = variable41;
            status['location'] = variable40;
            status['hasCustomProfileTheme'] = variable37;
            variable40 = yankee.primaryButtons;
            status['style'] = variable40;
            target = lima.bind(report)(sierra, status);
 1712:
            papa[6] = target;
            config['children'] = papa;
            config = context.bind(report)(record, config);
            sequence[1] = config;
            context = _closure1_slot14;
            record = _closure1_slot4;
            config = {};
            papa = yankee.cards;
            config['style'] = papa;
            target = result.isProvisional;
            if(!target) { _fun102533_ip = 1818; continue _fun102533 }
 1759:
            sierra = _closure1_slot13;
            status = _closure1_slot0;
            lima = _closure1_slot2;
            papa = 53;
            papa = lima[papa];
            papa = status.bind(report)(papa);
            status = papa.UserProfileProvisionalAccountExplainerCard;
            papa = {};
            papa['style'] = equality;
            lima = result.id;
            papa['userId'] = lima;
            lima = 16;
            papa['iconSize'] = lima;
            target = sierra.bind(report)(status, papa);
 1818:
            papa = new Array(9);
            papa[0] = target;
            status = result.id;
            target = output.id;
            target = status === target;
            if(!target) { _fun102533_ip = 1846; continue _fun102533 }
 1843:
            target = !golf;
 1846:
            if(!target) { _fun102533_ip = 1910; continue _fun102533 }
 1849:
            lima = _closure1_slot13;
            sierra = _closure1_slot1;
            variable40 = _closure1_slot2;
            status = 54;
            status = variable40[status];
            sierra = sierra.bind(report)(status);
            status = {};
            variable40 = function() { // Original name: handleNavigateToPremium
                _fun102538: for(var _fun102538_ip = 0; ; ) switch(_fun102538_ip) {
 0:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.hideActionSheet;
                    mike = mike.bind(zulu)();
                    tango = _closure2_slot3;
                    zulu = null;
                    if(!(zulu != tango)) { _fun102538_ip = 56; continue _fun102538 }
 48:
                    mike = _closure2_slot3;
                    mike = mike.bind(entity)();
 56:
                    return entity;
                }
            };
            status['navigateToPremium'] = variable40;
            variable38 = function() { // Original name: handleNavigateToShop
                _fun102539: for(var _fun102539_ip = 0; ; ) switch(_fun102539_ip) {
 0:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.hideActionSheet;
                    mike = mike.bind(zulu)();
                    tango = _closure2_slot4;
                    zulu = null;
                    if(!(zulu != tango)) { _fun102539_ip = 56; continue _fun102539 }
 48:
                    mike = _closure2_slot4;
                    mike = mike.bind(entity)();
 56:
                    return entity;
                }
            };
            status['navigateToShop'] = variable38;
            status['hasCustomProfileTheme'] = variable37;
            target = lima.bind(report)(sierra, status);
 1910:
            papa[1] = target;
            sierra = _closure1_slot13;
            status = _closure1_slot1;
            lima = _closure1_slot2;
            target = 55;
            target = lima[target];
            status = status.bind(report)(target);
            target = {};
            target['user'] = result;
            target['currentUser'] = output;
            target['guildId'] = variable39;
            target['style'] = equality;
            target = sierra.bind(report)(status, target);
            papa[2] = target;
            status = variable36.length;
            target = 0;
            target = status > target;
            if(!target) { _fun102533_ip = 2031; continue _fun102533 }
 1981:
            lima = _closure1_slot13;
            sierra = _closure1_slot1;
            variable37 = _closure1_slot2;
            status = 56;
            status = variable37[status];
            sierra = sierra.bind(report)(status);
            status = {};
            variable37 = result.id;
            status['userId'] = variable37;
            status['applicationIds'] = variable36;
            status['style'] = equality;
            target = lima.bind(report)(sierra, status);
 2031:
            papa[3] = target;
            sierra = _closure1_slot13;
            status = _closure1_slot1;
            lima = _closure1_slot2;
            target = 57;
            target = lima[target];
            status = status.bind(report)(target);
            target = {};
            lima = result.id;
            target['userId'] = lima;
            target['displayProfile'] = sizing;
            lima = undefined;
            if(!golf) { _fun102533_ip = 2083; continue _fun102533 }
 2080:
            lima = quebec;
 2083:
            target['pendingBio'] = lima;
            target['style'] = equality;
            target = sierra.bind(report)(status, target);
            papa[4] = target;
            target = entity != variable39;
            if(!target) { _fun102533_ip = 2239; continue _fun102533 }
 2112:
            lima = _closure1_slot14;
            sierra = _closure1_slot15;
            status = {};
            variable38 = _closure1_slot13;
            variable37 = _closure1_slot1;
            variable40 = _closure1_slot2;
            quebec = 58;
            quebec = variable40[quebec];
            variable36 = variable37.bind(report)(quebec);
            quebec = {};
            variable41 = result.id;
            quebec['userId'] = variable41;
            quebec['guildId'] = variable39;
            quebec['style'] = equality;
            variable36 = variable38.bind(report)(variable36, quebec);
            quebec = new Array(2);
            quebec[0] = variable36;
            variable38 = _closure1_slot13;
            variable36 = 59;
            variable36 = variable40[variable36];
            variable37 = variable37.bind(report)(variable36);
            variable36 = {};
            variable36['user'] = result;
            variable36['currentUser'] = output;
            variable36['guildId'] = variable39;
            variable36['showUserProfile'] = whiskey;
            variable36['style'] = equality;
            variable36 = variable38.bind(report)(variable37, variable36);
            quebec[1] = variable36;
            status['children'] = quebec;
            target = lima.bind(report)(sierra, status);
 2239:
            papa[5] = target;
            variable36 = _closure1_slot13;
            status = _closure1_slot0;
            lima = _closure1_slot2;
            target = 60;
            sierra = lima[target];
            sierra = status.bind(report)(sierra);
            quebec = sierra.UserProfileAccountConnectionsCard;
            sierra = {};
            variable37 = result.id;
            sierra['userId'] = variable37;
            sierra['style'] = equality;
            sierra = variable36.bind(report)(quebec, sierra);
            papa[6] = sierra;
            sierra = _closure1_slot13;
            target = lima[target];
            target = status.bind(report)(target);
            status = target.UserProfileApplicationRoleConnectionsCard;
            target = {};
            lima = result.id;
            target['userId'] = lima;
            target['style'] = equality;
            target = sierra.bind(report)(status, target);
            papa[7] = target;
            target = !golf;
            if(!target) { _fun102533_ip = 2398; continue _fun102533 }
 2348:
            lima = _closure1_slot13;
            sierra = _closure1_slot1;
            quebec = _closure1_slot2;
            status = 61;
            status = quebec[status];
            sierra = sierra.bind(report)(status);
            status = {};
            quebec = result.id;
            status['userId'] = quebec;
            status['style'] = equality;
            status['onBack'] = whiskey;
            target = lima.bind(report)(sierra, status);
 2398:
            papa[8] = target;
            config['children'] = papa;
            config = context.bind(report)(record, config);
            sequence[2] = config;
            source['children'] = sequence;
            source = vacuum.bind(report)(control, source);
            foxtrot[1] = source;
            options['children'] = foxtrot;
            options = offset.bind(report)(verify, options);
            oscar[1] = options;
            golf = !golf;
            if(!golf) { _fun102533_ip = 2641; continue _fun102533 }
 2453:
            offset = _closure1_slot14;
            verify = _closure1_slot4;
            options = {};
            yankee = yankee.bannerButtons;
            options['style'] = yankee;
            source = result.id;
            yankee = output.id;
            foxtrot = null;
            if(!(source !== yankee)) { _fun102533_ip = 2569; continue _fun102533 }
 2489:
            yankee = result.bot;
            foxtrot = null;
            if(yankee) { _fun102533_ip = 2569; continue _fun102533 }
 2500:
            yankee = _closure1_slot11;
            yankee = yankee.FRIEND;
            if(!(update !== yankee)) { _fun102533_ip = 2546; continue _fun102533 }
 2514:
            yankee = null;
            if(!echo) { _fun102533_ip = 2544; continue _fun102533 }
 2519:
            yankee = null;
            if(!backup) { _fun102533_ip = 2544; continue _fun102533 }
 2524:
            update = _closure1_slot13;
            echo = _closure1_slot18;
            backup = {};
            backup['user'] = result;
            yankee = update.bind(report)(echo, backup);
 2544:
            _fun102533_ip = 2566; continue _fun102533;
 2546:
            update = _closure1_slot13;
            echo = _closure1_slot17;
            backup = {};
            backup['user'] = result;
            yankee = update.bind(report)(echo, backup);
 2566:
            foxtrot = yankee;
 2569:
            yankee = new Array(2);
            yankee[0] = foxtrot;
            backup = _closure1_slot13;
            foxtrot = _closure1_slot1;
            echo = _closure1_slot2;
            romeo = 62;
            romeo = echo[romeo];
            foxtrot = foxtrot.bind(report)(romeo);
            romeo = {};
            romeo['user'] = result;
            romeo['currentUser'] = output;
            romeo['displayProfile'] = sizing;
            romeo['channel'] = kilo;
            romeo = backup.bind(report)(foxtrot, romeo);
            yankee[1] = romeo;
            options['children'] = yankee;
            golf = offset.bind(report)(verify, options);
 2641:
            oscar[2] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 2657:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 63;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/native/UserProfileContent.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();