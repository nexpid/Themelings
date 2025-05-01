// app/modules/user_profile/native/UserProfileContent.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: CustomStatusBubble
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.customStatusActivity;
            backup = entity.user;
            var _closure2_slot0 = backup;
            kiloes = entity.guildId;
            var _closure2_slot1 = kiloes;
            sizing = entity.channelId;
            var _closure2_slot2 = sizing;
            verify = entity.hasCustomProfileTheme;
            option = entity.isPreviewingChanges;
            michal = _closure1_slot1;
            yankee = _closure1_slot2;
            tangon = 10;
            report = yankee[tangon];
            tangon = undefined;
            report = michal.bind(tangon)(report);
            report = report.bind(tangon)();
            golfie = _closure1_slot0;
            oscard = 11;
            oscard = yankee[oscard];
            output = golfie.bind(tangon)(oscard);
            foxtra = output.useStateFromStores;
            oscard = _closure1_slot8;
            romeon = new Array(1);
            romeon[0] = oscard;
            golfie = new Array(1);
            golfie[0] = backup;
            oscard = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot8;
                    entity = michal.getCurrentUser;
                    entity = entity.bind(michal)();
                    michal = null;
                    zuuluu = michal == entity;
                    michal = undefined;
                    if(zuuluu) { _fun00004_ip = 32; continue _fun00003 }
 27:
                    michal = entity.id;
 32:
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = michal === entity;
                    return entity;
                }
            };
            oscard = foxtra.bind(output)(romeon, oscard, golfie);
            foxtra = _closure1_slot3;
            romeon = foxtra.useCallback;
            golfie = new Array(3);
            golfie[0] = sizing;
            golfie[1] = kiloes;
            golfie[2] = backup;
            zuuluu = function() {
                report = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 12;
                tangon = michal[entity];
                entity = undefined;
                golfie = report.bind(entity)(tangon);
                oscard = golfie.openLazy;
                tangon = _closure1_slot0;
                zuuluu = 14;
                zuuluu = michal[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = 13;
                zuuluu = michal[zuuluu];
                michal = michal.paths;
                yankee = tangon.bind(entity)(zuuluu, michal);
                tangon = {};
                zuuluu = _closure2_slot0;
                tangon['user'] = zuuluu;
                zuuluu = _closure2_slot1;
                tangon['guildId'] = zuuluu;
                michal = _closure2_slot2;
                tangon['channelId'] = michal;
                offset = 'UserProfileCustomStatusActionSheet';
                option = 'stack';
                romeon = golfie;
                verify = tangon;
                michal = romeon[oscard](yankee, offset, verify, option, golfie);
                return entity;
            };
            golfie = romeon.bind(foxtra)(zuuluu, golfie);
            zuuluu = _closure1_slot13;
            entity = 15;
            entity = yankee[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['customStatusActivity'] = offset;
            entity['hasCustomProfileTheme'] = verify;
            if(!oscard) { _fun00002_ip = 206; continue _fun00001 }
 203:
            oscard = !option;
 206:
            entity['editEnabled'] = oscard;
            oscard = undefined;
            if(option) { _fun00002_ip = 219; continue _fun00001 }
 216:
            oscard = golfie;
 219:
            entity['onPressTruncatedStatus'] = oscard;
            oscard = report.customStatusBubble;
            entity['style'] = oscard;
            report = report.emojiOnlyCustomStatusBubble;
            entity['emojiOnlyStyle'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: RemoveFriendIconButton
        entity = argFoo;
        zuuluu = entity.user;
        var _closure2_slot0 = zuuluu;
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        entity = 16;
        entity = offset[entity];
        tangon = undefined;
        michal = verify.bind(tangon)(entity);
        entity = michal.useUserProfileAnalyticsContext;
        entity = entity.bind(michal)();
        entity = entity.trackUserProfileAction;
        var _closure2_slot1 = entity;
        michal = _closure1_slot1;
        entity = 17;
        entity = offset[entity];
        entity = michal.bind(tangon)(entity);
        entity = entity.bind(tangon)();
        entity = entity.newestAnalyticsLocation;
        var _closure2_slot2 = entity;
        entity = function() { // Original name: handleConfirm
            zuuluu = _closure2_slot1;
            michal = {};
            entity = 'REMOVE_FRIEND';
            michal['action'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 18;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.removeFriend;
            michal = _closure2_slot0;
            zuuluu = michal.id;
            michal = {};
            oscard = _closure2_slot2;
            michal['location'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        var _closure2_slot3 = entity;
        entity = 19;
        entity = offset[entity];
        michal = michal.bind(tangon)(entity);
        entity = michal.useName;
        entity = entity.bind(michal)(zuuluu);
        var _closure2_slot4 = entity;
        zuuluu = _closure1_slot13;
        entity = 20;
        entity = offset[entity];
        entity = verify.bind(tangon)(entity);
        michal = entity.IconButton;
        entity = {'size': 'sm', 'variant': 'secondary-overlay'};
        option = _closure1_slot13;
        oscard = 21;
        oscard = offset[oscard];
        oscard = verify.bind(tangon)(oscard);
        golfie = oscard.UserCheckIcon;
        oscard = {'size': 'sm', 'color': 'white'};
        oscard = option.bind(tangon)(golfie, oscard);
        entity['icon'] = oscard;
        oscard = 22;
        golfie = offset[oscard];
        golfie = verify.bind(tangon)(golfie);
        option = golfie.intl;
        golfie = option.string;
        oscard = offset[oscard];
        oscard = verify.bind(tangon)(oscard);
        oscard = oscard.t;
        oscard = oscard.cvSt1N;
        oscard = golfie.bind(option)(oscard);
        entity['accessibilityLabel'] = oscard;
        report = function() { // Original name: onPress
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 23;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.confirmRemoveFriend;
            michal = {};
            oscard = _closure2_slot4;
            michal['userDisplayName'] = oscard;
            report = _closure2_slot3;
            michal['onConfirm'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['onPress'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: RemoveGameFriendIconButton
        michal = argFoo;
        report = michal.user;
        var _closure2_slot0 = report;
        golfie = michal.guildId;
        var _closure2_slot1 = golfie;
        option = michal.channelId;
        var _closure2_slot2 = option;
        tangon = _closure1_slot3;
        zuuluu = tangon.useCallback;
        michal = new Array(3);
        michal[0] = option;
        michal[1] = golfie;
        michal[2] = report;
        entity = function() {
            report = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 12;
            tangon = michal[entity];
            entity = undefined;
            golfie = report.bind(entity)(tangon);
            oscard = golfie.openLazy;
            tangon = _closure1_slot0;
            zuuluu = 14;
            zuuluu = michal[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = 24;
            zuuluu = michal[zuuluu];
            michal = michal.paths;
            yankee = tangon.bind(entity)(zuuluu, michal);
            tangon = {};
            zuuluu = _closure2_slot0;
            tangon['user'] = zuuluu;
            zuuluu = _closure2_slot1;
            tangon['guildId'] = zuuluu;
            michal = _closure2_slot2;
            tangon['channelId'] = michal;
            offset = 'UserProfileGameFriendActionSheet';
            option = 'stack';
            romeon = golfie;
            verify = tangon;
            michal = romeon[oscard](yankee, offset, verify, option, golfie);
            return entity;
        };
        report = zuuluu.bind(tangon)(entity, michal);
        tangon = _closure1_slot13;
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        entity = 20;
        entity = offset[entity];
        zuuluu = undefined;
        entity = verify.bind(zuuluu)(entity);
        michal = entity.IconButton;
        entity = {'size': 'sm', 'variant': 'secondary-overlay'};
        option = _closure1_slot13;
        oscard = 25;
        oscard = offset[oscard];
        oscard = verify.bind(zuuluu)(oscard);
        golfie = oscard.UserPlatformIcon;
        oscard = {'size': 'sm', 'color': 'white'};
        oscard = option.bind(zuuluu)(golfie, oscard);
        entity['icon'] = oscard;
        oscard = 22;
        golfie = offset[oscard];
        golfie = verify.bind(zuuluu)(golfie);
        option = golfie.intl;
        golfie = option.string;
        oscard = offset[oscard];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.cvSt1N;
        oscard = golfie.bind(option)(oscard);
        entity['accessibilityLabel'] = oscard;
        entity['onPress'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: PrimaryInfo
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            output = entity.user;
            result = entity.channelId;
            sizing = entity.displayProfile;
            michal = entity.displayNameOverride;
            backup = entity.pronounsOverride;
            romeon = entity.badgesOverride;
            offset = entity.style;
            verify = entity.badgeContainerBackground;
            report = entity.isPreviewingChanges;
            tangon = undefined;
            var _closure2_slot1 = tangon;
            option = _closure1_slot1;
            foxtra = _closure1_slot2;
            entity = 19;
            entity = foxtra[entity];
            zuuluu = option.bind(tangon)(entity);
            entity = zuuluu.useUserTag;
            entity = entity.bind(zuuluu)(output);
            var _closure2_slot0 = entity;
            zuuluu = 26;
            zuuluu = foxtra[zuuluu];
            zuuluu = option.bind(tangon)(zuuluu);
            yankee = zuuluu.bind(tangon)(sizing);
            zuuluu = 27;
            zuuluu = foxtra[zuuluu];
            kiloes = option.bind(tangon)(zuuluu);
            option = kiloes.useName;
            foxtra = null;
            echoed = foxtra == sizing;
            zuuluu = undefined;
            if(echoed) { _fun00006_ip = 151; continue _fun00005 }
 146:
            zuuluu = sizing.guildId;
 151:
            result = option.bind(kiloes)(zuuluu, result, output);
            kiloes = result;
            if(!(foxtra != michal)) { _fun00006_ip = 192; continue _fun00005 }
 165:
            zuuluu = michal.trim;
            zuuluu = zuuluu.bind(michal)();
            option = zuuluu.length;
            zuuluu = 0;
            kiloes = result;
            if(!(option > zuuluu)) { _fun00006_ip = 192; continue _fun00005 }
 189:
            kiloes = michal;
 192:
            zuuluu = _closure1_slot0;
            result = _closure1_slot2;
            michal = 16;
            michal = result[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useUserProfileAnalyticsContext;
            michal = michal.bind(zuuluu)();
            echoed = michal.trackUserProfileAction;
            _closure2_slot1 = echoed;
            option = _closure1_slot3;
            zuuluu = option.useCallback;
            michal = new Array(2);
            michal[0] = echoed;
            michal[1] = entity;
            entity = function() {
                tangon = _closure2_slot1;
                zuuluu = {};
                entity = 'COPY_USERNAME';
                zuuluu['action'] = entity;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                report = 28;
                report = tangon[report];
                oscard = zuuluu.bind(entity)(report);
                report = oscard.copy;
                michal = _closure2_slot0;
                michal = report.bind(oscard)(michal);
                michal = 29;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.presentUsernameCopied;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            option = zuuluu.bind(option)(entity, michal);
            zuuluu = _closure1_slot13;
            michal = _closure1_slot1;
            entity = 30;
            entity = result[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['user'] = output;
            result = foxtra == sizing;
            output = undefined;
            if(result) { _fun00006_ip = 306; continue _fun00005 }
 301:
            output = sizing.guildId;
 306:
            entity['guildId'] = output;
            entity['displayName'] = kiloes;
            if(!(foxtra == backup)) { _fun00006_ip = 336; continue _fun00005 }
 318:
            output = foxtra == sizing;
            kiloes = undefined;
            if(output) { _fun00006_ip = 333; continue _fun00005 }
 327:
            kiloes = sizing.pronouns;
 333:
            backup = kiloes;
 336:
            entity['pronouns'] = backup;
            if(!(foxtra != romeon)) { _fun00006_ip = 348; continue _fun00005 }
 345:
            yankee = romeon;
 348:
            entity['badges'] = yankee;
            entity['style'] = offset;
            entity['badgeContainerBackground'] = verify;
            verify = undefined;
            if(report) { _fun00006_ip = 370; continue _fun00005 }
 367:
            verify = option;
 370:
            entity['onPressDisplayName'] = verify;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 22;
            verify = romeon[oscard];
            verify = yankee.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            oscard = romeon[oscard];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.t;
            oscard = oscard.y5MwJy;
            oscard = verify.bind(offset)(oscard);
            entity['displayNameAccessibilityHint'] = oscard;
            oscard = undefined;
            if(report) { _fun00006_ip = 443; continue _fun00005 }
 440:
            oscard = option;
 443:
            entity['onPressUserTag'] = oscard;
            oscard = undefined;
            if(report) { _fun00006_ip = 460; continue _fun00005 }
 453:
            oscard = function() {
                zuuluu = _closure2_slot1;
                michal = {};
                entity = 'PRESS_PRONOUNS';
                michal['action'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 29;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.presentUserPronouns;
                michal = michal.bind(zuuluu)();
                return entity;
            };
 460:
            entity['onPressPronouns'] = oscard;
            report = !report;
            entity['showBadgeToastOnPress'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: EditSection
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            entity = entity.guildId;
            var _closure2_slot0 = entity;
            update = _closure1_slot1;
            echoed = _closure1_slot2;
            entity = 10;
            entity = echoed[entity];
            tangon = undefined;
            entity = update.bind(tangon)(entity);
            report = entity.bind(tangon)();
            verify = _closure1_slot0;
            entity = 16;
            entity = echoed[entity];
            michal = verify.bind(tangon)(entity);
            entity = michal.useUserProfileAnalyticsContext;
            entity = entity.bind(michal)();
            entity = entity.trackUserProfileAction;
            var _closure2_slot1 = entity;
            entity = 11;
            entity = echoed[entity];
            oscard = verify.bind(tangon)(entity);
            zuuluu = oscard.useStateFromStores;
            entity = _closure1_slot5;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = zuuluu.bind(oscard)(michal, entity);
            entity = 31;
            michal = echoed[entity];
            michal = update.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            var _closure2_slot2 = michal;
            entity = echoed[entity];
            michal = update.bind(tangon)(entity);
            entity = {};
            entity['guild'] = golfie;
            entity = michal.bind(tangon)(entity);
            var _closure2_slot3 = entity;
            zuuluu = _closure1_slot13;
            entity = 32;
            entity = echoed[entity];
            michal = update.bind(tangon)(entity);
            entity = {};
            report = report.primaryButtons;
            entity['style'] = report;
            report = _closure1_slot12;
            entity['maxWidth'] = report;
            backup = _closure1_slot13;
            oscard = 33;
            report = echoed[oscard];
            report = verify.bind(tangon)(report);
            foxtra = report.Button;
            option = {};
            romeon = 'primary';
            option['variant'] = romeon;
            kiloes = _closure1_slot13;
            yankee = 34;
            report = echoed[yankee];
            report = verify.bind(tangon)(report);
            verify = report.PencilIcon;
            report = {};
            result = 'sm';
            report['size'] = result;
            sizing = 35;
            echoed = echoed[sizing];
            echoed = update.bind(tangon)(echoed);
            echoed = echoed.colors;
            echoed = echoed.WHITE;
            report['color'] = echoed;
            report = kiloes.bind(tangon)(verify, report);
            option['icon'] = report;
            report = null;
            if(!(report == golfie)) { _fun00008_ip = 368; continue _fun00007 }
 309:
            update = _closure1_slot0;
            source = _closure1_slot2;
            verify = 22;
            kiloes = source[verify];
            kiloes = update.bind(tangon)(kiloes);
            echoed = kiloes.intl;
            kiloes = echoed.string;
            verify = source[verify];
            verify = update.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.s5vZlZ;
            verify = kiloes.bind(echoed)(verify);
            _fun00008_ip = 425; continue _fun00007;
 368:
            source = _closure1_slot0;
            ctrled = _closure1_slot2;
            kiloes = 22;
            echoed = ctrled[kiloes];
            echoed = source.bind(tangon)(echoed);
            update = echoed.intl;
            echoed = update.string;
            kiloes = ctrled[kiloes];
            kiloes = source.bind(tangon)(kiloes);
            kiloes = kiloes.t;
            kiloes = kiloes.HmFaFB;
            verify = echoed.bind(update)(kiloes);
 425:
            option['text'] = verify;
            verify = function() { // Original name: onPress
                tangon = _closure2_slot1;
                zuuluu = {};
                entity = 'EDIT_PROFILE';
                zuuluu['action'] = entity;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 12;
                zuuluu = report[zuuluu];
                oscard = tangon.bind(entity)(zuuluu);
                zuuluu = oscard.hideActionSheet;
                zuuluu = zuuluu.bind(oscard)();
                zuuluu = 36;
                zuuluu = report[zuuluu];
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.bind(entity)();
                michal = _closure2_slot2;
                michal = michal.bind(entity)();
                return entity;
            };
            option['onPress'] = verify;
            verify = true;
            option['grow'] = verify;
            option = backup.bind(tangon)(foxtra, option);
            entity['primaryButton'] = option;
            golfie = report != golfie;
            report = undefined;
            if(!golfie) { _fun00008_ip = 639; continue _fun00007 }
 470:
            option = _closure1_slot13;
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            oscard = kiloes[oscard];
            oscard = backup.bind(tangon)(oscard);
            golfie = oscard.Button;
            oscard = {};
            oscard['variant'] = romeon;
            foxtra = _closure1_slot13;
            yankee = kiloes[yankee];
            yankee = backup.bind(tangon)(yankee);
            romeon = yankee.PencilIcon;
            yankee = {};
            yankee['size'] = result;
            output = _closure1_slot1;
            sizing = kiloes[sizing];
            sizing = output.bind(tangon)(sizing);
            sizing = sizing.colors;
            sizing = sizing.WHITE;
            yankee['color'] = sizing;
            yankee = foxtra.bind(tangon)(romeon, yankee);
            oscard['icon'] = yankee;
            yankee = 22;
            romeon = kiloes[yankee];
            romeon = backup.bind(tangon)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = kiloes[yankee];
            yankee = backup.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.PKQB/P;
            yankee = romeon.bind(foxtra)(yankee);
            oscard['text'] = yankee;
            offset = function() { // Original name: onPress
                tangon = _closure2_slot1;
                zuuluu = {};
                entity = 'EDIT_GUILD_PROFILE';
                zuuluu['action'] = entity;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 12;
                zuuluu = report[zuuluu];
                oscard = tangon.bind(entity)(zuuluu);
                zuuluu = oscard.hideActionSheet;
                zuuluu = zuuluu.bind(oscard)();
                zuuluu = 36;
                zuuluu = report[zuuluu];
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.bind(entity)();
                michal = _closure2_slot3;
                michal = michal.bind(entity)();
                return entity;
            };
            oscard['onPress'] = offset;
            oscard['grow'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 639:
            entity['secondaryButton'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.PROFILE_CONTENT_BOTTOM_PADDING;
    var _closure1_slot9 = option;
    tangon = tangon.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RelationshipTypes;
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot12 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot13 = option;
    option = tangon.jsxs;
    var _closure1_slot14 = option;
    tangon = tangon.Fragment;
    var _closure1_slot15 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: UserProfileContent
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            result = entity.user;
            var _closure2_slot0 = result;
            kiloes = entity.channel;
            var _closure2_slot1 = kiloes;
            sizing = entity.displayProfile;
            limora = entity.showUserProfileActionSheet;
            var _closure2_slot2 = limora;
            variable41 = entity.disableCalls;
            variable40 = entity.disableMessage;
            ctrled = entity.disableStatus;
            golfie = entity.isPreviewingChanges;
            variable42 = entity.friendToken;
            variable39 = entity.location;
            michal = entity.navigateToPremium;
            var _closure2_slot3 = michal;
            entity = entity.navigateToShop;
            var _closure2_slot4 = entity;
            report = undefined;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            zuuluu = _closure1_slot1;
            entity = _closure1_slot2;
            michal = 10;
            michal = entity[michal];
            michal = zuuluu.bind(report)(michal);
            yankee = michal.bind(report)();
            michal = 37;
            michal = entity[michal];
            tangon = zuuluu.bind(report)(michal);
            michal = _closure1_slot12;
            offset = tangon.bind(report)(michal);
            michal = 38;
            michal = entity[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.bind(report)();
            cntext = michal.bottom;
            zuuluu = _closure1_slot0;
            michal = 11;
            entity = entity[michal];
            oscard = zuuluu.bind(report)(entity);
            tangon = oscard.useStateFromStores;
            entity = _closure1_slot8;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot8;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            output = tangon.bind(oscard)(zuuluu, entity);
            entity = null;
            zuuluu = entity == output;
            papara = undefined;
            if(zuuluu) { _fun00010_ip = 235; continue _fun00009 }
 230:
            papara = output.id;
 235:
            config = result.id;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = oscard[michal];
            foxtra = tangon.bind(report)(zuuluu);
            verify = foxtra.useStateFromStoresObject;
            zuuluu = _closure1_slot6;
            option = new Array(1);
            option[0] = zuuluu;
            zuuluu = function() {
                entity = {};
                tangon = _closure1_slot6;
                report = tangon.getRelationshipType;
                michal = _closure2_slot0;
                zuuluu = michal.id;
                zuuluu = report.bind(tangon)(zuuluu);
                entity['relationshipType'] = zuuluu;
                zuuluu = tangon.getOriginApplicationId;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['originApplicationId'] = michal;
                return entity;
            };
            zuuluu = verify.bind(foxtra)(option, zuuluu);
            echoed = zuuluu.relationshipType;
            variable44 = zuuluu.originApplicationId;
            zuuluu = 39;
            zuuluu = oscard[zuuluu];
            verify = tangon.bind(report)(zuuluu);
            option = verify.useIncomingGameRelationshipsForUser;
            zuuluu = result.id;
            status = option.bind(verify)(zuuluu);
            zuuluu = 40;
            zuuluu = oscard[zuuluu];
            verify = tangon.bind(report)(zuuluu);
            option = verify.useIsGameFriends;
            zuuluu = result.id;
            backup = option.bind(verify)(zuuluu);
            zuuluu = 41;
            zuuluu = oscard[zuuluu];
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.useUserProfileGameFriendApplicationIds;
            zuuluu = {};
            option = result.id;
            zuuluu['userId'] = option;
            variable36 = tangon.bind(oscard)(zuuluu);
            if(!(entity == sizing)) { _fun00010_ip = 410; continue _fun00009 }
 394:
            zuuluu = entity == kiloes;
            equals = undefined;
            if(zuuluu) { _fun00010_ip = 408; continue _fun00009 }
 403:
            equals = kiloes.guild_id;
 408:
            _fun00010_ip = 430; continue _fun00009;
 410:
            tangon = sizing.guildId;
            oscard = entity != tangon;
            zuuluu = undefined;
            if(!oscard) { _fun00010_ip = 427; continue _fun00009 }
 424:
            zuuluu = tangon;
 427:
            equals = zuuluu;
 430:
            _closure2_slot5 = equals;
            option = _closure1_slot3;
            oscard = option.useMemo;
            tangon = new Array(2);
            tangon[0] = equals;
            tangon[1] = result;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot5;
                    michal = null;
                    if(!(michal != entity)) { _fun00012_ip = 21; continue _fun00011 }
 13:
                    entity = _closure2_slot0;
                    if(!(michal == entity)) { _fun00012_ip = 25; continue _fun00011 }
 21:
                    entity = {};
                    _fun00012_ip = 56; continue _fun00011;
 25:
                    michal = {};
                    tangon = _closure2_slot5;
                    zuuluu = _closure2_slot0;
                    report = zuuluu.id;
                    zuuluu = new Array(1);
                    zuuluu[0] = report;
                    michal[tangon] = zuuluu;
                    entity = michal;
 56:
                    return entity;
                }
            };
            verify = oscard.bind(option)(zuuluu, tangon);
            option = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 42;
            zuuluu = tangon[zuuluu];
            oscard = option.bind(report)(zuuluu);
            zuuluu = oscard.useSubscribeGuildMembers;
            zuuluu = zuuluu.bind(oscard)(verify);
            zuuluu = _closure1_slot1;
            oscard = 43;
            oscard = tangon[oscard];
            verify = zuuluu.bind(report)(oscard);
            oscard = result.id;
            record = verify.bind(report)(oscard);
            michal = tangon[michal];
            foxtra = option.bind(report)(michal);
            verify = foxtra.useStateFromStoresObject;
            michal = _closure1_slot7;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                michal = _closure1_slot7;
                entity = michal.getAllPending;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = verify.bind(foxtra)(oscard, michal);
            source = michal.pendingBanner;
            vacuum = michal.pendingAvatar;
            variable43 = michal.pendingAvatarDecoration;
            variable47 = michal.pendingGlobalName;
            variable46 = michal.pendingPronouns;
            quebec = michal.pendingBio;
            update = michal.pendingAccentColor;
            foxtra = michal.pendingThemeColors;
            oscard = michal.pendingLegacyUsernameDisabled;
            michal = 44;
            michal = tangon[michal];
            verify = option.bind(report)(michal);
            option = verify.getPendingAvatarSrc;
            michal = {};
            sequen = result.id;
            michal['userId'] = sequen;
            michal['image'] = vacuum;
            variable48 = option.bind(verify)(michal);
            michal = 26;
            michal = tangon[michal];
            michal = zuuluu.bind(report)(michal);
            variable45 = michal.bind(report)(sizing, oscard);
            michal = 45;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['user'] = result;
            michal['displayProfile'] = sizing;
            tangon = undefined;
            if(!golfie) { _fun00010_ip = 707; continue _fun00009 }
 704:
            tangon = foxtra;
 707:
            michal['pendingThemeColors'] = tangon;
            michal = zuuluu.bind(report)(michal);
            oscard = michal.theme;
            sequen = michal.primaryColor;
            vacuum = michal.secondaryColor;
            variable37 = entity != sequen;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 46;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.useUserProfileColors;
            michal = {};
            michal['theme'] = oscard;
            michal['primaryColor'] = sequen;
            michal['secondaryColor'] = vacuum;
            michal = zuuluu.bind(tangon)(michal);
            target = michal.gradientFallbackBackground;
            variable49 = michal.avatarBackground;
            sierra = michal.containerBackground;
            if(!(entity != result)) { _fun00010_ip = 2678; continue _fun00009 }
 812:
            if(!(entity != output)) { _fun00010_ip = 2678; continue _fun00009 }
 819:
            whisks = {};
            whisks['backgroundColor'] = sierra;
            _closure2_slot6 = whisks;
            tangon = _closure1_slot14;
            zuuluu = _closure1_slot15;
            michal = {};
            verify = _closure1_slot13;
            option = _closure1_slot1;
            variable50 = _closure1_slot2;
            oscard = 47;
            oscard = variable50[oscard];
            option = option.bind(report)(oscard);
            oscard = {};
            oscard['user'] = result;
            oscard['displayProfile'] = sizing;
            oscard['bannerHeight'] = offset;
            offset = undefined;
            if(!golfie) { _fun00010_ip = 887; continue _fun00009 }
 884:
            offset = source;
 887:
            oscard['pendingBanner'] = offset;
            offset = undefined;
            if(!golfie) { _fun00010_ip = 900; continue _fun00009 }
 897:
            offset = variable48;
 900:
            oscard['pendingAvatarSrc'] = offset;
            offset = undefined;
            if(!golfie) { _fun00010_ip = 922; continue _fun00009 }
 910:
            source = entity != update;
            offset = undefined;
            if(!source) { _fun00010_ip = 922; continue _fun00009 }
 919:
            offset = update;
 922:
            oscard['pendingAccentColor'] = offset;
            offset = undefined;
            if(!golfie) { _fun00010_ip = 944; continue _fun00009 }
 932:
            update = entity != foxtra;
            offset = undefined;
            if(!update) { _fun00010_ip = 944; continue _fun00009 }
 941:
            offset = foxtra;
 944:
            oscard['pendingThemeColors'] = offset;
            oscard['disableInteraction'] = golfie;
            option = verify.bind(report)(option, oscard);
            oscard = new Array(3);
            oscard[0] = option;
            offset = _closure1_slot14;
            verify = _closure1_slot4;
            option = {};
            source = _closure1_slot13;
            update = _closure1_slot1;
            variable50 = _closure1_slot2;
            foxtra = 48;
            foxtra = variable50[foxtra];
            update = update.bind(report)(foxtra);
            foxtra = {};
            foxtra['backgroundColor'] = variable49;
            foxtra['user'] = result;
            foxtra['guildId'] = equals;
            foxtra['disableStatus'] = ctrled;
            ctrled = undefined;
            if(!golfie) { _fun00010_ip = 1029; continue _fun00009 }
 1026:
            ctrled = variable48;
 1029:
            foxtra['pendingAvatarSrc'] = ctrled;
            ctrled = undefined;
            if(!golfie) { _fun00010_ip = 1042; continue _fun00009 }
 1039:
            ctrled = variable43;
 1042:
            foxtra['pendingAvatarDecoration'] = ctrled;
            update = source.bind(report)(update, foxtra);
            foxtra = new Array(2);
            foxtra[0] = update;
            ctrled = _closure1_slot14;
            source = _closure1_slot1;
            variable43 = _closure1_slot2;
            update = 49;
            update = variable43[update];
            source = source.bind(report)(update);
            update = {};
            update['fallbackBackground'] = target;
            update['primaryColor'] = sequen;
            update['secondaryColor'] = vacuum;
            sequen = yankee.profileContent;
            vacuum = new Array(2);
            vacuum[0] = sequen;
            sequen = {};
            if(!(papara === config)) { _fun00010_ip = 1127; continue _fun00009 }
 1122:
            config = 0;
            if(!golfie) { _fun00010_ip = 1140; continue _fun00009 }
 1127:
            papara = entity != record;
            config = 0;
            if(papara) { _fun00010_ip = 1140; continue _fun00009 }
 1136:
            config = _closure1_slot10;
 1140:
            sequen['paddingTop'] = config;
            config = _closure1_slot9;
            config = cntext + config;
            sequen['paddingBottom'] = config;
            vacuum[1] = sequen;
            update['containerStyle'] = vacuum;
            config = _closure1_slot13;
            sequen = _closure1_slot16;
            vacuum = {};
            vacuum['customStatusActivity'] = record;
            vacuum['user'] = result;
            vacuum['guildId'] = equals;
            cntext = entity == kiloes;
            record = undefined;
            if(cntext) { _fun00010_ip = 1204; continue _fun00009 }
 1199:
            record = kiloes.id;
 1204:
            vacuum['channelId'] = record;
            vacuum['hasCustomProfileTheme'] = variable37;
            vacuum['showUserProfileActionSheet'] = limora;
            vacuum['isPreviewingChanges'] = golfie;
            sequen = config.bind(report)(sequen, vacuum);
            vacuum = new Array(3);
            vacuum[0] = sequen;
            record = _closure1_slot14;
            config = _closure1_slot4;
            sequen = {};
            cntext = yankee.primaryInfo;
            sequen['style'] = cntext;
            target = _closure1_slot13;
            papara = _closure1_slot19;
            cntext = {};
            cntext['user'] = result;
            variable48 = entity == kiloes;
            variable43 = undefined;
            if(variable48) { _fun00010_ip = 1285; continue _fun00009 }
 1280:
            variable43 = kiloes.id;
 1285:
            cntext['channelId'] = variable43;
            cntext['displayProfile'] = sizing;
            variable43 = undefined;
            if(!golfie) { _fun00010_ip = 1302; continue _fun00009 }
 1299:
            variable43 = variable47;
 1302:
            cntext['displayNameOverride'] = variable43;
            variable43 = undefined;
            if(!golfie) { _fun00010_ip = 1315; continue _fun00009 }
 1312:
            variable43 = variable46;
 1315:
            cntext['pronounsOverride'] = variable43;
            variable43 = undefined;
            if(!golfie) { _fun00010_ip = 1328; continue _fun00009 }
 1325:
            variable43 = variable45;
 1328:
            cntext['badgesOverride'] = variable43;
            cntext['badgeContainerBackground'] = sierra;
            cntext['isPreviewingChanges'] = golfie;
            papara = target.bind(report)(papara, cntext);
            cntext = new Array(7);
            cntext[0] = papara;
            target = result.id;
            papara = output.id;
            papara = target !== papara;
            if(!papara) { _fun00010_ip = 1414; continue _fun00009 }
 1374:
            variable43 = _closure1_slot13;
            sierra = _closure1_slot1;
            variable45 = _closure1_slot2;
            target = 50;
            target = variable45[target];
            sierra = sierra.bind(report)(target);
            target = {};
            target['user'] = result;
            target['guildId'] = equals;
            papara = variable43.bind(report)(sierra, target);
 1414:
            cntext[1] = papara;
            papara = _closure1_slot11;
            papara = papara.PENDING_INCOMING;
            papara = echoed === papara;
            if(!papara) { _fun00010_ip = 1506; continue _fun00009 }
 1435:
            variable43 = _closure1_slot13;
            sierra = _closure1_slot1;
            variable45 = _closure1_slot2;
            target = 51;
            target = variable45[target];
            sierra = sierra.bind(report)(target);
            target = {};
            target['user'] = result;
            variable46 = entity == kiloes;
            variable45 = undefined;
            if(variable46) { _fun00010_ip = 1479; continue _fun00009 }
 1474:
            variable45 = kiloes.id;
 1479:
            target['channelId'] = variable45;
            target['guildId'] = equals;
            target['applicationId'] = variable44;
            target['style'] = whisks;
            target['showUserProfile'] = limora;
            papara = variable43.bind(report)(sierra, target);
 1506:
            cntext[2] = papara;
            target = status.map;
            papara = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot13;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 51;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    golfie = _closure2_slot0;
                    michal['user'] = golfie;
                    golfie = true;
                    michal['isGameRelationship'] = golfie;
                    golfie = entity.applicationId;
                    michal['applicationId'] = golfie;
                    option = _closure2_slot1;
                    golfie = null;
                    option = golfie == option;
                    golfie = undefined;
                    if(option) { _fun00014_ip = 85; continue _fun00013 }
 76:
                    option = _closure2_slot1;
                    golfie = option.id;
 85:
                    michal['channelId'] = golfie;
                    golfie = _closure2_slot5;
                    michal['guildId'] = golfie;
                    golfie = _closure2_slot6;
                    michal['style'] = golfie;
                    oscard = _closure2_slot2;
                    michal['showUserProfile'] = oscard;
                    entity = entity.applicationId;
                    entity = report.bind(tangon)(zuuluu, michal, entity);
                    return entity;
                }
            };
            papara = target.bind(status)(papara);
            cntext[3] = papara;
            status = _closure1_slot13;
            target = _closure1_slot1;
            sierra = _closure1_slot2;
            papara = 52;
            papara = sierra[papara];
            target = target.bind(report)(papara);
            papara = {};
            papara['user'] = result;
            papara['style'] = whisks;
            papara = status.bind(report)(target, papara);
            cntext[4] = papara;
            target = result.id;
            papara = output.id;
            papara = target === papara;
            if(!papara) { _fun00010_ip = 1595; continue _fun00009 }
 1592:
            papara = !golfie;
 1595:
            if(!papara) { _fun00010_ip = 1618; continue _fun00009 }
 1598:
            sierra = _closure1_slot13;
            status = _closure1_slot20;
            target = {};
            target['guildId'] = equals;
            papara = sierra.bind(report)(status, target);
 1618:
            cntext[5] = papara;
            target = result.id;
            papara = output.id;
            papara = target !== papara;
            if(!papara) { _fun00010_ip = 1735; continue _fun00009 }
 1639:
            sierra = _closure1_slot13;
            status = _closure1_slot1;
            variable43 = _closure1_slot2;
            target = 53;
            target = variable43[target];
            status = status.bind(report)(target);
            target = {};
            target['user'] = result;
            target['friendToken'] = variable42;
            if(variable41) { _fun00010_ip = 1691; continue _fun00009 }
 1677:
            variable42 = _closure1_slot11;
            variable42 = variable42.BLOCKED;
            variable41 = echoed === variable42;
 1691:
            if(variable41) { _fun00010_ip = 1700; continue _fun00009 }
 1694:
            variable41 = result.isProvisional;
 1700:
            target['disableCalls'] = variable41;
            target['disableMessage'] = variable40;
            target['location'] = variable39;
            target['hasCustomProfileTheme'] = variable37;
            variable39 = yankee.primaryButtons;
            target['style'] = variable39;
            papara = sierra.bind(report)(status, target);
 1735:
            cntext[6] = papara;
            sequen['children'] = cntext;
            sequen = record.bind(report)(config, sequen);
            vacuum[1] = sequen;
            record = _closure1_slot14;
            config = _closure1_slot4;
            sequen = {};
            cntext = yankee.cards;
            sequen['style'] = cntext;
            papara = result.isProvisional;
            if(!papara) { _fun00010_ip = 1841; continue _fun00009 }
 1782:
            status = _closure1_slot13;
            target = _closure1_slot0;
            sierra = _closure1_slot2;
            cntext = 54;
            cntext = sierra[cntext];
            cntext = target.bind(report)(cntext);
            target = cntext.UserProfileProvisionalAccountExplainerCard;
            cntext = {};
            cntext['style'] = whisks;
            sierra = result.id;
            cntext['userId'] = sierra;
            sierra = 16;
            cntext['iconSize'] = sierra;
            papara = status.bind(report)(target, cntext);
 1841:
            cntext = new Array(10);
            cntext[0] = papara;
            target = result.id;
            papara = output.id;
            papara = target === papara;
            if(!papara) { _fun00010_ip = 1869; continue _fun00009 }
 1866:
            papara = !golfie;
 1869:
            if(!papara) { _fun00010_ip = 1933; continue _fun00009 }
 1872:
            sierra = _closure1_slot13;
            status = _closure1_slot1;
            variable39 = _closure1_slot2;
            target = 55;
            target = variable39[target];
            status = status.bind(report)(target);
            target = {};
            variable39 = function() { // Original name: handleNavigateToPremium
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 12;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.hideActionSheet;
                    michal = michal.bind(zuuluu)();
                    tangon = _closure2_slot3;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00016_ip = 56; continue _fun00015 }
 48:
                    michal = _closure2_slot3;
                    michal = michal.bind(entity)();
 56:
                    return entity;
                }
            };
            target['navigateToPremium'] = variable39;
            variable38 = function() { // Original name: handleNavigateToShop
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 12;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.hideActionSheet;
                    michal = michal.bind(zuuluu)();
                    tangon = _closure2_slot4;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00018_ip = 56; continue _fun00017 }
 48:
                    michal = _closure2_slot4;
                    michal = michal.bind(entity)();
 56:
                    return entity;
                }
            };
            target['navigateToShop'] = variable38;
            target['hasCustomProfileTheme'] = variable37;
            papara = sierra.bind(report)(status, target);
 1933:
            cntext[1] = papara;
            status = _closure1_slot13;
            target = _closure1_slot1;
            sierra = _closure1_slot2;
            papara = 56;
            papara = sierra[papara];
            target = target.bind(report)(papara);
            papara = {};
            papara['user'] = result;
            papara['currentUser'] = output;
            papara['guildId'] = equals;
            papara['style'] = whisks;
            papara = status.bind(report)(target, papara);
            cntext[2] = papara;
            target = variable36.length;
            papara = 0;
            papara = target > papara;
            if(!papara) { _fun00010_ip = 2054; continue _fun00009 }
 2004:
            sierra = _closure1_slot13;
            status = _closure1_slot1;
            variable37 = _closure1_slot2;
            target = 57;
            target = variable37[target];
            status = status.bind(report)(target);
            target = {};
            variable37 = result.id;
            target['userId'] = variable37;
            target['applicationIds'] = variable36;
            target['style'] = whisks;
            papara = sierra.bind(report)(status, target);
 2054:
            cntext[3] = papara;
            status = _closure1_slot13;
            target = _closure1_slot1;
            sierra = _closure1_slot2;
            papara = 58;
            papara = sierra[papara];
            target = target.bind(report)(papara);
            papara = {};
            sierra = result.id;
            papara['userId'] = sierra;
            papara['displayProfile'] = sizing;
            sierra = undefined;
            if(!golfie) { _fun00010_ip = 2106; continue _fun00009 }
 2103:
            sierra = quebec;
 2106:
            papara['pendingBio'] = sierra;
            papara['style'] = whisks;
            papara = status.bind(report)(target, papara);
            cntext[4] = papara;
            papara = entity != equals;
            if(!papara) { _fun00010_ip = 2181; continue _fun00009 }
 2132:
            sierra = _closure1_slot13;
            status = _closure1_slot1;
            quebec = _closure1_slot2;
            target = 59;
            target = quebec[target];
            status = status.bind(report)(target);
            target = {};
            quebec = result.id;
            target['userId'] = quebec;
            target['guildId'] = equals;
            target['style'] = whisks;
            papara = sierra.bind(report)(status, target);
 2181:
            cntext[5] = papara;
            target = entity == kiloes;
            papara = undefined;
            if(target) { _fun00010_ip = 2199; continue _fun00009 }
 2194:
            papara = kiloes.guild_id;
 2199:
            papara = entity != papara;
            if(!papara) { _fun00010_ip = 2265; continue _fun00009 }
 2206:
            sierra = _closure1_slot13;
            status = _closure1_slot1;
            equals = _closure1_slot2;
            target = 60;
            target = equals[target];
            status = status.bind(report)(target);
            target = {};
            target['user'] = result;
            target['currentUser'] = output;
            equals = kiloes.guild_id;
            target['guildId'] = equals;
            target['showUserProfile'] = limora;
            target['style'] = whisks;
            papara = sierra.bind(report)(status, target);
 2265:
            cntext[6] = papara;
            quebec = _closure1_slot13;
            target = _closure1_slot0;
            sierra = _closure1_slot2;
            papara = 61;
            status = sierra[papara];
            status = target.bind(report)(status);
            equals = status.UserProfileAccountConnectionsCard;
            status = {};
            variable36 = result.id;
            status['userId'] = variable36;
            status['style'] = whisks;
            status = quebec.bind(report)(equals, status);
            cntext[7] = status;
            status = _closure1_slot13;
            papara = sierra[papara];
            papara = target.bind(report)(papara);
            target = papara.UserProfileApplicationRoleConnectionsCard;
            papara = {};
            sierra = result.id;
            papara['userId'] = sierra;
            papara['style'] = whisks;
            papara = status.bind(report)(target, papara);
            cntext[8] = papara;
            papara = !golfie;
            if(!papara) { _fun00010_ip = 2424; continue _fun00009 }
 2374:
            sierra = _closure1_slot13;
            status = _closure1_slot1;
            equals = _closure1_slot2;
            target = 62;
            target = equals[target];
            status = status.bind(report)(target);
            target = {};
            equals = result.id;
            target['userId'] = equals;
            target['style'] = whisks;
            target['onBack'] = limora;
            papara = sierra.bind(report)(status, target);
 2424:
            cntext[9] = papara;
            sequen['children'] = cntext;
            sequen = record.bind(report)(config, sequen);
            vacuum[2] = sequen;
            update['children'] = vacuum;
            update = ctrled.bind(report)(source, update);
            foxtra[1] = update;
            option['children'] = foxtra;
            option = offset.bind(report)(verify, option);
            oscard[1] = option;
            golfie = !golfie;
            if(!golfie) { _fun00010_ip = 2662; continue _fun00009 }
 2479:
            offset = _closure1_slot14;
            verify = _closure1_slot4;
            option = {};
            yankee = yankee.bannerButtons;
            option['style'] = yankee;
            update = result.id;
            yankee = output.id;
            foxtra = null;
            if(!(update !== yankee)) { _fun00010_ip = 2590; continue _fun00009 }
 2515:
            yankee = result.bot;
            foxtra = null;
            if(yankee) { _fun00010_ip = 2590; continue _fun00009 }
 2526:
            yankee = _closure1_slot11;
            yankee = yankee.FRIEND;
            if(!(echoed !== yankee)) { _fun00010_ip = 2567; continue _fun00009 }
 2540:
            yankee = null;
            if(!backup) { _fun00010_ip = 2565; continue _fun00009 }
 2545:
            update = _closure1_slot13;
            echoed = _closure1_slot18;
            backup = {};
            backup['user'] = result;
            yankee = update.bind(report)(echoed, backup);
 2565:
            _fun00010_ip = 2587; continue _fun00009;
 2567:
            update = _closure1_slot13;
            echoed = _closure1_slot17;
            backup = {};
            backup['user'] = result;
            yankee = update.bind(report)(echoed, backup);
 2587:
            foxtra = yankee;
 2590:
            yankee = new Array(2);
            yankee[0] = foxtra;
            backup = _closure1_slot13;
            foxtra = _closure1_slot1;
            echoed = _closure1_slot2;
            romeon = 63;
            romeon = echoed[romeon];
            foxtra = foxtra.bind(report)(romeon);
            romeon = {};
            romeon['user'] = result;
            romeon['currentUser'] = output;
            romeon['displayProfile'] = sizing;
            romeon['channel'] = kiloes;
            romeon = backup.bind(report)(foxtra, romeon);
            yankee[1] = romeon;
            option['children'] = yankee;
            golfie = offset.bind(report)(verify, option);
 2662:
            oscard[2] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 2678:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 64;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/UserProfileContent.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();