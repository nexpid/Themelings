// app/modules/user_profile/native/UserProfileVoiceSettings.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: UserVoiceSettings
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            oscar = mike.user;
            var _closure2_slot0 = oscar;
            backup = mike.channel;
            var _closure2_slot1 = backup;
            foxtrot = mike.style;
            mike = _closure1_slot11;
            report = undefined;
            yankee = mike.bind(report)();
            romeo = _closure1_slot0;
            update = _closure1_slot2;
            mike = 9;
            mike = update[mike];
            zulu = romeo.bind(report)(mike);
            mike = zulu.useUserProfileAnalyticsContext;
            mike = mike.bind(zulu)();
            mike = mike.trackUserProfileAction;
            var _closure2_slot2 = mike;
            mike = 10;
            zulu = update[mike];
            verify = romeo.bind(report)(zulu);
            golf = verify.useStateFromStoresObject;
            zulu = _closure1_slot5;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                entity = {};
                oscar = _closure1_slot5;
                report = oscar.getLocalVolume;
                zulu = _closure2_slot0;
                tango = zulu.id;
                tango = report.bind(oscar)(tango);
                entity['localVolume'] = tango;
                oscar = _closure1_slot5;
                report = oscar.isLocalMute;
                tango = zulu.id;
                tango = report.bind(oscar)(tango);
                entity['isLocalMute'] = tango;
                oscar = _closure1_slot5;
                report = oscar.isLocalVideoDisabled;
                tango = zulu.id;
                tango = report.bind(oscar)(tango);
                entity['isLocalVideoDisabled'] = tango;
                report = _closure1_slot5;
                tango = report.isLocalVideoAutoDisabled;
                zulu = zulu.id;
                zulu = tango.bind(report)(zulu);
                entity['isLocalVideoAutoDisabled'] = zulu;
                zulu = _closure1_slot5;
                mike = zulu.supportsDisableLocalVideo;
                mike = mike.bind(zulu)();
                entity['supportsDisableLocalVideo'] = mike;
                return entity;
            };
            tango = golf.bind(verify)(tango, zulu);
            verify = tango.localVolume;
            golf = tango.isLocalMute;
            kilo = tango.isLocalVideoDisabled;
            var _closure2_slot3 = kilo;
            zulu = tango.isLocalVideoAutoDisabled;
            var _closure2_slot4 = zulu;
            tango = tango.supportsDisableLocalVideo;
            offset = update[mike];
            result = romeo.bind(report)(offset);
            output = result.useStateFromStores;
            offset = _closure1_slot6;
            sizing = new Array(1);
            sizing[0] = offset;
            offset = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = zulu.isPrivate;
                    entity = entity.bind(zulu)();
                    if(entity) { _fun00004_ip = 53; continue _fun00003 }
 20:
                    report = _closure1_slot6;
                    tango = report.can;
                    zulu = _closure1_slot8;
                    zulu = zulu.SPEAK;
                    mike = _closure2_slot1;
                    entity = tango.bind(report)(zulu, mike);
 53:
                    return entity;
                }
            };
            offset = output.bind(result)(sizing, offset);
            output = _closure1_slot1;
            result = 11;
            sizing = update[result];
            echo = output.bind(report)(sizing);
            sizing = oscar.id;
            oscar = backup.id;
            sizing = echo.bind(report)(sizing, oscar);
            mike = update[mike];
            source = romeo.bind(report)(mike);
            echo = source.useStateFromStores;
            mike = _closure1_slot4;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                zulu = _closure1_slot4;
                mike = zulu.isLocalSoundboardMuted;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = echo.bind(source)(oscar, mike);
            mike = 12;
            mike = update[mike];
            echo = romeo.bind(report)(mike);
            romeo = echo.useIsSecureFramesUIEnabled;
            mike = {};
            source = backup.id;
            mike['channelId'] = source;
            source = 'SimpleUserProfileVoiceSettings';
            mike['location'] = source;
            mike = romeo.bind(echo)(mike);
            echo = _closure1_slot9;
            romeo = 13;
            romeo = update[romeo];
            output = output.bind(report)(romeo);
            romeo = {};
            update = yankee.volumeSlider;
            romeo['style'] = update;
            romeo['value'] = verify;
            verify = function(argFoo) { // Original name: onValueChange
                tango = _closure2_slot2;
                zulu = {};
                entity = 'SET_VOLUME';
                zulu['action'] = entity;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 14;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.setLocalVolume;
                mike = _closure2_slot0;
                zulu = mike.id;
                mike = argFoo;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            romeo['onValueChange'] = verify;
            verify = 'set-volume';
            romeo = echo.bind(report)(output, romeo, verify);
            verify = new Array(1);
            verify[0] = romeo;
            offset = !offset;
            if(offset) { _fun00002_ip = 436; continue _fun00001 }
 387:
            romeo = backup.isGuildStageVoice;
            romeo = romeo.bind(backup)();
            if(!romeo) { _fun00002_ip = 433; continue _fun00001 }
 400:
            output = _closure1_slot0;
            backup = _closure1_slot2;
            backup = backup[result];
            backup = output.bind(report)(backup);
            backup = backup.RequestToSpeakStates;
            backup = backup.ON_STAGE;
            romeo = sizing !== backup;
 433:
            offset = romeo;
 436:
            if(offset) { _fun00002_ip = 634; continue _fun00001 }
 442:
            offset = verify.push;
            sizing = _closure1_slot9;
            backup = _closure1_slot0;
            output = _closure1_slot2;
            romeo = 15;
            romeo = output[romeo];
            romeo = backup.bind(report)(romeo);
            backup = romeo.UserProfileFormRow;
            romeo = {};
            result = _closure1_slot0;
            source = _closure1_slot2;
            output = 16;
            echo = source[output];
            echo = result.bind(report)(echo);
            update = echo.intl;
            echo = update.string;
            output = source[output];
            output = result.bind(report)(output);
            result = output.t;
            if(golf) { _fun00002_ip = 539; continue _fun00001 }
 526:
            output = result.sWmtIy;
            output = echo.bind(update)(output);
            _fun00002_ip = 550; continue _fun00001;
 539:
            result = result.NHJxcn;
            output = echo.bind(update)(result);
 550:
            romeo['label'] = output;
            result = _closure1_slot0;
            echo = _closure1_slot2;
            if(golf) { _fun00002_ip = 585; continue _fun00001 }
 565:
            golf = 18;
            golf = echo[golf];
            golf = result.bind(report)(golf);
            golf = golf.MicrophoneIcon;
            _fun00002_ip = 603; continue _fun00001;
 585:
            output = 17;
            output = echo[output];
            output = result.bind(report)(output);
            golf = output.MicrophoneSlashIcon;
 603:
            romeo['icon'] = golf;
            golf = function() { // Original name: onPress
                tango = _closure2_slot2;
                zulu = {};
                entity = 'MUTE';
                zulu['action'] = entity;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 14;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.toggleLocalMute;
                mike = _closure2_slot0;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            romeo['onPress'] = golf;
            golf = 'mute';
            golf = sizing.bind(report)(backup, romeo, golf);
            golf = offset.bind(verify)(golf);
 634:
            golf = verify.push;
            output = _closure1_slot9;
            backup = _closure1_slot0;
            romeo = _closure1_slot2;
            offset = 15;
            romeo = romeo[offset];
            romeo = backup.bind(report)(romeo);
            sizing = romeo.UserProfileFormRow;
            backup = {};
            echo = _closure1_slot0;
            result = _closure1_slot2;
            romeo = 16;
            update = result[romeo];
            update = echo.bind(report)(update);
            source = update.intl;
            update = source.string;
            result = result[romeo];
            result = echo.bind(report)(result);
            echo = result.t;
            if(oscar) { _fun00002_ip = 731; continue _fun00001 }
 718:
            result = echo.LxhEuL;
            result = update.bind(source)(result);
            _fun00002_ip = 742; continue _fun00001;
 731:
            echo = echo.639hQU;
            result = update.bind(source)(echo);
 742:
            backup['label'] = result;
            echo = _closure1_slot0;
            update = _closure1_slot2;
            if(oscar) { _fun00002_ip = 777; continue _fun00001 }
 757:
            oscar = 20;
            oscar = update[oscar];
            oscar = echo.bind(report)(oscar);
            oscar = oscar.SoundboardIcon;
            _fun00002_ip = 795; continue _fun00001;
 777:
            result = 19;
            result = update[result];
            result = echo.bind(report)(result);
            oscar = result.SoundboardSlashIcon;
 795:
            backup['icon'] = oscar;
            oscar = function() { // Original name: onPress
                tango = _closure2_slot2;
                zulu = {};
                entity = 'MUTE_SOUNDBOARD';
                zulu['action'] = entity;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 14;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.toggleLocalSoundboardMute;
                mike = _closure2_slot0;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            backup['onPress'] = oscar;
            oscar = 'mute-soundboard';
            oscar = output.bind(report)(sizing, backup, oscar);
            oscar = golf.bind(verify)(oscar);
            if(!tango) { _fun00002_ip = 1214; continue _fun00001 }
 834:
            tango = verify.push;
            backup = _closure1_slot9;
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[offset];
            oscar = golf.bind(report)(oscar);
            golf = oscar.UserProfileFormRow;
            oscar = {};
            output = _closure1_slot0;
            sizing = _closure1_slot2;
            result = sizing[romeo];
            result = output.bind(report)(result);
            echo = result.intl;
            result = echo.string;
            sizing = sizing[romeo];
            sizing = output.bind(report)(sizing);
            output = sizing.t;
            if(kilo) { _fun00002_ip = 925; continue _fun00001 }
 912:
            sizing = output.4MMsWF;
            sizing = result.bind(echo)(sizing);
            _fun00002_ip = 936; continue _fun00001;
 925:
            output = output.xc+Ps7;
            sizing = result.bind(echo)(output);
 936:
            oscar['label'] = sizing;
            output = _closure1_slot0;
            result = _closure1_slot2;
            if(kilo) { _fun00002_ip = 971; continue _fun00001 }
 951:
            kilo = 22;
            kilo = result[kilo];
            kilo = output.bind(report)(kilo);
            kilo = kilo.VideoIcon;
            _fun00002_ip = 989; continue _fun00001;
 971:
            sizing = 21;
            sizing = result[sizing];
            sizing = output.bind(report)(sizing);
            kilo = sizing.VideoSlashIcon;
 989:
            oscar['icon'] = kilo;
            if(!zulu) { _fun00002_ip = 1180; continue _fun00001 }
 999:
            output = _closure1_slot10;
            sizing = _closure1_slot3;
            kilo = {};
            result = yankee.disableVideoSublabel;
            kilo['style'] = result;
            update = _closure1_slot9;
            config = _closure1_slot0;
            control = _closure1_slot2;
            result = 23;
            result = control[result];
            result = config.bind(report)(result);
            echo = result.CircleWarningIcon;
            result = {'size': 'xxs', 'color': 'text-warning'};
            echo = update.bind(report)(echo, result);
            result = new Array(2);
            result[0] = echo;
            source = _closure1_slot9;
            echo = 24;
            echo = control[echo];
            echo = config.bind(report)(echo);
            update = echo.Text;
            echo = {'variant': 'text-xs/medium', 'color': 'text-warning'};
            vacuum = control[romeo];
            vacuum = config.bind(report)(vacuum);
            sequence = vacuum.intl;
            vacuum = sequence.string;
            control = control[romeo];
            control = config.bind(report)(control);
            control = control.t;
            control = control.m2Hyj4;
            control = vacuum.bind(sequence)(control);
            echo['children'] = control;
            echo = source.bind(report)(update, echo);
            result[1] = echo;
            kilo['children'] = result;
            zulu = output.bind(report)(sizing, kilo);
 1180:
            oscar['sublabel'] = zulu;
            zulu = function() { // Original name: onPress
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = _closure2_slot2;
                    mike = {};
                    entity = 'DISABLE_VIDEO';
                    mike['action'] = entity;
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    tango = _closure2_slot4;
                    if(tango) { _fun00006_ip = 102; continue _fun00005 }
 34:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 14;
                    tango = oscar[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.setDisableLocalVideo;
                    tango = _closure2_slot0;
                    tango = tango.id;
                    zulu = _closure2_slot3;
                    golf = _closure1_slot7;
                    if(zulu) { _fun00006_ip = 88; continue _fun00005 }
 80:
                    zulu = golf.DISABLED;
                    _fun00006_ip = 94; continue _fun00005;
 88:
                    zulu = golf.MANUAL_ENABLED;
 94:
                    zulu = report.bind(oscar)(tango, zulu);
                    _fun00006_ip = 142; continue _fun00005;
 102:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 25;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.confirmVideoUnstableConnection;
                    mike = function() {
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        mike = 14;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = tango.setDisableLocalVideo;
                        mike = _closure2_slot0;
                        mike = mike.id;
                        entity = _closure1_slot7;
                        entity = entity.MANUAL_ENABLED;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
 142:
                    return entity;
                }
            };
            oscar['onPress'] = zulu;
            zulu = 'disable-video';
            zulu = backup.bind(report)(golf, oscar, zulu);
            zulu = tango.bind(verify)(zulu);
 1214:
            if(!mike) { _fun00002_ip = 1376; continue _fun00001 }
 1220:
            mike = verify.push;
            oscar = _closure1_slot9;
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            zulu = kilo[offset];
            zulu = backup.bind(report)(zulu);
            tango = zulu.UserProfileFormRow;
            zulu = {};
            golf = kilo[romeo];
            golf = backup.bind(report)(golf);
            output = golf.intl;
            sizing = output.string;
            golf = kilo[romeo];
            golf = backup.bind(report)(golf);
            golf = golf.t;
            golf = golf.8ErYvb;
            golf = sizing.bind(output)(golf);
            zulu['label'] = golf;
            golf = 26;
            golf = kilo[golf];
            golf = backup.bind(report)(golf);
            golf = golf.ShieldLockIcon;
            zulu['icon'] = golf;
            golf = 27;
            golf = kilo[golf];
            golf = backup.bind(report)(golf);
            golf = golf.FormArrow;
            zulu['hint'] = golf;
            entity = function() { // Original name: onPress
                tango = _closure2_slot2;
                zulu = {};
                entity = 'VIEW_SECURE_FRAMES_VERIFICATION_CODE';
                zulu['action'] = entity;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 28;
                zulu = report[zulu];
                oscar = tango.bind(entity)(zulu);
                zulu = oscar.hideActionSheet;
                zulu = zulu.bind(oscar)();
                zulu = 29;
                zulu = report[zulu];
                oscar = tango.bind(entity)(zulu);
                report = oscar.openSecureFramesUserVerificationModal;
                zulu = _closure2_slot0;
                tango = zulu.id;
                mike = _closure2_slot1;
                zulu = mike.id;
                mike = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 30;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.validateSecureFramesKeyConsistent;
                    entity = {};
                    report = _closure2_slot0;
                    report = report.id;
                    entity['userId'] = report;
                    tango = _closure2_slot1;
                    report = tango.id;
                    entity['channelId'] = report;
                    tango = tango.guild_id;
                    entity['guildId'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            zulu['onPress'] = entity;
            entity = 'view-secure-frames-verification-code';
            entity = oscar.bind(report)(tango, zulu, entity);
            entity = mike.bind(verify)(entity);
 1376:
            zulu = verify.length;
            mike = 0;
            entity = null;
            if(!(mike !== zulu)) { _fun00002_ip = 1541; continue _fun00001 }
 1392:
            tango = _closure1_slot9;
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = oscar[offset];
            zulu = zulu.bind(report)(mike);
            mike = {};
            backup = yankee.card;
            golf = new Array(2);
            golf[0] = backup;
            golf[1] = foxtrot;
            mike['style'] = golf;
            golf = _closure1_slot0;
            foxtrot = oscar[romeo];
            foxtrot = golf.bind(report)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.string;
            romeo = oscar[romeo];
            romeo = golf.bind(report)(romeo);
            romeo = romeo.t;
            romeo = romeo.NiTd0d;
            romeo = foxtrot.bind(backup)(romeo);
            mike['title'] = romeo;
            yankee = yankee.cardTitle;
            mike['titleStyle'] = yankee;
            options = _closure1_slot9;
            oscar = oscar[offset];
            oscar = golf.bind(report)(oscar);
            golf = oscar.UserProfileCardRows;
            oscar = {};
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1541:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: CurrentUserVoiceSettings
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            entity = mike.user;
            golf = mike.channel;
            var _closure2_slot0 = golf;
            options = mike.style;
            mike = _closure1_slot11;
            report = undefined;
            oscar = mike.bind(report)();
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 9;
            mike = zulu[mike];
            offset = tango.bind(report)(mike);
            mike = offset.useUserProfileAnalyticsContext;
            mike = mike.bind(offset)();
            mike = mike.trackUserProfileAction;
            var _closure2_slot1 = mike;
            mike = 10;
            offset = zulu[mike];
            foxtrot = tango.bind(report)(offset);
            romeo = foxtrot.useStateFromStores;
            offset = _closure1_slot5;
            yankee = new Array(1);
            yankee[0] = offset;
            offset = function() {
                mike = _closure1_slot5;
                entity = mike.isSelfMute;
                entity = entity.bind(mike)();
                return entity;
            };
            foxtrot = romeo.bind(foxtrot)(yankee, offset);
            mike = zulu[mike];
            yankee = tango.bind(report)(mike);
            offset = yankee.useStateFromStores;
            mike = _closure1_slot6;
            tango = new Array(1);
            tango[0] = mike;
            mike = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = zulu.isPrivate;
                    entity = entity.bind(zulu)();
                    if(entity) { _fun00010_ip = 53; continue _fun00009 }
 20:
                    report = _closure1_slot6;
                    tango = report.can;
                    zulu = _closure1_slot8;
                    zulu = zulu.SPEAK;
                    mike = _closure2_slot0;
                    entity = tango.bind(report)(zulu, mike);
 53:
                    return entity;
                }
            };
            mike = offset.bind(yankee)(tango, mike);
            tango = _closure1_slot1;
            offset = 11;
            zulu = zulu[offset];
            tango = tango.bind(report)(zulu);
            zulu = entity.id;
            entity = golf.id;
            zulu = tango.bind(report)(zulu, entity);
            entity = null;
            if(!mike) { _fun00008_ip = 572; continue _fun00007 }
 198:
            mike = golf.isGuildStageVoice;
            mike = mike.bind(golf)();
            if(!mike) { _fun00008_ip = 249; continue _fun00007 }
 211:
            golf = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[offset];
            mike = golf.bind(report)(mike);
            mike = mike.RequestToSpeakStates;
            mike = mike.ON_STAGE;
            entity = null;
            if(!(zulu === mike)) { _fun00008_ip = 572; continue _fun00007 }
 249:
            tango = _closure1_slot9;
            zulu = _closure1_slot1;
            kilo = _closure1_slot2;
            offset = 15;
            mike = kilo[offset];
            zulu = zulu.bind(report)(mike);
            mike = {};
            yankee = oscar.card;
            golf = new Array(2);
            golf[0] = yankee;
            golf[1] = options;
            mike['style'] = golf;
            yankee = _closure1_slot0;
            echo = 16;
            golf = kilo[echo];
            golf = yankee.bind(report)(golf);
            romeo = golf.intl;
            options = romeo.string;
            golf = kilo[echo];
            golf = yankee.bind(report)(golf);
            golf = golf.t;
            golf = golf.NiTd0d;
            golf = options.bind(romeo)(golf);
            mike['title'] = golf;
            oscar = oscar.cardTitle;
            mike['titleStyle'] = oscar;
            options = _closure1_slot9;
            oscar = kilo[offset];
            oscar = yankee.bind(report)(oscar);
            golf = oscar.UserProfileCardRows;
            oscar = {};
            romeo = _closure1_slot9;
            offset = kilo[offset];
            offset = yankee.bind(report)(offset);
            yankee = offset.UserProfileFormRow;
            offset = {};
            sizing = _closure1_slot0;
            kilo = _closure1_slot2;
            output = kilo[echo];
            output = sizing.bind(report)(output);
            result = output.intl;
            output = result.string;
            kilo = kilo[echo];
            kilo = sizing.bind(report)(kilo);
            sizing = kilo.t;
            if(foxtrot) { _fun00008_ip = 462; continue _fun00007 }
 449:
            kilo = sizing.sWmtIy;
            kilo = output.bind(result)(kilo);
            _fun00008_ip = 473; continue _fun00007;
 462:
            sizing = sizing.NHJxcn;
            kilo = output.bind(result)(sizing);
 473:
            offset['label'] = kilo;
            kilo = _closure1_slot0;
            sizing = _closure1_slot2;
            if(foxtrot) { _fun00008_ip = 508; continue _fun00007 }
 488:
            foxtrot = 18;
            foxtrot = sizing[foxtrot];
            foxtrot = kilo.bind(report)(foxtrot);
            foxtrot = foxtrot.MicrophoneIcon;
            _fun00008_ip = 526; continue _fun00007;
 508:
            backup = 17;
            backup = sizing[backup];
            backup = kilo.bind(report)(backup);
            foxtrot = backup.MicrophoneSlashIcon;
 526:
            offset['icon'] = foxtrot;
            verify = function() { // Original name: onPress
                zulu = _closure2_slot1;
                mike = {};
                entity = 'MUTE';
                mike['action'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 14;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.toggleSelfMute;
                mike = mike.bind(zulu)();
                return entity;
            };
            offset['onPress'] = verify;
            verify = 'mute';
            verify = romeo.bind(report)(yankee, offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 572:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    offset = 0;
    options = oscar[offset];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VideoToggleState;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot8 = tango;
    tango = 7;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot9 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['paddingBottom'] = offset;
    tango['card'] = verify;
    verify = {};
    verify['marginBottom'] = offset;
    tango['cardTitle'] = verify;
    verify = {};
    offset = 20;
    verify['paddingVertical'] = offset;
    tango['volumeSlider'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    tango['disableVideoSublabel'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot11 = tango;
    tango = 31;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/native/UserProfileVoiceSettings.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: UserProfileVoiceSettings
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            entity = mike.user;
            golf = mike.currentUser;
            oscar = mike.channel;
            mike = mike.style;
            tango = entity.id;
            zulu = golf.id;
            if(!(tango !== zulu)) { _fun00012_ip = 73; continue _fun00011 }
 38:
            report = _closure1_slot9;
            tango = _closure1_slot12;
            zulu = {};
            zulu['user'] = entity;
            zulu['channel'] = oscar;
            zulu['style'] = mike;
            entity = undefined;
            entity = report.bind(entity)(tango, zulu);
            _fun00012_ip = 106; continue _fun00011;
 73:
            report = _closure1_slot9;
            tango = _closure1_slot13;
            zulu = {};
            zulu['user'] = golf;
            zulu['channel'] = oscar;
            zulu['style'] = mike;
            mike = undefined;
            entity = report.bind(mike)(tango, zulu);
 106:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();