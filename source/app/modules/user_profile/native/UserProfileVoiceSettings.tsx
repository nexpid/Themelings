// app/modules/user_profile/native/UserProfileVoiceSettings.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: UserVoiceSettings
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            oscard = michal.user;
            var _closure2_slot0 = oscard;
            backup = michal.channel;
            var _closure2_slot1 = backup;
            foxtra = michal.style;
            michal = _closure1_slot11;
            report = undefined;
            yankee = michal.bind(report)();
            romeon = _closure1_slot0;
            update = _closure1_slot2;
            michal = 9;
            michal = update[michal];
            zuuluu = romeon.bind(report)(michal);
            michal = zuuluu.useUserProfileAnalyticsContext;
            michal = michal.bind(zuuluu)();
            michal = michal.trackUserProfileAction;
            var _closure2_slot2 = michal;
            michal = 10;
            zuuluu = update[michal];
            verify = romeon.bind(report)(zuuluu);
            golfie = verify.useStateFromStoresObject;
            zuuluu = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                entity = {};
                oscard = _closure1_slot5;
                report = oscard.getLocalVolume;
                zuuluu = _closure2_slot0;
                tangon = zuuluu.id;
                tangon = report.bind(oscard)(tangon);
                entity['localVolume'] = tangon;
                oscard = _closure1_slot5;
                report = oscard.isLocalMute;
                tangon = zuuluu.id;
                tangon = report.bind(oscard)(tangon);
                entity['isLocalMute'] = tangon;
                oscard = _closure1_slot5;
                report = oscard.isLocalVideoDisabled;
                tangon = zuuluu.id;
                tangon = report.bind(oscard)(tangon);
                entity['isLocalVideoDisabled'] = tangon;
                report = _closure1_slot5;
                tangon = report.isLocalVideoAutoDisabled;
                zuuluu = zuuluu.id;
                zuuluu = tangon.bind(report)(zuuluu);
                entity['isLocalVideoAutoDisabled'] = zuuluu;
                zuuluu = _closure1_slot5;
                michal = zuuluu.supportsDisableLocalVideo;
                michal = michal.bind(zuuluu)();
                entity['supportsDisableLocalVideo'] = michal;
                return entity;
            };
            tangon = golfie.bind(verify)(tangon, zuuluu);
            verify = tangon.localVolume;
            golfie = tangon.isLocalMute;
            kiloes = tangon.isLocalVideoDisabled;
            var _closure2_slot3 = kiloes;
            zuuluu = tangon.isLocalVideoAutoDisabled;
            var _closure2_slot4 = zuuluu;
            tangon = tangon.supportsDisableLocalVideo;
            offset = update[michal];
            result = romeon.bind(report)(offset);
            output = result.useStateFromStores;
            offset = _closure1_slot6;
            sizing = new Array(1);
            sizing[0] = offset;
            offset = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = zuuluu.isPrivate;
                    entity = entity.bind(zuuluu)();
                    if(entity) { _fun00004_ip = 53; continue _fun00003 }
 20:
                    report = _closure1_slot6;
                    tangon = report.can;
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.SPEAK;
                    michal = _closure2_slot1;
                    entity = tangon.bind(report)(zuuluu, michal);
 53:
                    return entity;
                }
            };
            offset = output.bind(result)(sizing, offset);
            output = _closure1_slot1;
            result = 11;
            sizing = update[result];
            echoed = output.bind(report)(sizing);
            sizing = oscard.id;
            oscard = backup.id;
            sizing = echoed.bind(report)(sizing, oscard);
            michal = update[michal];
            source = romeon.bind(report)(michal);
            echoed = source.useStateFromStores;
            michal = _closure1_slot4;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.isLocalSoundboardMuted;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = echoed.bind(source)(oscard, michal);
            michal = 12;
            michal = update[michal];
            echoed = romeon.bind(report)(michal);
            romeon = echoed.useIsSecureFramesUIEnabled;
            michal = {};
            source = backup.id;
            michal['channelId'] = source;
            michal = romeon.bind(echoed)(michal);
            echoed = _closure1_slot9;
            romeon = 13;
            romeon = update[romeon];
            output = output.bind(report)(romeon);
            romeon = {};
            update = yankee.volumeSlider;
            romeon['style'] = update;
            romeon['value'] = verify;
            verify = function(argFoo) { // Original name: onValueChange
                tangon = _closure2_slot2;
                zuuluu = {};
                entity = 'SET_VOLUME';
                zuuluu['action'] = entity;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 14;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.setLocalVolume;
                michal = _closure2_slot0;
                zuuluu = michal.id;
                michal = argFoo;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            romeon['onValueChange'] = verify;
            verify = 'set-volume';
            romeon = echoed.bind(report)(output, romeon, verify);
            verify = new Array(1);
            verify[0] = romeon;
            offset = !offset;
            if(offset) { _fun00002_ip = 426; continue _fun00001 }
 377:
            romeon = backup.isGuildStageVoice;
            romeon = romeon.bind(backup)();
            if(!romeon) { _fun00002_ip = 423; continue _fun00001 }
 390:
            output = _closure1_slot0;
            backup = _closure1_slot2;
            backup = backup[result];
            backup = output.bind(report)(backup);
            backup = backup.RequestToSpeakStates;
            backup = backup.ON_STAGE;
            romeon = sizing !== backup;
 423:
            offset = romeon;
 426:
            if(offset) { _fun00002_ip = 624; continue _fun00001 }
 432:
            offset = verify.push;
            sizing = _closure1_slot9;
            backup = _closure1_slot0;
            output = _closure1_slot2;
            romeon = 15;
            romeon = output[romeon];
            romeon = backup.bind(report)(romeon);
            backup = romeon.UserProfileFormRow;
            romeon = {};
            result = _closure1_slot0;
            source = _closure1_slot2;
            output = 16;
            echoed = source[output];
            echoed = result.bind(report)(echoed);
            update = echoed.intl;
            echoed = update.string;
            output = source[output];
            output = result.bind(report)(output);
            result = output.t;
            if(golfie) { _fun00002_ip = 529; continue _fun00001 }
 516:
            output = result.sWmtIy;
            output = echoed.bind(update)(output);
            _fun00002_ip = 540; continue _fun00001;
 529:
            result = result.NHJxcn;
            output = echoed.bind(update)(result);
 540:
            romeon['label'] = output;
            result = _closure1_slot0;
            echoed = _closure1_slot2;
            if(golfie) { _fun00002_ip = 575; continue _fun00001 }
 555:
            golfie = 18;
            golfie = echoed[golfie];
            golfie = result.bind(report)(golfie);
            golfie = golfie.MicrophoneIcon;
            _fun00002_ip = 593; continue _fun00001;
 575:
            output = 17;
            output = echoed[output];
            output = result.bind(report)(output);
            golfie = output.MicrophoneSlashIcon;
 593:
            romeon['icon'] = golfie;
            golfie = function() { // Original name: onPress
                tangon = _closure2_slot2;
                zuuluu = {};
                entity = 'MUTE';
                zuuluu['action'] = entity;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 14;
                zuuluu = report[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.toggleLocalMute;
                michal = _closure2_slot0;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            romeon['onPress'] = golfie;
            golfie = 'mute';
            golfie = sizing.bind(report)(backup, romeon, golfie);
            golfie = offset.bind(verify)(golfie);
 624:
            golfie = verify.push;
            output = _closure1_slot9;
            backup = _closure1_slot0;
            romeon = _closure1_slot2;
            offset = 15;
            romeon = romeon[offset];
            romeon = backup.bind(report)(romeon);
            sizing = romeon.UserProfileFormRow;
            backup = {};
            echoed = _closure1_slot0;
            result = _closure1_slot2;
            romeon = 16;
            update = result[romeon];
            update = echoed.bind(report)(update);
            source = update.intl;
            update = source.string;
            result = result[romeon];
            result = echoed.bind(report)(result);
            echoed = result.t;
            if(oscard) { _fun00002_ip = 723; continue _fun00001 }
 708:
            result = echoed.LxhEuL;
            result = update.bind(source)(result);
            _fun00002_ip = 736; continue _fun00001;
 723:
            echoed = echoed.639hQU;
            result = update.bind(source)(echoed);
 736:
            backup['label'] = result;
            echoed = _closure1_slot0;
            update = _closure1_slot2;
            if(oscard) { _fun00002_ip = 771; continue _fun00001 }
 751:
            oscard = 20;
            oscard = update[oscard];
            oscard = echoed.bind(report)(oscard);
            oscard = oscard.SoundboardIcon;
            _fun00002_ip = 789; continue _fun00001;
 771:
            result = 19;
            result = update[result];
            result = echoed.bind(report)(result);
            oscard = result.SoundboardSlashIcon;
 789:
            backup['icon'] = oscard;
            oscard = function() { // Original name: onPress
                tangon = _closure2_slot2;
                zuuluu = {};
                entity = 'MUTE_SOUNDBOARD';
                zuuluu['action'] = entity;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 14;
                zuuluu = report[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.toggleLocalSoundboardMute;
                michal = _closure2_slot0;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            backup['onPress'] = oscard;
            oscard = 'mute-soundboard';
            oscard = output.bind(report)(sizing, backup, oscard);
            oscard = golfie.bind(verify)(oscard);
            if(!tangon) { _fun00002_ip = 1212; continue _fun00001 }
 828:
            tangon = verify.push;
            backup = _closure1_slot9;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[offset];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.UserProfileFormRow;
            oscard = {};
            output = _closure1_slot0;
            sizing = _closure1_slot2;
            result = sizing[romeon];
            result = output.bind(report)(result);
            echoed = result.intl;
            result = echoed.string;
            sizing = sizing[romeon];
            sizing = output.bind(report)(sizing);
            output = sizing.t;
            if(kiloes) { _fun00002_ip = 921; continue _fun00001 }
 906:
            sizing = output.4MMsWF;
            sizing = result.bind(echoed)(sizing);
            _fun00002_ip = 934; continue _fun00001;
 921:
            output = output.xc+Ps7;
            sizing = result.bind(echoed)(output);
 934:
            oscard['label'] = sizing;
            output = _closure1_slot0;
            result = _closure1_slot2;
            if(kiloes) { _fun00002_ip = 969; continue _fun00001 }
 949:
            kiloes = 22;
            kiloes = result[kiloes];
            kiloes = output.bind(report)(kiloes);
            kiloes = kiloes.VideoIcon;
            _fun00002_ip = 987; continue _fun00001;
 969:
            sizing = 21;
            sizing = result[sizing];
            sizing = output.bind(report)(sizing);
            kiloes = sizing.VideoSlashIcon;
 987:
            oscard['icon'] = kiloes;
            if(!zuuluu) { _fun00002_ip = 1178; continue _fun00001 }
 997:
            output = _closure1_slot10;
            sizing = _closure1_slot3;
            kiloes = {};
            result = yankee.disableVideoSublabel;
            kiloes['style'] = result;
            update = _closure1_slot9;
            config = _closure1_slot0;
            ctrled = _closure1_slot2;
            result = 23;
            result = ctrled[result];
            result = config.bind(report)(result);
            echoed = result.CircleWarningIcon;
            result = {'size': 'xxs', 'color': 'text-warning'};
            echoed = update.bind(report)(echoed, result);
            result = new Array(2);
            result[0] = echoed;
            source = _closure1_slot9;
            echoed = 24;
            echoed = ctrled[echoed];
            echoed = config.bind(report)(echoed);
            update = echoed.Text;
            echoed = {'variant': 'text-xs/medium', 'color': 'text-warning'};
            vacuum = ctrled[romeon];
            vacuum = config.bind(report)(vacuum);
            sequen = vacuum.intl;
            vacuum = sequen.string;
            ctrled = ctrled[romeon];
            ctrled = config.bind(report)(ctrled);
            ctrled = ctrled.t;
            ctrled = ctrled.m2Hyj4;
            ctrled = vacuum.bind(sequen)(ctrled);
            echoed['children'] = ctrled;
            echoed = source.bind(report)(update, echoed);
            result[1] = echoed;
            kiloes['children'] = result;
            zuuluu = output.bind(report)(sizing, kiloes);
 1178:
            oscard['sublabel'] = zuuluu;
            zuuluu = function() { // Original name: onPress
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure2_slot2;
                    michal = {};
                    entity = 'DISABLE_VIDEO';
                    michal['action'] = entity;
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    tangon = _closure2_slot4;
                    if(tangon) { _fun00006_ip = 102; continue _fun00005 }
 34:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 14;
                    tangon = oscard[tangon];
                    oscard = report.bind(entity)(tangon);
                    report = oscard.setDisableLocalVideo;
                    tangon = _closure2_slot0;
                    tangon = tangon.id;
                    zuuluu = _closure2_slot3;
                    golfie = _closure1_slot7;
                    if(zuuluu) { _fun00006_ip = 88; continue _fun00005 }
 80:
                    zuuluu = golfie.DISABLED;
                    _fun00006_ip = 94; continue _fun00005;
 88:
                    zuuluu = golfie.MANUAL_ENABLED;
 94:
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    _fun00006_ip = 142; continue _fun00005;
 102:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 25;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.confirmVideoUnstableConnection;
                    michal = function() {
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        michal = 14;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = tangon.setDisableLocalVideo;
                        michal = _closure2_slot0;
                        michal = michal.id;
                        entity = _closure1_slot7;
                        entity = entity.MANUAL_ENABLED;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
 142:
                    return entity;
                }
            };
            oscard['onPress'] = zuuluu;
            zuuluu = 'disable-video';
            zuuluu = backup.bind(report)(golfie, oscard, zuuluu);
            zuuluu = tangon.bind(verify)(zuuluu);
 1212:
            if(!michal) { _fun00002_ip = 1376; continue _fun00001 }
 1218:
            michal = verify.push;
            oscard = _closure1_slot9;
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            zuuluu = kiloes[offset];
            zuuluu = backup.bind(report)(zuuluu);
            tangon = zuuluu.UserProfileFormRow;
            zuuluu = {};
            golfie = kiloes[romeon];
            golfie = backup.bind(report)(golfie);
            output = golfie.intl;
            sizing = output.string;
            golfie = kiloes[romeon];
            golfie = backup.bind(report)(golfie);
            golfie = golfie.t;
            golfie = golfie.8ErYvb;
            golfie = sizing.bind(output)(golfie);
            zuuluu['label'] = golfie;
            golfie = 26;
            golfie = kiloes[golfie];
            golfie = backup.bind(report)(golfie);
            golfie = golfie.ShieldLockIcon;
            zuuluu['icon'] = golfie;
            golfie = 27;
            golfie = kiloes[golfie];
            golfie = backup.bind(report)(golfie);
            golfie = golfie.FormArrow;
            zuuluu['hint'] = golfie;
            entity = function() { // Original name: onPress
                tangon = _closure2_slot2;
                zuuluu = {};
                entity = 'VIEW_SECURE_FRAMES_VERIFICATION_CODE';
                zuuluu['action'] = entity;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 28;
                zuuluu = report[zuuluu];
                oscard = tangon.bind(entity)(zuuluu);
                zuuluu = oscard.hideActionSheet;
                zuuluu = zuuluu.bind(oscard)();
                zuuluu = 29;
                zuuluu = report[zuuluu];
                oscard = tangon.bind(entity)(zuuluu);
                report = oscard.openSecureFramesUserVerificationModal;
                zuuluu = _closure2_slot0;
                tangon = zuuluu.id;
                michal = _closure2_slot1;
                zuuluu = michal.id;
                michal = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 30;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.validateSecureFramesKeyConsistent;
                    entity = {};
                    report = _closure2_slot0;
                    report = report.id;
                    entity['userId'] = report;
                    tangon = _closure2_slot1;
                    report = tangon.id;
                    entity['channelId'] = report;
                    tangon = tangon.guild_id;
                    entity['guildId'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal = report.bind(oscard)(tangon, zuuluu, michal);
                return entity;
            };
            zuuluu['onPress'] = entity;
            entity = 'view-secure-frames-verification-code';
            entity = oscard.bind(report)(tangon, zuuluu, entity);
            entity = michal.bind(verify)(entity);
 1376:
            zuuluu = verify.length;
            michal = 0;
            entity = null;
            if(!(michal !== zuuluu)) { _fun00002_ip = 1541; continue _fun00001 }
 1392:
            tangon = _closure1_slot9;
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = oscard[offset];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            backup = yankee.card;
            golfie = new Array(2);
            golfie[0] = backup;
            golfie[1] = foxtra;
            michal['style'] = golfie;
            golfie = _closure1_slot0;
            foxtra = oscard[romeon];
            foxtra = golfie.bind(report)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            romeon = oscard[romeon];
            romeon = golfie.bind(report)(romeon);
            romeon = romeon.t;
            romeon = romeon.NiTd0d;
            romeon = foxtra.bind(backup)(romeon);
            michal['title'] = romeon;
            yankee = yankee.cardTitle;
            michal['titleStyle'] = yankee;
            option = _closure1_slot9;
            oscard = oscard[offset];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.UserProfileCardRows;
            oscard = {};
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1541:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: CurrentUserVoiceSettings
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = michal.user;
            golfie = michal.channel;
            var _closure2_slot0 = golfie;
            option = michal.style;
            michal = _closure1_slot11;
            report = undefined;
            oscard = michal.bind(report)();
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 9;
            michal = zuuluu[michal];
            offset = tangon.bind(report)(michal);
            michal = offset.useUserProfileAnalyticsContext;
            michal = michal.bind(offset)();
            michal = michal.trackUserProfileAction;
            var _closure2_slot1 = michal;
            michal = 10;
            offset = zuuluu[michal];
            foxtra = tangon.bind(report)(offset);
            romeon = foxtra.useStateFromStores;
            offset = _closure1_slot5;
            yankee = new Array(1);
            yankee[0] = offset;
            offset = function() {
                michal = _closure1_slot5;
                entity = michal.isSelfMute;
                entity = entity.bind(michal)();
                return entity;
            };
            foxtra = romeon.bind(foxtra)(yankee, offset);
            michal = zuuluu[michal];
            yankee = tangon.bind(report)(michal);
            offset = yankee.useStateFromStores;
            michal = _closure1_slot6;
            tangon = new Array(1);
            tangon[0] = michal;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = zuuluu.isPrivate;
                    entity = entity.bind(zuuluu)();
                    if(entity) { _fun00010_ip = 53; continue _fun00009 }
 20:
                    report = _closure1_slot6;
                    tangon = report.can;
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.SPEAK;
                    michal = _closure2_slot0;
                    entity = tangon.bind(report)(zuuluu, michal);
 53:
                    return entity;
                }
            };
            michal = offset.bind(yankee)(tangon, michal);
            tangon = _closure1_slot1;
            offset = 11;
            zuuluu = zuuluu[offset];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = entity.id;
            entity = golfie.id;
            zuuluu = tangon.bind(report)(zuuluu, entity);
            entity = null;
            if(!michal) { _fun00008_ip = 572; continue _fun00007 }
 198:
            michal = golfie.isGuildStageVoice;
            michal = michal.bind(golfie)();
            if(!michal) { _fun00008_ip = 249; continue _fun00007 }
 211:
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[offset];
            michal = golfie.bind(report)(michal);
            michal = michal.RequestToSpeakStates;
            michal = michal.ON_STAGE;
            entity = null;
            if(!(zuuluu === michal)) { _fun00008_ip = 572; continue _fun00007 }
 249:
            tangon = _closure1_slot9;
            zuuluu = _closure1_slot1;
            kiloes = _closure1_slot2;
            offset = 15;
            michal = kiloes[offset];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            yankee = oscard.card;
            golfie = new Array(2);
            golfie[0] = yankee;
            golfie[1] = option;
            michal['style'] = golfie;
            yankee = _closure1_slot0;
            echoed = 16;
            golfie = kiloes[echoed];
            golfie = yankee.bind(report)(golfie);
            romeon = golfie.intl;
            option = romeon.string;
            golfie = kiloes[echoed];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.t;
            golfie = golfie.NiTd0d;
            golfie = option.bind(romeon)(golfie);
            michal['title'] = golfie;
            oscard = oscard.cardTitle;
            michal['titleStyle'] = oscard;
            option = _closure1_slot9;
            oscard = kiloes[offset];
            oscard = yankee.bind(report)(oscard);
            golfie = oscard.UserProfileCardRows;
            oscard = {};
            romeon = _closure1_slot9;
            offset = kiloes[offset];
            offset = yankee.bind(report)(offset);
            yankee = offset.UserProfileFormRow;
            offset = {};
            sizing = _closure1_slot0;
            kiloes = _closure1_slot2;
            output = kiloes[echoed];
            output = sizing.bind(report)(output);
            result = output.intl;
            output = result.string;
            kiloes = kiloes[echoed];
            kiloes = sizing.bind(report)(kiloes);
            sizing = kiloes.t;
            if(foxtra) { _fun00008_ip = 462; continue _fun00007 }
 449:
            kiloes = sizing.sWmtIy;
            kiloes = output.bind(result)(kiloes);
            _fun00008_ip = 473; continue _fun00007;
 462:
            sizing = sizing.NHJxcn;
            kiloes = output.bind(result)(sizing);
 473:
            offset['label'] = kiloes;
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            if(foxtra) { _fun00008_ip = 508; continue _fun00007 }
 488:
            foxtra = 18;
            foxtra = sizing[foxtra];
            foxtra = kiloes.bind(report)(foxtra);
            foxtra = foxtra.MicrophoneIcon;
            _fun00008_ip = 526; continue _fun00007;
 508:
            backup = 17;
            backup = sizing[backup];
            backup = kiloes.bind(report)(backup);
            foxtra = backup.MicrophoneSlashIcon;
 526:
            offset['icon'] = foxtra;
            verify = function() { // Original name: onPress
                zuuluu = _closure2_slot1;
                michal = {};
                entity = 'MUTE';
                michal['action'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 14;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.toggleSelfMute;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            offset['onPress'] = verify;
            verify = 'mute';
            verify = romeon.bind(report)(yankee, offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 572:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    offset = 0;
    option = oscard[offset];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VideoToggleState;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot9 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    verify['paddingBottom'] = offset;
    tangon['card'] = verify;
    verify = {};
    verify['marginBottom'] = offset;
    tangon['cardTitle'] = verify;
    verify = {};
    offset = 20;
    verify['paddingVertical'] = offset;
    tangon['volumeSlider'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    tangon['disableVideoSublabel'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 31;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/UserProfileVoiceSettings.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: UserProfileVoiceSettings
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            entity = michal.user;
            golfie = michal.currentUser;
            oscard = michal.channel;
            michal = michal.style;
            tangon = entity.id;
            zuuluu = golfie.id;
            if(!(tangon !== zuuluu)) { _fun00012_ip = 73; continue _fun00011 }
 38:
            report = _closure1_slot9;
            tangon = _closure1_slot12;
            zuuluu = {};
            zuuluu['user'] = entity;
            zuuluu['channel'] = oscard;
            zuuluu['style'] = michal;
            entity = undefined;
            entity = report.bind(entity)(tangon, zuuluu);
            _fun00012_ip = 106; continue _fun00011;
 73:
            report = _closure1_slot9;
            tangon = _closure1_slot13;
            zuuluu = {};
            zuuluu['user'] = golfie;
            zuuluu['channel'] = oscard;
            zuuluu['style'] = michal;
            michal = undefined;
            entity = report.bind(michal)(tangon, zuuluu);
 106:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();