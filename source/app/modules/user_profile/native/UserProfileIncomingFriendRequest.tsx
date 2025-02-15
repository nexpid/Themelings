// app/modules/user_profile/native/UserProfileIncomingFriendRequest.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
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
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    offset = 2;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flexDirection': 'row', 'rowGap': 16, 'columnGap': 12, 'flexWrap': 'wrap'};
    tango['container'] = verify;
    verify = {};
    yankee = '100%';
    verify['flexBasis'] = yankee;
    tango['text'] = verify;
    verify = {};
    verify['paddingTop'] = offset;
    tango['gameIcon'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot7 = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/native/UserProfileIncomingFriendRequest.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: UserProfileIncomingFriendRequest
        _fun102625: for(var _fun102625_ip = 0; ; ) switch(_fun102625_ip) {
 0:
            entity = argFoo;
            output = entity.user;
            sizing = entity.channelId;
            foxtrot = entity.guildId;
            backup = entity.isGameRelationship;
            report = undefined;
            if(!(backup === report)) { _fun102625_ip = 34; continue _fun102625 }
 32:
            backup = false;
 34:
            var _closure2_slot0 = backup;
            zulu = entity.applicationId;
            verify = entity.style;
            echo = entity.showUserProfile;
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            entity = _closure1_slot7;
            oscar = entity.bind(report)();
            _closure2_slot1 = oscar;
            romeo = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 4;
            entity = tango[entity];
            entity = romeo.bind(report)(entity);
            yankee = entity.bind(report)();
            mike = _closure1_slot0;
            entity = 5;
            entity = tango[entity];
            options = mike.bind(report)(entity);
            entity = options.useUserProfileAnalyticsContext;
            entity = entity.bind(options)();
            entity = entity.trackUserProfileAction;
            _closure2_slot2 = entity;
            options = 6;
            options = tango[options];
            options = romeo.bind(report)(options);
            options = options.bind(report)();
            update = options.newestAnalyticsLocation;
            options = 7;
            options = tango[options];
            kilo = mike.bind(report)(options);
            offset = kilo.useFriendRequestActions;
            options = {};
            source = output.id;
            options['userId'] = source;
            options['applicationId'] = zulu;
            options['isGameRelationship'] = backup;
            options['location'] = update;
            options['onConfirm'] = echo;
            options['onCancel'] = echo;
            offset = offset.bind(kilo)(options);
            options = offset.acceptFriendRequest;
            _closure2_slot3 = options;
            kilo = offset.cancelFriendRequest;
            _closure2_slot4 = kilo;
            offset = 8;
            offset = tango[offset];
            romeo = romeo.bind(report)(offset);
            offset = romeo.useName;
            source = offset.bind(romeo)(foxtrot, sizing, output);
            romeo = _closure1_slot3;
            foxtrot = romeo.useCallback;
            offset = new Array(3);
            offset[0] = options;
            offset[1] = backup;
            offset[2] = entity;
            options = function() {
                _fun102626: for(var _fun102626_ip = 0; ; ) switch(_fun102626_ip) {
 0:
                    mike = _closure2_slot3;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    zulu = _closure2_slot2;
                    mike = {};
                    report = _closure2_slot0;
                    tango = 'ACCEPT_FRIEND_REQUEST';
                    if(!report) { _fun102626_ip = 38; continue _fun102626 }
 32:
                    tango = 'ACCEPT_GAME_FRIEND_REQUEST';
 38:
                    mike['action'] = tango;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            foxtrot = foxtrot.bind(romeo)(options, offset);
            offset = romeo.useCallback;
            options = new Array(3);
            options[0] = kilo;
            options[1] = backup;
            options[2] = entity;
            entity = function() {
                _fun102627: for(var _fun102627_ip = 0; ; ) switch(_fun102627_ip) {
 0:
                    mike = _closure2_slot4;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    zulu = _closure2_slot2;
                    mike = {};
                    report = _closure2_slot0;
                    tango = 'IGNORE_FRIEND_REQUEST';
                    if(!report) { _fun102627_ip = 38; continue _fun102627 }
 32:
                    tango = 'IGNORE_GAME_FRIEND_REQUEST';
 38:
                    mike['action'] = tango;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            offset = offset.bind(romeo)(entity, options);
            echo = null;
            control = echo != zulu;
            entity = 9;
            entity = tango[entity];
            mike = mike.bind(report)(entity);
            entity = mike.useGetOrFetchApplication;
            update = entity.bind(mike)(zulu);
            _closure2_slot5 = update;
            if(!control) { _fun102625_ip = 393; continue _fun102625 }
 381:
            mike = echo == update;
            entity = null;
            if(mike) { _fun102625_ip = 870; continue _fun102625 }
 393:
            tango = _closure1_slot6;
            zulu = _closure1_slot4;
            mike = {};
            romeo = oscar.container;
            options = new Array(3);
            options[0] = romeo;
            yankee = yankee.card;
            options[1] = yankee;
            options[2] = verify;
            mike['style'] = options;
            verify = _closure1_slot5;
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            options = 10;
            options = romeo[options];
            options = yankee.bind(report)(options);
            options = options.Text;
            yankee = {'variant': 'text-sm/semibold', 'color': 'header-secondary'};
            oscar = oscar.text;
            yankee['style'] = oscar;
            romeo = _closure1_slot0;
            oscar = _closure1_slot2;
            kilo = 11;
            sizing = oscar[kilo];
            sizing = romeo.bind(report)(sizing);
            output = sizing.intl;
            sizing = output.format;
            if(control) { _fun102625_ip = 560; continue _fun102625 }
 519:
            oscar = oscar[kilo];
            oscar = romeo.bind(report)(oscar);
            oscar = oscar.t;
            romeo = oscar.uIomX1;
            oscar = {};
            oscar['username'] = source;
            oscar = sizing.bind(output)(romeo, oscar);
            yankee['children'] = oscar;
            oscar = yankee;
            _fun102625_ip = 649; continue _fun102625;
 560:
            control = _closure1_slot0;
            romeo = _closure1_slot2;
            romeo = romeo[kilo];
            romeo = control.bind(report)(romeo);
            romeo = romeo.t;
            if(backup) { _fun102625_ip = 593; continue _fun102625 }
 585:
            backup = romeo.V15uUF;
            _fun102625_ip = 599; continue _fun102625;
 593:
            backup = romeo.syHjLC;
 599:
            romeo = {};
            romeo['username'] = source;
            source = echo == update;
            echo = undefined;
            if(source) { _fun102625_ip = 619; continue _fun102625 }
 614:
            echo = update.name;
 619:
            romeo['applicationName'] = echo;
            result = function() { // Original name: applicationIcon
                _fun102628: for(var _fun102628_ip = 0; ; ) switch(_fun102628_ip) {
 0:
                    zulu = _closure2_slot5;
                    entity = null;
                    zulu = entity == zulu;
                    if(zulu) { _fun102628_ip = 164; continue _fun102628 }
 19:
                    oscar = _closure1_slot5;
                    yankee = _closure1_slot1;
                    verify = _closure1_slot2;
                    golf = 12;
                    zulu = verify[golf];
                    report = undefined;
                    tango = yankee.bind(report)(zulu);
                    zulu = {};
                    offset = 13;
                    offset = verify[offset];
                    romeo = yankee.bind(report)(offset);
                    yankee = romeo.getApplicationIconSource;
                    offset = {};
                    foxtrot = _closure2_slot5;
                    foxtrot = foxtrot.id;
                    offset['id'] = foxtrot;
                    foxtrot = _closure2_slot5;
                    foxtrot = foxtrot.icon;
                    offset['icon'] = foxtrot;
                    offset = yankee.bind(romeo)(offset);
                    zulu['source'] = offset;
                    options = _closure1_slot0;
                    golf = verify[golf];
                    golf = options.bind(report)(golf);
                    golf = golf.AvatarSizes;
                    golf = golf.XXSMALL;
                    zulu['size'] = golf;
                    golf = _closure2_slot1;
                    golf = golf.gameIcon;
                    zulu['style'] = golf;
                    mike = _closure2_slot5;
                    mike = mike.id;
                    entity = oscar.bind(report)(tango, zulu, mike);
 164:
                    return entity;
                }
            };
            romeo['applicationIcon'] = result;
            romeo = sizing.bind(output)(backup, romeo);
            yankee['children'] = romeo;
            oscar = yankee;
 649:
            options = verify.bind(report)(options, oscar);
            oscar = new Array(3);
            oscar[0] = options;
            verify = _closure1_slot5;
            backup = _closure1_slot0;
            yankee = _closure1_slot2;
            golf = 14;
            options = yankee[golf];
            options = backup.bind(report)(options);
            romeo = options.Button;
            options = {'size': 'sm', 'variant': 'primary'};
            sizing = yankee[kilo];
            sizing = backup.bind(report)(sizing);
            result = sizing.intl;
            output = result.string;
            sizing = yankee[kilo];
            sizing = backup.bind(report)(sizing);
            sizing = sizing.t;
            sizing = sizing.ZcibdX;
            sizing = output.bind(result)(sizing);
            options['text'] = sizing;
            options['onPress'] = foxtrot;
            options = verify.bind(report)(romeo, options);
            oscar[1] = options;
            golf = yankee[golf];
            golf = backup.bind(report)(golf);
            options = golf.Button;
            golf = {'size': 'sm', 'variant': 'secondary'};
            romeo = yankee[kilo];
            romeo = backup.bind(report)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            yankee = yankee[kilo];
            yankee = backup.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.xuio0N;
            yankee = romeo.bind(foxtrot)(yankee);
            golf['text'] = yankee;
            golf['onPress'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[2] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 870:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();