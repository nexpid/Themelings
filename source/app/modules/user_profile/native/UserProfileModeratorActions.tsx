// app/modules/user_profile/native/UserProfileModeratorActions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    offset = 0;
    tango = oscar[offset];
    entity = undefined;
    tango = options.bind(entity)(tango);
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.GuildFeatures;
    var _closure1_slot10 = golf;
    tango = tango.Permissions;
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildMemberFlags;
    var _closure1_slot12 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot13 = tango;
    tango = 9;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['paddingBottom'] = offset;
    tango['cardContainer'] = verify;
    verify = {};
    verify['marginBottom'] = offset;
    tango['cardTitle'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot14 = tango;
    tango = 47;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/native/UserProfileModeratorActions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: UserProfileModeratorActions
        _fun81571: for(var _fun81571_ip = 0; ; ) switch(_fun81571_ip) {
 0:
            entity = argFoo;
            sizing = entity.user;
            var _closure2_slot0 = sizing;
            golf = entity.currentUser;
            kilo = entity.guildId;
            var _closure2_slot1 = kilo;
            zulu = entity.showUserProfile;
            var _closure2_slot2 = zulu;
            foxtrot = entity.style;
            oscar = undefined;
            var _closure2_slot11 = oscar;
            var _closure2_slot12 = oscar;
            entity = _closure1_slot14;
            yankee = entity.bind(oscar)();
            zulu = _closure1_slot0;
            result = _closure1_slot3;
            entity = 10;
            entity = result[entity];
            tango = zulu.bind(oscar)(entity);
            entity = tango.useUserProfileAnalyticsContext;
            entity = entity.bind(tango)();
            entity = entity.trackUserProfileAction;
            var _closure2_slot3 = entity;
            offset = _closure1_slot1;
            entity = 11;
            entity = result[entity];
            entity = offset.bind(oscar)(entity);
            entity = entity.hideActionSheet;
            var _closure2_slot4 = entity;
            entity = 12;
            entity = result[entity];
            tango = offset.bind(oscar)(entity);
            entity = {};
            report = sizing.id;
            entity['userId'] = report;
            entity['guildId'] = kilo;
            entity = tango.bind(oscar)(entity);
            backup = entity.voiceState;
            var _closure2_slot5 = backup;
            whiskey = entity.voiceChannel;
            var _closure2_slot6 = whiskey;
            sierra = 13;
            entity = result[sierra];
            verify = zulu.bind(oscar)(entity);
            report = verify.useStateFromStores;
            entity = _closure1_slot8;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                zulu = _closure1_slot8;
                mike = zulu.getGuild;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            control = report.bind(verify)(tango, entity);
            var _closure2_slot7 = control;
            entity = result[sierra];
            verify = zulu.bind(oscar)(entity);
            report = verify.useStateFromStores;
            entity = _closure1_slot7;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                tango = _closure1_slot7;
                zulu = tango.getMember;
                mike = _closure2_slot1;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            source = report.bind(verify)(tango, entity);
            var _closure2_slot8 = source;
            tango = sizing.id;
            entity = golf.id;
            record = tango === entity;
            var _closure2_slot9 = record;
            entity = result[sierra];
            report = zulu.bind(oscar)(entity);
            tango = report.useStateFromStoresObject;
            entity = _closure1_slot9;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                _fun81574: for(var _fun81574_ip = 0; ; ) switch(_fun81574_ip) {
 0:
                    entity = {};
                    oscar = _closure1_slot0;
                    verify = _closure1_slot3;
                    report = 14;
                    zulu = verify[report];
                    golf = undefined;
                    yankee = oscar.bind(golf)(zulu);
                    offset = yankee.canKickMember;
                    options = _closure2_slot0;
                    zulu = _closure2_slot7;
                    offset = offset.bind(yankee)(options, zulu);
                    entity['canKickUser'] = offset;
                    report = verify[report];
                    oscar = oscar.bind(golf)(report);
                    report = oscar.canBanMember;
                    report = report.bind(oscar)(options, zulu);
                    entity['canBanUser'] = report;
                    report = null;
                    zulu = report != zulu;
                    if(!zulu) { _fun81574_ip = 125; continue _fun81574 }
 90:
                    yankee = _closure1_slot9;
                    offset = yankee.canManageUser;
                    oscar = _closure1_slot11;
                    verify = oscar.MANAGE_NICKNAMES;
                    options = _closure2_slot0;
                    oscar = _closure2_slot7;
                    zulu = offset.bind(yankee)(verify, options, oscar);
 125:
                    entity['canChangeNick'] = zulu;
                    zulu = _closure2_slot7;
                    zulu = report != zulu;
                    if(!zulu) { _fun81574_ip = 176; continue _fun81574 }
 141:
                    yankee = _closure1_slot9;
                    offset = yankee.canManageUser;
                    oscar = _closure1_slot11;
                    verify = oscar.MANAGE_ROLES;
                    options = _closure2_slot0;
                    oscar = _closure2_slot7;
                    zulu = offset.bind(yankee)(verify, options, oscar);
 176:
                    entity['canManageUserRoles'] = zulu;
                    zulu = _closure2_slot7;
                    zulu = report != zulu;
                    if(!zulu) { _fun81574_ip = 222; continue _fun81574 }
 192:
                    offset = _closure1_slot9;
                    verify = offset.can;
                    oscar = _closure1_slot11;
                    options = oscar.MANAGE_ROLES;
                    oscar = _closure2_slot7;
                    zulu = verify.bind(offset)(options, oscar);
 222:
                    entity['canManageGuildRoles'] = zulu;
                    zulu = _closure2_slot7;
                    zulu = report != zulu;
                    if(!zulu) { _fun81574_ip = 273; continue _fun81574 }
 238:
                    yankee = _closure1_slot9;
                    offset = yankee.canManageUser;
                    oscar = _closure1_slot11;
                    verify = oscar.MANAGE_GUILD;
                    options = _closure2_slot0;
                    oscar = _closure2_slot7;
                    zulu = offset.bind(yankee)(verify, options, oscar);
 273:
                    entity['canManageGuild'] = zulu;
                    zulu = _closure2_slot7;
                    zulu = report != zulu;
                    if(!zulu) { _fun81574_ip = 324; continue _fun81574 }
 289:
                    offset = _closure1_slot9;
                    verify = offset.canManageUser;
                    report = _closure1_slot11;
                    options = report.MODERATE_MEMBERS;
                    oscar = _closure2_slot0;
                    report = _closure2_slot7;
                    zulu = verify.bind(offset)(options, oscar, report);
 324:
                    entity['canModerateMembers'] = zulu;
                    report = _closure1_slot9;
                    options = report.can;
                    zulu = _closure1_slot11;
                    oscar = zulu.MOVE_MEMBERS;
                    tango = _closure2_slot6;
                    oscar = options.bind(report)(oscar, tango);
                    entity['canMoveMembers'] = oscar;
                    options = report.can;
                    oscar = zulu.MUTE_MEMBERS;
                    oscar = options.bind(report)(oscar, tango);
                    entity['canMuteMembers'] = oscar;
                    oscar = report.can;
                    zulu = zulu.DEAFEN_MEMBERS;
                    zulu = oscar.bind(report)(zulu, tango);
                    entity['canDeafenMembers'] = zulu;
                    zulu = report.can;
                    oscar = _closure1_slot0;
                    options = _closure1_slot3;
                    mike = 15;
                    mike = options[mike];
                    mike = oscar.bind(golf)(mike);
                    mike = mike.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                    mike = zulu.bind(report)(mike, tango);
                    entity['canModerateStage'] = mike;
                    return entity;
                }
            };
            verify = tango.bind(report)(zulu, entity);
            report = verify.canKickUser;
            zulu = verify.canBanUser;
            vacuum = verify.canChangeNick;
            entity = verify.canManageUserRoles;
            update = verify.canManageGuildRoles;
            tango = verify.canManageGuild;
            config = verify.canModerateMembers;
            romeo = verify.canMoveMembers;
            var _closure2_slot10 = romeo;
            echo = verify.canMuteMembers;
            output = verify.canDeafenMembers;
            context = verify.canModerateStage;
            verify = 16;
            verify = result[verify];
            offset = offset.bind(oscar)(verify);
            verify = sizing.id;
            kilo = offset.bind(oscar)(kilo, verify);
            if(!config) { _fun81571_ip = 429; continue _fun81571 }
 426:
            config = report;
 429:
            if(!config) { _fun81571_ip = 435; continue _fun81571 }
 432:
            config = zulu;
 435:
            if(config) { _fun81571_ip = 441; continue _fun81571 }
 438:
            config = tango;
 441:
            if(config) { _fun81571_ip = 447; continue _fun81571 }
 444:
            config = entity;
 447:
            tango = _closure1_slot1;
            entity = _closure1_slot3;
            papa = 17;
            entity = entity[papa];
            offset = tango.bind(oscar)(entity);
            verify = sizing.id;
            entity = null;
            result = entity == whiskey;
            tango = undefined;
            if(result) { _fun81571_ip = 488; continue _fun81571 }
 483:
            tango = whiskey.id;
 488:
            sequence = offset.bind(oscar)(verify, tango);
            offset = entity != whiskey;
            if(!offset) { _fun81571_ip = 519; continue _fun81571 }
 501:
            verify = entity == backup;
            tango = undefined;
            if(verify) { _fun81571_ip = 515; continue _fun81571 }
 510:
            tango = backup.channelId;
 515:
            offset = entity != tango;
 519:
            target = entity != whiskey;
            if(!target) { _fun81571_ip = 536; continue _fun81571 }
 526:
            tango = whiskey.isGuildStageVoice;
            target = tango.bind(whiskey)();
 536:
            result = entity != whiskey;
            if(!result) { _fun81571_ip = 585; continue _fun81571 }
 543:
            tango = !target;
            if(tango) { _fun81571_ip = 582; continue _fun81571 }
 549:
            status = _closure1_slot0;
            verify = _closure1_slot3;
            verify = verify[papa];
            verify = status.bind(oscar)(verify);
            verify = verify.RequestToSpeakStates;
            verify = verify.ON_STAGE;
            tango = sequence === verify;
 582:
            result = tango;
 585:
            status = _closure1_slot0;
            verify = _closure1_slot3;
            tango = verify[sierra];
            quebec = status.bind(oscar)(tango);
            equality = quebec.useStateFromStores;
            tango = _closure1_slot4;
            lima = new Array(1);
            lima[0] = tango;
            tango = function() {
                _fun81575: for(var _fun81575_ip = 0; ; ) switch(_fun81575_ip) {
 0:
                    tango = _closure1_slot4;
                    zulu = tango.getPermissionsForUser;
                    entity = _closure2_slot0;
                    mike = entity.id;
                    oscar = _closure2_slot6;
                    entity = null;
                    oscar = entity == oscar;
                    entity = undefined;
                    if(oscar) { _fun81575_ip = 49; continue _fun81575 }
 40:
                    report = _closure2_slot6;
                    entity = report.id;
 49:
                    entity = zulu.bind(tango)(mike, entity);
                    entity = entity.speaker;
                    return entity;
                }
            };
            tango = equality.bind(quebec)(lima, tango);
            verify = verify[sierra];
            lima = status.bind(oscar)(verify);
            sierra = lima.useStateFromStoresArray;
            verify = _closure1_slot5;
            status = new Array(1);
            status[0] = verify;
            verify = function() {
                _fun81576: for(var _fun81576_ip = 0; ; ) switch(_fun81576_ip) {
 0:
                    entity = _closure2_slot10;
                    if(!entity) { _fun81576_ip = 22; continue _fun81576 }
 12:
                    zulu = _closure2_slot6;
                    entity = null;
                    if(!(entity == zulu)) { _fun81576_ip = 28; continue _fun81576 }
 22:
                    entity = new Array(0);
                    _fun81576_ip = 92; continue _fun81576;
 28:
                    oscar = _closure1_slot5;
                    report = oscar.getChannels;
                    tango = _closure2_slot1;
                    tango = report.bind(oscar)(tango);
                    zulu = _closure1_slot6;
                    report = tango[zulu];
                    tango = report.filter;
                    zulu = function(argFoo) {
                        _fun81577: for(var _fun81577_ip = 0; ; ) switch(_fun81577_ip) {
 0:
                            entity = argFoo;
                            golf = entity.channel;
                            mike = golf.id;
                            entity = _closure2_slot6;
                            entity = entity.id;
                            entity = mike !== entity;
                            if(!entity) { _fun81577_ip = 97; continue _fun81577 }
 32:
                            tango = _closure1_slot2;
                            zulu = _closure1_slot3;
                            mike = 18;
                            zulu = zulu[mike];
                            mike = undefined;
                            tango = tango.bind(mike)(zulu);
                            zulu = tango.can;
                            mike = {};
                            mike['context'] = golf;
                            oscar = _closure1_slot11;
                            oscar = oscar.CONNECT;
                            mike['permission'] = oscar;
                            report = _closure2_slot0;
                            mike['user'] = report;
                            entity = zulu.bind(tango)(mike);
 97:
                            return entity;
                        }
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.channel;
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike);
 92:
                    return entity;
                }
            };
            verify = sierra.bind(lima)(status, verify);
            _closure2_slot11 = verify;
            if(!(entity != control)) { _fun81571_ip = 3433; continue _fun81571 }
 683:
            if(!(entity != source)) { _fun81571_ip = 3433; continue _fun81571 }
 690:
            verify = new Array(0);
            status = target;
            if(!status) { _fun81571_ip = 703; continue _fun81571 }
 700:
            status = context;
 703:
            if(!status) { _fun81571_ip = 709; continue _fun81571 }
 706:
            status = tango;
 709:
            if(!status) { _fun81571_ip = 941; continue _fun81571 }
 715:
            sierra = verify.push;
            quebec = _closure1_slot13;
            lima = _closure1_slot0;
            equality = _closure1_slot3;
            status = 19;
            status = equality[status];
            status = lima.bind(oscar)(status);
            equality = status.UserProfileFormRow;
            lima = {};
            variable36 = sizing.id;
            status = golf.id;
            if(!(variable36 !== status)) { _fun81571_ip = 823; continue _fun81571 }
 766:
            variable38 = _closure1_slot0;
            variable39 = _closure1_slot3;
            status = 20;
            variable36 = variable39[status];
            variable36 = variable38.bind(oscar)(variable36);
            variable37 = variable36.intl;
            variable36 = variable37.string;
            status = variable39[status];
            status = variable38.bind(oscar)(status);
            status = status.t;
            status = status.r23NoK;
            status = variable36.bind(variable37)(status);
            _fun81571_ip = 878; continue _fun81571;
 823:
            variable39 = _closure1_slot0;
            variable40 = _closure1_slot3;
            variable36 = 20;
            variable37 = variable40[variable36];
            variable37 = variable39.bind(oscar)(variable37);
            variable38 = variable37.intl;
            variable37 = variable38.string;
            variable36 = variable40[variable36];
            variable36 = variable39.bind(oscar)(variable36);
            variable36 = variable36.t;
            variable36 = variable36.6C6PJy;
            status = variable37.bind(variable38)(variable36);
 878:
            lima['label'] = status;
            variable36 = _closure1_slot0;
            variable37 = _closure1_slot3;
            status = 21;
            status = variable37[status];
            status = variable36.bind(oscar)(status);
            status = status.GroupArrowDownIcon;
            lima['icon'] = status;
            status = function() { // Original name: onPress
                tango = _closure2_slot3;
                mike = {};
                entity = 'PRESS_REMOVE_FROM_STAGE';
                mike['action'] = entity;
                entity = undefined;
                mike = tango.bind(entity)(mike);
                oscar = _closure1_slot0;
                tango = _closure1_slot3;
                report = 22;
                report = tango[report];
                golf = oscar.bind(entity)(report);
                oscar = golf.moveUserToAudience;
                report = _closure2_slot0;
                zulu = _closure2_slot6;
                zulu = oscar.bind(golf)(report, zulu);
                zulu = _closure1_slot1;
                mike = 11;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.hideActionSheet;
                mike = mike.bind(zulu)();
                return entity;
            };
            lima['onPress'] = status;
            status = 'remove-from-stage';
            status = quebec.bind(oscar)(equality, lima, status);
            status = sierra.bind(verify)(status);
 941:
            if(!target) { _fun81571_ip = 1214; continue _fun81571 }
 947:
            if(!context) { _fun81571_ip = 1214; continue _fun81571 }
 953:
            if(tango) { _fun81571_ip = 1214; continue _fun81571 }
 959:
            context = _closure1_slot0;
            tango = _closure1_slot3;
            tango = tango[papa];
            tango = context.bind(oscar)(tango);
            tango = tango.RequestToSpeakStates;
            tango = tango.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            tango = sequence === tango;
            target = _closure1_slot0;
            sequence = _closure1_slot3;
            variable36 = 20;
            context = sequence[variable36];
            context = target.bind(oscar)(context);
            papa = context.intl;
            context = papa.string;
            sequence = sequence[variable36];
            sequence = target.bind(oscar)(sequence);
            sequence = sequence.t;
            if(tango) { _fun81571_ip = 1052; continue _fun81571 }
 1039:
            target = sequence.VUCWcH;
            status = context.bind(papa)(target);
            _fun81571_ip = 1063; continue _fun81571;
 1052:
            sequence = sequence.tHj7TU;
            status = context.bind(papa)(sequence);
 1063:
            sequence = verify.push;
            target = _closure1_slot13;
            lima = _closure1_slot0;
            equality = _closure1_slot3;
            context = 19;
            context = equality[context];
            context = lima.bind(oscar)(context);
            papa = context.UserProfileFormRow;
            context = {};
            sierra = 23;
            sierra = equality[sierra];
            sierra = lima.bind(oscar)(sierra);
            sierra = sierra.MicrophoneArrowRightIcon;
            context['icon'] = sierra;
            if(!record) { _fun81571_ip = 1177; continue _fun81571 }
 1125:
            quebec = _closure1_slot0;
            sierra = _closure1_slot3;
            lima = sierra[variable36];
            lima = quebec.bind(oscar)(lima);
            equality = lima.intl;
            lima = equality.string;
            sierra = sierra[variable36];
            sierra = quebec.bind(oscar)(sierra);
            sierra = sierra.t;
            sierra = sierra.8Joh+v;
            status = lima.bind(equality)(sierra);
 1177:
            context['label'] = status;
            context['disabled'] = tango;
            tango = function() { // Original name: onPress
                _fun81580: for(var _fun81580_ip = 0; ; ) switch(_fun81580_ip) {
 0:
                    tango = _closure2_slot3;
                    mike = {};
                    entity = 'PRESS_INVITE_TO_SPEAK';
                    mike['action'] = entity;
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    tango = _closure2_slot9;
                    oscar = _closure1_slot0;
                    golf = _closure1_slot3;
                    report = 22;
                    report = golf[report];
                    oscar = oscar.bind(entity)(report);
                    if(tango) { _fun81580_ip = 83; continue _fun81580 }
 56:
                    golf = oscar.inviteUserToStage;
                    report = _closure2_slot6;
                    tango = _closure2_slot0;
                    tango = tango.id;
                    tango = golf.bind(oscar)(report, tango);
                    _fun81580_ip = 101; continue _fun81580;
 83:
                    report = oscar.audienceAckRequestToSpeak;
                    tango = _closure2_slot6;
                    zulu = false;
                    zulu = report.bind(oscar)(tango, zulu);
 101:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot3;
                    mike = 11;
                    mike = tango[mike];
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.hideActionSheet;
                    mike = mike.bind(zulu)();
                    return entity;
                }
            };
            context['onPress'] = tango;
            tango = 'invite-to-speak';
            tango = target.bind(oscar)(papa, context, tango);
            tango = sequence.bind(verify)(tango);
 1214:
            tango = offset;
            if(!offset) { _fun81571_ip = 1223; continue _fun81571 }
 1220:
            tango = romeo;
 1223:
            if(!tango) { _fun81571_ip = 1442; continue _fun81571 }
 1229:
            sequence = verify.push;
            target = _closure1_slot13;
            status = _closure1_slot0;
            sierra = _closure1_slot3;
            tango = 19;
            tango = sierra[tango];
            tango = status.bind(oscar)(tango);
            papa = tango.UserProfileFormRow;
            context = {};
            tango = 20;
            lima = sierra[tango];
            lima = status.bind(oscar)(lima);
            equality = lima.intl;
            lima = equality.string;
            tango = sierra[tango];
            tango = status.bind(oscar)(tango);
            tango = tango.t;
            tango = tango.FAplmp;
            tango = lima.bind(equality)(tango);
            context['label'] = tango;
            tango = 24;
            tango = sierra[tango];
            tango = status.bind(oscar)(tango);
            tango = tango.FormArrow;
            context['hint'] = tango;
            tango = 25;
            tango = sierra[tango];
            tango = status.bind(oscar)(tango);
            lima = tango.Text;
            tango = {'variant': 'text-xs/normal', 'color': 'text-secondary'};
            whiskey = whiskey.name;
            tango['children'] = whiskey;
            tango = target.bind(oscar)(lima, tango);
            context['sublabel'] = tango;
            tango = 26;
            tango = sierra[tango];
            tango = status.bind(oscar)(tango);
            tango = tango.VoiceNormalIcon;
            context['icon'] = tango;
            tango = function() { // Original name: onPress
                tango = _closure2_slot3;
                zulu = {};
                entity = 'PRESS_MOVE_TO_CHANNEL';
                zulu['action'] = entity;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                report = _closure1_slot1;
                romeo = _closure1_slot3;
                tango = 11;
                tango = romeo[tango];
                golf = report.bind(entity)(tango);
                oscar = golf.openLazy;
                yankee = _closure1_slot0;
                zulu = 28;
                zulu = romeo[zulu];
                report = yankee.bind(entity)(zulu);
                zulu = 27;
                tango = romeo[zulu];
                zulu = romeo.paths;
                report = report.bind(entity)(tango, zulu);
                tango = {};
                zulu = _closure2_slot7;
                tango['guild'] = zulu;
                zulu = {};
                options = 20;
                verify = romeo[options];
                verify = yankee.bind(entity)(verify);
                offset = verify.intl;
                verify = offset.string;
                options = romeo[options];
                options = yankee.bind(entity)(options);
                options = options.t;
                options = options.r2pts7;
                options = verify.bind(offset)(options);
                zulu['title'] = options;
                tango['header'] = zulu;
                mike = _closure2_slot11;
                tango['channels'] = mike;
                mike = function(argFoo) { // Original name: onSelect
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 29;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.setChannel;
                    mike = _closure2_slot7;
                    zulu = mike.id;
                    entity = _closure2_slot0;
                    mike = entity.id;
                    entity = argFoo;
                    entity = entity.id;
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                };
                tango['onSelect'] = mike;
                mike = null;
                tango['selectedChannel'] = mike;
                kilo = 'ChannelPicker';
                foxtrot = 'stack';
                output = golf;
                sizing = report;
                backup = tango;
                mike = output[oscar](sizing, kilo, backup, foxtrot, romeo);
                return entity;
            };
            context['onPress'] = tango;
            tango = 'move-to-channel';
            tango = target.bind(oscar)(papa, context, tango);
            tango = sequence.bind(verify)(tango);
 1442:
            tango = report;
            if(tango) { _fun81571_ip = 1451; continue _fun81571 }
 1448:
            tango = zulu;
 1451:
            if(tango) { _fun81571_ip = 1457; continue _fun81571 }
 1454:
            tango = vacuum;
 1457:
            if(tango) { _fun81571_ip = 1463; continue _fun81571 }
 1460:
            tango = update;
 1463:
            if(!tango) { _fun81571_ip = 1479; continue _fun81571 }
 1466:
            update = sizing.isNonUserBot;
            update = update.bind(sizing)();
            tango = !update;
 1479:
            if(!tango) { _fun81571_ip = 1622; continue _fun81571 }
 1485:
            update = verify.push;
            context = _closure1_slot13;
            papa = _closure1_slot0;
            target = _closure1_slot3;
            tango = 19;
            tango = target[tango];
            tango = papa.bind(oscar)(tango);
            sequence = tango.UserProfileFormRow;
            vacuum = {};
            tango = 20;
            status = target[tango];
            status = papa.bind(oscar)(status);
            sierra = status.intl;
            status = sierra.string;
            tango = target[tango];
            tango = papa.bind(oscar)(tango);
            tango = tango.t;
            tango = tango.HxrBOT;
            tango = status.bind(sierra)(tango);
            vacuum['label'] = tango;
            tango = 30;
            tango = target[tango];
            tango = papa.bind(oscar)(tango);
            tango = tango.SettingsIcon;
            vacuum['icon'] = tango;
            tango = function() { // Original name: onPress
                zulu = _closure2_slot3;
                mike = {};
                entity = 'PRESS_MANAGE_USER';
                mike['action'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = _closure2_slot4;
                mike = mike.bind(entity)();
                report = _closure1_slot1;
                mike = _closure1_slot3;
                tango = 31;
                tango = mike[tango];
                report = report.bind(entity)(tango);
                tango = report.pushLazy;
                options = _closure1_slot0;
                zulu = 28;
                zulu = mike[zulu];
                options = options.bind(entity)(zulu);
                zulu = 32;
                zulu = mike[zulu];
                mike = mike.paths;
                zulu = options.bind(entity)(zulu, mike);
                mike = {};
                options = _closure2_slot0;
                options = options.id;
                mike['userId'] = options;
                golf = _closure2_slot7;
                golf = golf.id;
                mike['guildId'] = golf;
                golf = function() { // Original name: onClose
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 31;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.pop;
                    mike = mike.bind(zulu)();
                    mike = _closure2_slot2;
                    mike = mike.bind(entity)();
                    return entity;
                };
                mike['onClose'] = golf;
                oscar = function() { // Original name: onRemove
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 31;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.pop;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                mike['onRemove'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            vacuum['onPress'] = tango;
            tango = 'manage';
            tango = context.bind(oscar)(sequence, vacuum, tango);
            tango = update.bind(verify)(tango);
 1622:
            vacuum = control.hasFeature;
            tango = _closure1_slot10;
            update = tango.COMMUNITY;
            sequence = vacuum.bind(control)(update);
            update = control.hasFeature;
            tango = tango.GUILD_ONBOARDING_EVER_ENABLED;
            vacuum = update.bind(control)(tango);
            update = _closure1_slot0;
            control = _closure1_slot3;
            tango = 33;
            tango = control[tango];
            papa = update.bind(oscar)(tango);
            context = papa.hasFlag;
            update = source.flags;
            target = entity != update;
            tango = 0;
            control = 0;
            if(!target) { _fun81571_ip = 1705; continue _fun81571 }
 1702:
            control = update;
 1705:
            update = _closure1_slot12;
            update = update.BYPASSES_VERIFICATION;
            control = context.bind(papa)(control, update);
            update = !record;
            context = update;
            if(record) { _fun81571_ip = 1733; continue _fun81571 }
 1730:
            context = config;
 1733:
            if(!context) { _fun81571_ip = 1739; continue _fun81571 }
 1736:
            context = sequence;
 1739:
            if(!context) { _fun81571_ip = 1745; continue _fun81571 }
 1742:
            context = vacuum;
 1745:
            if(!context) { _fun81571_ip = 1751; continue _fun81571 }
 1748:
            context = control;
 1751:
            if(!context) { _fun81571_ip = 1896; continue _fun81571 }
 1757:
            papa = verify.push;
            sierra = _closure1_slot13;
            lima = _closure1_slot0;
            whiskey = _closure1_slot3;
            context = 19;
            context = whiskey[context];
            context = lima.bind(oscar)(context);
            status = context.UserProfileFormRow;
            target = {};
            context = 20;
            equality = whiskey[context];
            equality = lima.bind(oscar)(equality);
            quebec = equality.intl;
            equality = quebec.string;
            context = whiskey[context];
            context = lima.bind(oscar)(context);
            context = context.t;
            context = context.NbhSIy;
            context = equality.bind(quebec)(context);
            target['label'] = context;
            context = 34;
            context = whiskey[context];
            context = lima.bind(oscar)(context);
            context = context.StampIcon;
            target['icon'] = context;
            context = function() { // Original name: onPress
                _fun81586: for(var _fun81586_ip = 0; ; ) switch(_fun81586_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = {};
                    entity = 'PRESS_UNVERIFY_USER';
                    mike['action'] = entity;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    tango = _closure1_slot1;
                    offset = _closure1_slot3;
                    zulu = 29;
                    zulu = offset[zulu];
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.setMemberFlags;
                    zulu = _closure2_slot7;
                    tango = zulu.id;
                    zulu = _closure2_slot0;
                    zulu = zulu.id;
                    verify = _closure1_slot0;
                    options = 33;
                    options = offset[options];
                    offset = verify.bind(entity)(options);
                    verify = offset.setFlag;
                    golf = _closure2_slot8;
                    golf = golf.flags;
                    options = null;
                    yankee = options != golf;
                    options = 0;
                    if(!yankee) { _fun81586_ip = 118; continue _fun81586 }
 115:
                    options = golf;
 118:
                    mike = _closure1_slot12;
                    golf = mike.BYPASSES_VERIFICATION;
                    mike = false;
                    mike = verify.bind(offset)(options, golf, mike);
                    mike = report.bind(oscar)(tango, zulu, mike);
                    return entity;
                }
            };
            target['onPress'] = context;
            context = 'unverify';
            context = sierra.bind(oscar)(status, target, context);
            context = papa.bind(verify)(context);
 1896:
            if(record) { _fun81571_ip = 1902; continue _fun81571 }
 1899:
            update = config;
 1902:
            if(!update) { _fun81571_ip = 1908; continue _fun81571 }
 1905:
            update = sequence;
 1908:
            if(!update) { _fun81571_ip = 1914; continue _fun81571 }
 1911:
            update = vacuum;
 1914:
            if(!update) { _fun81571_ip = 1920; continue _fun81571 }
 1917:
            update = !control;
 1920:
            if(!update) { _fun81571_ip = 2063; continue _fun81571 }
 1926:
            control = verify.push;
            config = _closure1_slot13;
            record = _closure1_slot0;
            context = _closure1_slot3;
            update = 19;
            update = context[update];
            update = record.bind(oscar)(update);
            sequence = update.UserProfileFormRow;
            vacuum = {};
            update = 20;
            papa = context[update];
            papa = record.bind(oscar)(papa);
            target = papa.intl;
            papa = target.string;
            update = context[update];
            update = record.bind(oscar)(update);
            update = update.t;
            update = update.6QlTeH;
            update = papa.bind(target)(update);
            vacuum['label'] = update;
            update = 34;
            update = context[update];
            update = record.bind(oscar)(update);
            update = update.StampIcon;
            vacuum['icon'] = update;
            update = function() { // Original name: onPress
                _fun81587: for(var _fun81587_ip = 0; ; ) switch(_fun81587_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = {};
                    entity = 'PRESS_VERIFY_USER';
                    mike['action'] = entity;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    tango = _closure1_slot1;
                    offset = _closure1_slot3;
                    zulu = 29;
                    zulu = offset[zulu];
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.setMemberFlags;
                    zulu = _closure2_slot7;
                    tango = zulu.id;
                    zulu = _closure2_slot0;
                    zulu = zulu.id;
                    verify = _closure1_slot0;
                    options = 33;
                    options = offset[options];
                    offset = verify.bind(entity)(options);
                    verify = offset.setFlag;
                    golf = _closure2_slot8;
                    golf = golf.flags;
                    options = null;
                    yankee = options != golf;
                    options = 0;
                    if(!yankee) { _fun81587_ip = 118; continue _fun81587 }
 115:
                    options = golf;
 118:
                    mike = _closure1_slot12;
                    golf = mike.BYPASSES_VERIFICATION;
                    mike = true;
                    mike = verify.bind(offset)(options, golf, mike);
                    mike = report.bind(oscar)(tango, zulu, mike);
                    return entity;
                }
            };
            vacuum['onPress'] = update;
            update = 'verify';
            update = config.bind(oscar)(sequence, vacuum, update);
            update = control.bind(verify)(update);
 2063:
            if(!kilo) { _fun81571_ip = 2267; continue _fun81571 }
 2069:
            control = _closure1_slot0;
            sequence = _closure1_slot3;
            kilo = 35;
            kilo = sequence[kilo];
            update = control.bind(oscar)(kilo);
            kilo = update.isMemberCommunicationDisabled;
            kilo = kilo.bind(update)(source);
            _closure2_slot12 = kilo;
            update = verify.push;
            vacuum = _closure1_slot13;
            source = 19;
            source = sequence[source];
            source = control.bind(oscar)(source);
            control = source.UserProfileFormRow;
            source = {};
            context = _closure1_slot0;
            papa = _closure1_slot3;
            sequence = 20;
            config = papa[sequence];
            config = context.bind(oscar)(config);
            record = config.intl;
            config = record.string;
            sequence = papa[sequence];
            sequence = context.bind(oscar)(sequence);
            sequence = sequence.t;
            if(kilo) { _fun81571_ip = 2193; continue _fun81571 }
 2180:
            kilo = sequence.xpsADQ;
            kilo = config.bind(record)(kilo);
            _fun81571_ip = 2204; continue _fun81571;
 2193:
            sequence = sequence.qXtNtb;
            kilo = config.bind(record)(sequence);
 2204:
            source['label'] = kilo;
            sequence = _closure1_slot0;
            config = _closure1_slot3;
            kilo = 36;
            kilo = config[kilo];
            kilo = sequence.bind(oscar)(kilo);
            kilo = kilo.ClockWarningIcon;
            source['icon'] = kilo;
            kilo = function() { // Original name: onPress
                _fun81588: for(var _fun81588_ip = 0; ; ) switch(_fun81588_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = {};
                    tango = _closure2_slot12;
                    entity = 'PRESS_TIME_OUT_USER';
                    if(!tango) { _fun81588_ip = 28; continue _fun81588 }
 22:
                    entity = 'PRESS_REMOVE_TIME_OUT';
 28:
                    mike['action'] = entity;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    mike = _closure2_slot4;
                    mike = mike.bind(entity)();
                    mike = _closure2_slot12;
                    tango = _closure1_slot0;
                    oscar = _closure1_slot3;
                    zulu = 37;
                    zulu = oscar[zulu];
                    tango = tango.bind(entity)(zulu);
                    if(mike) { _fun81588_ip = 123; continue _fun81588 }
 77:
                    zulu = tango.openDisableCommunication;
                    mike = {};
                    oscar = _closure2_slot8;
                    golf = oscar.guildId;
                    mike['guildId'] = golf;
                    oscar = oscar.userId;
                    mike['userId'] = oscar;
                    oscar = _closure2_slot2;
                    mike['cancelButtonCallback'] = oscar;
                    mike = zulu.bind(tango)(mike);
                    _fun81588_ip = 167; continue _fun81588;
 123:
                    zulu = tango.openEnableCommunication;
                    mike = {};
                    oscar = _closure2_slot8;
                    golf = oscar.guildId;
                    mike['guildId'] = golf;
                    oscar = oscar.userId;
                    mike['userId'] = oscar;
                    report = _closure2_slot2;
                    mike['cancelButtonCallback'] = report;
                    mike = zulu.bind(tango)(mike);
 167:
                    return entity;
                }
            };
            source['onPress'] = kilo;
            kilo = 'time-out';
            kilo = vacuum.bind(oscar)(control, source, kilo);
            kilo = update.bind(verify)(kilo);
 2267:
            kilo = offset;
            if(!offset) { _fun81571_ip = 2276; continue _fun81571 }
 2273:
            kilo = result;
 2276:
            if(!kilo) { _fun81571_ip = 2282; continue _fun81571 }
 2279:
            kilo = echo;
 2282:
            if(!kilo) { _fun81571_ip = 2494; continue _fun81571 }
 2288:
            echo = verify.push;
            control = _closure1_slot13;
            update = _closure1_slot0;
            source = _closure1_slot3;
            kilo = 19;
            kilo = source[kilo];
            kilo = update.bind(oscar)(kilo);
            source = kilo.UserProfileFormRow;
            update = {};
            kilo = backup.mute;
            record = _closure1_slot0;
            context = _closure1_slot3;
            vacuum = 20;
            sequence = context[vacuum];
            sequence = record.bind(oscar)(sequence);
            config = sequence.intl;
            sequence = config.string;
            vacuum = context[vacuum];
            vacuum = record.bind(oscar)(vacuum);
            vacuum = vacuum.t;
            if(kilo) { _fun81571_ip = 2391; continue _fun81571 }
 2378:
            kilo = vacuum.e9e9UV;
            kilo = sequence.bind(config)(kilo);
            _fun81571_ip = 2402; continue _fun81571;
 2391:
            vacuum = vacuum.wG9K2t;
            kilo = sequence.bind(config)(vacuum);
 2402:
            update['label'] = kilo;
            kilo = backup.mute;
            sequence = _closure1_slot0;
            config = _closure1_slot3;
            if(kilo) { _fun81571_ip = 2443; continue _fun81571 }
 2423:
            kilo = 39;
            kilo = config[kilo];
            kilo = sequence.bind(oscar)(kilo);
            kilo = kilo.MicrophoneIcon;
            _fun81571_ip = 2461; continue _fun81571;
 2443:
            vacuum = 38;
            vacuum = config[vacuum];
            vacuum = sequence.bind(oscar)(vacuum);
            kilo = vacuum.MicrophoneSlashIcon;
 2461:
            update['icon'] = kilo;
            kilo = function() { // Original name: onPress
                tango = _closure2_slot3;
                zulu = {};
                entity = 'SERVER_MUTE';
                zulu['action'] = entity;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                tango = _closure1_slot1;
                report = _closure1_slot3;
                zulu = 29;
                zulu = report[zulu];
                oscar = tango.bind(entity)(zulu);
                report = oscar.setServerMute;
                zulu = _closure2_slot7;
                tango = zulu.id;
                zulu = _closure2_slot0;
                zulu = zulu.id;
                mike = _closure2_slot5;
                mike = mike.mute;
                mike = !mike;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            update['onPress'] = kilo;
            kilo = 'server-mute';
            kilo = control.bind(oscar)(source, update, kilo);
            kilo = echo.bind(verify)(kilo);
 2494:
            kilo = offset;
            if(!offset) { _fun81571_ip = 2503; continue _fun81571 }
 2500:
            kilo = result;
 2503:
            if(!kilo) { _fun81571_ip = 2509; continue _fun81571 }
 2506:
            kilo = output;
 2509:
            if(!kilo) { _fun81571_ip = 2719; continue _fun81571 }
 2515:
            kilo = verify.push;
            echo = _closure1_slot13;
            result = _closure1_slot0;
            update = _closure1_slot3;
            output = 19;
            output = update[output];
            output = result.bind(oscar)(output);
            result = output.UserProfileFormRow;
            output = {};
            update = backup.deaf;
            sequence = _closure1_slot0;
            config = _closure1_slot3;
            source = 20;
            control = config[source];
            control = sequence.bind(oscar)(control);
            vacuum = control.intl;
            control = vacuum.string;
            source = config[source];
            source = sequence.bind(oscar)(source);
            source = source.t;
            if(update) { _fun81571_ip = 2618; continue _fun81571 }
 2605:
            update = source.hMA2GB;
            update = control.bind(vacuum)(update);
            _fun81571_ip = 2629; continue _fun81571;
 2618:
            source = source.Gbw4Z2;
            update = control.bind(vacuum)(source);
 2629:
            output['label'] = update;
            backup = backup.deaf;
            source = _closure1_slot0;
            control = _closure1_slot3;
            if(backup) { _fun81571_ip = 2670; continue _fun81571 }
 2650:
            backup = 41;
            backup = control[backup];
            backup = source.bind(oscar)(backup);
            backup = backup.HeadphonesIcon;
            _fun81571_ip = 2688; continue _fun81571;
 2670:
            update = 40;
            update = control[update];
            update = source.bind(oscar)(update);
            backup = update.HeadphonesSlashIcon;
 2688:
            output['icon'] = backup;
            backup = function() { // Original name: onPress
                tango = _closure2_slot3;
                zulu = {};
                entity = 'DEAFEN';
                zulu['action'] = entity;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                tango = _closure1_slot1;
                report = _closure1_slot3;
                zulu = 29;
                zulu = report[zulu];
                oscar = tango.bind(entity)(zulu);
                report = oscar.setServerDeaf;
                zulu = _closure2_slot7;
                tango = zulu.id;
                zulu = _closure2_slot0;
                zulu = zulu.id;
                mike = _closure2_slot5;
                mike = mike.deaf;
                mike = !mike;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            output['onPress'] = backup;
            backup = 'deafen';
            backup = echo.bind(oscar)(result, output, backup);
            backup = kilo.bind(verify)(backup);
 2719:
            if(!offset) { _fun81571_ip = 2725; continue _fun81571 }
 2722:
            offset = romeo;
 2725:
            if(!offset) { _fun81571_ip = 2962; continue _fun81571 }
 2731:
            offset = verify.push;
            kilo = _closure1_slot13;
            backup = _closure1_slot0;
            output = _closure1_slot3;
            romeo = 19;
            romeo = output[romeo];
            romeo = backup.bind(oscar)(romeo);
            backup = romeo.UserProfileFormRow;
            romeo = {};
            sizing = sizing.id;
            golf = golf.id;
            if(!(sizing !== golf)) { _fun81571_ip = 2839; continue _fun81571 }
 2782:
            result = _closure1_slot0;
            echo = _closure1_slot3;
            golf = 20;
            sizing = echo[golf];
            sizing = result.bind(oscar)(sizing);
            output = sizing.intl;
            sizing = output.string;
            golf = echo[golf];
            golf = result.bind(oscar)(golf);
            golf = golf.t;
            golf = golf./jERiI;
            golf = sizing.bind(output)(golf);
            _fun81571_ip = 2894; continue _fun81571;
 2839:
            echo = _closure1_slot0;
            update = _closure1_slot3;
            sizing = 20;
            output = update[sizing];
            output = echo.bind(oscar)(output);
            result = output.intl;
            output = result.string;
            sizing = update[sizing];
            sizing = echo.bind(oscar)(sizing);
            sizing = sizing.t;
            sizing = sizing.6vrfgo;
            golf = output.bind(result)(sizing);
 2894:
            romeo['label'] = golf;
            sizing = _closure1_slot0;
            output = _closure1_slot3;
            golf = 42;
            golf = output[golf];
            golf = sizing.bind(oscar)(golf);
            golf = golf.PhoneHangUpIcon;
            romeo['icon'] = golf;
            golf = true;
            romeo['isDestructive'] = golf;
            golf = function() { // Original name: onPress
                tango = _closure2_slot3;
                zulu = {};
                entity = 'DISCONNECT';
                zulu['action'] = entity;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                tango = _closure1_slot1;
                report = _closure1_slot3;
                zulu = 29;
                zulu = report[zulu];
                oscar = tango.bind(entity)(zulu);
                report = oscar.setChannel;
                zulu = _closure2_slot7;
                tango = zulu.id;
                mike = _closure2_slot0;
                zulu = mike.id;
                mike = null;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            romeo['onPress'] = golf;
            golf = 'disconnect';
            golf = kilo.bind(oscar)(backup, romeo, golf);
            golf = offset.bind(verify)(golf);
 2962:
            if(!report) { _fun81571_ip = 3114; continue _fun81571 }
 2968:
            golf = verify.push;
            backup = _closure1_slot13;
            kilo = _closure1_slot0;
            sizing = _closure1_slot3;
            report = 19;
            report = sizing[report];
            report = kilo.bind(oscar)(report);
            romeo = report.UserProfileFormRow;
            offset = {};
            report = 20;
            output = sizing[report];
            output = kilo.bind(oscar)(output);
            result = output.intl;
            output = result.string;
            report = sizing[report];
            report = kilo.bind(oscar)(report);
            report = report.t;
            report = report.3glT6e;
            report = output.bind(result)(report);
            offset['label'] = report;
            report = 43;
            report = sizing[report];
            report = kilo.bind(oscar)(report);
            report = report.UserMinusIcon;
            offset['icon'] = report;
            report = true;
            offset['isDestructive'] = report;
            report = function() { // Original name: onPress
                zulu = _closure2_slot3;
                mike = {};
                entity = 'PRESS_KICK_USER';
                mike['action'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = _closure2_slot4;
                mike = mike.bind(entity)();
                zulu = _closure1_slot1;
                report = _closure1_slot3;
                mike = 44;
                mike = report[mike];
                zulu = zulu.bind(entity)(mike);
                mike = {};
                report = _closure2_slot7;
                report = report.id;
                mike['guildId'] = report;
                report = _closure2_slot0;
                report = report.id;
                mike['userId'] = report;
                tango = _closure2_slot2;
                mike['cancelButtonCallback'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            offset['onPress'] = report;
            report = 'kick';
            report = backup.bind(oscar)(romeo, offset, report);
            report = golf.bind(verify)(report);
 3114:
            if(!zulu) { _fun81571_ip = 3266; continue _fun81571 }
 3120:
            zulu = verify.push;
            offset = _closure1_slot13;
            backup = _closure1_slot0;
            kilo = _closure1_slot3;
            report = 19;
            report = kilo[report];
            report = backup.bind(oscar)(report);
            golf = report.UserProfileFormRow;
            report = {};
            romeo = 20;
            sizing = kilo[romeo];
            sizing = backup.bind(oscar)(sizing);
            output = sizing.intl;
            sizing = output.string;
            romeo = kilo[romeo];
            romeo = backup.bind(oscar)(romeo);
            romeo = romeo.t;
            romeo = romeo.5MBJ5O;
            romeo = sizing.bind(output)(romeo);
            report['label'] = romeo;
            romeo = 45;
            romeo = kilo[romeo];
            romeo = backup.bind(oscar)(romeo);
            romeo = romeo.HammerIcon;
            report['icon'] = romeo;
            romeo = true;
            report['isDestructive'] = romeo;
            mike = function() { // Original name: onPress
                zulu = _closure2_slot3;
                mike = {};
                entity = 'PRESS_BAN_USER';
                mike['action'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                zulu = _closure1_slot1;
                report = _closure1_slot3;
                mike = 46;
                mike = report[mike];
                zulu = zulu.bind(entity)(mike);
                mike = {};
                report = _closure2_slot7;
                report = report.id;
                mike['guildId'] = report;
                report = _closure2_slot0;
                report = report.id;
                mike['userId'] = report;
                tango = _closure2_slot2;
                mike['cancelButtonCallback'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            report['onPress'] = mike;
            mike = 'ban';
            mike = offset.bind(oscar)(golf, report, mike);
            mike = zulu.bind(verify)(mike);
 3266:
            zulu = verify.length;
            mike = null;
            if(!(tango !== zulu)) { _fun81571_ip = 3431; continue _fun81571 }
 3280:
            report = _closure1_slot13;
            tango = _closure1_slot1;
            offset = _closure1_slot3;
            golf = 19;
            zulu = offset[golf];
            tango = tango.bind(oscar)(zulu);
            zulu = {};
            options = _closure1_slot0;
            romeo = 20;
            backup = offset[romeo];
            backup = options.bind(oscar)(backup);
            kilo = backup.intl;
            backup = kilo.string;
            romeo = offset[romeo];
            romeo = options.bind(oscar)(romeo);
            romeo = romeo.t;
            romeo = romeo.EApw/f;
            romeo = backup.bind(kilo)(romeo);
            zulu['title'] = romeo;
            romeo = new Array(2);
            romeo[0] = foxtrot;
            foxtrot = yankee.cardContainer;
            romeo[1] = foxtrot;
            zulu['style'] = romeo;
            yankee = yankee.cardTitle;
            zulu['titleStyle'] = yankee;
            golf = offset[golf];
            golf = options.bind(oscar)(golf);
            options = golf.UserProfileCardRows;
            golf = {};
            golf['children'] = verify;
            golf = report.bind(oscar)(options, golf);
            zulu['children'] = golf;
            mike = report.bind(oscar)(tango, zulu);
 3431:
            return mike;
 3433:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();