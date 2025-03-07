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
        entity = entity.user;
        var _closure2_slot0 = entity;
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
        zuuluu = _closure1_slot13;
        entity = 19;
        entity = offset[entity];
        entity = verify.bind(tangon)(entity);
        michal = entity.IconButton;
        entity = {'size': 'sm', 'variant': 'secondary-overlay'};
        option = _closure1_slot13;
        oscard = 20;
        oscard = offset[oscard];
        oscard = verify.bind(tangon)(oscard);
        golfie = oscard.UserCheckIcon;
        oscard = {'size': 'sm', 'color': 'white'};
        oscard = option.bind(tangon)(golfie, oscard);
        entity['icon'] = oscard;
        oscard = 21;
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
            entity = 22;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.confirmRemoveFriend;
            michal = {};
            oscard = _closure2_slot0;
            oscard = oscard.username;
            michal['username'] = oscard;
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
            zuuluu = 23;
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
        entity = 19;
        entity = offset[entity];
        zuuluu = undefined;
        entity = verify.bind(zuuluu)(entity);
        michal = entity.IconButton;
        entity = {'size': 'sm', 'variant': 'secondary-overlay'};
        option = _closure1_slot13;
        oscard = 24;
        oscard = offset[oscard];
        oscard = verify.bind(zuuluu)(oscard);
        golfie = oscard.UserPlatformIcon;
        oscard = {'size': 'sm', 'color': 'white'};
        oscard = option.bind(zuuluu)(golfie, oscard);
        entity['icon'] = oscard;
        oscard = 21;
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
            kiloes = entity.user;
            sizing = entity.channelId;
            foxtra = entity.displayProfile;
            michal = entity.displayNameOverride;
            yankee = entity.pronounsOverride;
            offset = entity.style;
            verify = entity.badgeContainerBackground;
            report = entity.isPreviewingChanges;
            tangon = undefined;
            var _closure2_slot1 = tangon;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            entity = 25;
            entity = romeon[entity];
            zuuluu = option.bind(tangon)(entity);
            entity = zuuluu.useUserTag;
            entity = entity.bind(zuuluu)(kiloes);
            var _closure2_slot0 = entity;
            zuuluu = 26;
            zuuluu = romeon[zuuluu];
            backup = option.bind(tangon)(zuuluu);
            option = backup.useName;
            romeon = null;
            output = romeon == foxtra;
            zuuluu = undefined;
            if(output) { _fun00006_ip = 128; continue _fun00005 }
 123:
            zuuluu = foxtra.guildId;
 128:
            sizing = option.bind(backup)(zuuluu, sizing, kiloes);
            backup = sizing;
            if(!(romeon != michal)) { _fun00006_ip = 169; continue _fun00005 }
 142:
            zuuluu = michal.trim;
            zuuluu = zuuluu.bind(michal)();
            option = zuuluu.length;
            zuuluu = 0;
            backup = sizing;
            if(!(option > zuuluu)) { _fun00006_ip = 169; continue _fun00005 }
 166:
            backup = michal;
 169:
            zuuluu = _closure1_slot0;
            sizing = _closure1_slot2;
            michal = 16;
            michal = sizing[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useUserProfileAnalyticsContext;
            michal = michal.bind(zuuluu)();
            output = michal.trackUserProfileAction;
            _closure2_slot1 = output;
            option = _closure1_slot3;
            zuuluu = option.useCallback;
            michal = new Array(2);
            michal[0] = output;
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
                report = 27;
                report = tangon[report];
                oscard = zuuluu.bind(entity)(report);
                report = oscard.copy;
                michal = _closure2_slot0;
                michal = report.bind(oscard)(michal);
                michal = 28;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.presentUsernameCopied;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            option = zuuluu.bind(option)(entity, michal);
            zuuluu = _closure1_slot13;
            michal = _closure1_slot1;
            entity = 29;
            entity = sizing[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['user'] = kiloes;
            sizing = romeon == foxtra;
            kiloes = undefined;
            if(sizing) { _fun00006_ip = 283; continue _fun00005 }
 278:
            kiloes = foxtra.guildId;
 283:
            entity['guildId'] = kiloes;
            entity['displayName'] = backup;
            if(!(romeon == yankee)) { _fun00006_ip = 313; continue _fun00005 }
 295:
            backup = romeon == foxtra;
            romeon = undefined;
            if(backup) { _fun00006_ip = 310; continue _fun00005 }
 304:
            romeon = foxtra.pronouns;
 310:
            yankee = romeon;
 313:
            entity['pronouns'] = yankee;
            entity['style'] = offset;
            entity['badgeContainerBackground'] = verify;
            verify = undefined;
            if(report) { _fun00006_ip = 335; continue _fun00005 }
 332:
            verify = option;
 335:
            entity['onPressDisplayName'] = verify;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 21;
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
            if(report) { _fun00006_ip = 408; continue _fun00005 }
 405:
            oscard = option;
 408:
            entity['onPressUserTag'] = oscard;
            oscard = undefined;
            if(report) { _fun00006_ip = 425; continue _fun00005 }
 418:
            oscard = function() {
                zuuluu = _closure2_slot1;
                michal = {};
                entity = 'PRESS_PRONOUNS';
                michal['action'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 28;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.presentUserPronouns;
                michal = michal.bind(zuuluu)();
                return entity;
            };
 425:
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
            entity = 30;
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
            entity = 31;
            entity = echoed[entity];
            michal = update.bind(tangon)(entity);
            entity = {};
            report = report.primaryButtons;
            entity['style'] = report;
            report = _closure1_slot12;
            entity['maxWidth'] = report;
            backup = _closure1_slot13;
            oscard = 32;
            report = echoed[oscard];
            report = verify.bind(tangon)(report);
            foxtra = report.Button;
            option = {};
            romeon = 'primary';
            option['variant'] = romeon;
            kiloes = _closure1_slot13;
            yankee = 33;
            report = echoed[yankee];
            report = verify.bind(tangon)(report);
            verify = report.PencilIcon;
            report = {};
            result = 'sm';
            report['size'] = result;
            sizing = 34;
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
            verify = 21;
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
            kiloes = 21;
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
                zuuluu = 35;
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
            yankee = 21;
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
                zuuluu = 35;
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
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot13 = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsxs;
    var _closure1_slot14 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
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
            whisks = entity.showUserProfileActionSheet;
            var _closure2_slot2 = whisks;
            variable42 = entity.disableCalls;
            variable41 = entity.disableMessage;
            vacuum = entity.disableStatus;
            golfie = entity.isPreviewingChanges;
            variable43 = entity.friendToken;
            variable40 = entity.location;
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
            michal = 36;
            michal = entity[michal];
            tangon = zuuluu.bind(report)(michal);
            michal = _closure1_slot12;
            offset = tangon.bind(report)(michal);
            michal = 37;
            michal = entity[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.bind(report)();
            papara = michal.bottom;
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
            target = undefined;
            if(zuuluu) { _fun00010_ip = 235; continue _fun00009 }
 230:
            target = output.id;
 235:
            record = result.id;
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
            update = zuuluu.relationshipType;
            variable46 = zuuluu.originApplicationId;
            zuuluu = 38;
            zuuluu = oscard[zuuluu];
            verify = tangon.bind(report)(zuuluu);
            option = verify.useIncomingGameRelationshipsForUser;
            zuuluu = result.id;
            limora = option.bind(verify)(zuuluu);
            zuuluu = 39;
            zuuluu = oscard[zuuluu];
            verify = tangon.bind(report)(zuuluu);
            option = verify.useIsGameFriends;
            zuuluu = result.id;
            backup = option.bind(verify)(zuuluu);
            zuuluu = 40;
            zuuluu = oscard[zuuluu];
            foxtra = tangon.bind(report)(zuuluu);
            verify = foxtra.useUserProfileGameFriendApplicationIds;
            zuuluu = {};
            option = result.id;
            zuuluu['userId'] = option;
            option = 'UserProfileModalBody';
            zuuluu['location'] = option;
            variable36 = verify.bind(foxtra)(zuuluu);
            zuuluu = 41;
            zuuluu = oscard[zuuluu];
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.useIsFriendTiersUIEnabled;
            zuuluu = {};
            zuuluu['location'] = option;
            echoed = tangon.bind(oscard)(zuuluu);
            if(!(entity == sizing)) { _fun00010_ip = 449; continue _fun00009 }
 433:
            zuuluu = entity == kiloes;
            variable39 = undefined;
            if(zuuluu) { _fun00010_ip = 447; continue _fun00009 }
 442:
            variable39 = kiloes.guild_id;
 447:
            _fun00010_ip = 469; continue _fun00009;
 449:
            tangon = sizing.guildId;
            oscard = entity != tangon;
            zuuluu = undefined;
            if(!oscard) { _fun00010_ip = 466; continue _fun00009 }
 463:
            zuuluu = tangon;
 466:
            variable39 = zuuluu;
 469:
            _closure2_slot5 = variable39;
            option = _closure1_slot3;
            oscard = option.useMemo;
            tangon = new Array(2);
            tangon[0] = variable39;
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
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 42;
            zuuluu = tangon[zuuluu];
            option = oscard.bind(report)(zuuluu);
            zuuluu = option.useSubscribeGuildMembers;
            zuuluu = zuuluu.bind(option)(verify);
            zuuluu = _closure1_slot1;
            option = 43;
            option = tangon[option];
            verify = zuuluu.bind(report)(option);
            option = result.id;
            cntext = verify.bind(report)(option);
            michal = tangon[michal];
            foxtra = oscard.bind(report)(michal);
            verify = foxtra.useStateFromStoresObject;
            michal = _closure1_slot7;
            option = new Array(1);
            option[0] = michal;
            michal = function() {
                michal = _closure1_slot7;
                entity = michal.getAllPending;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = verify.bind(foxtra)(option, michal);
            ctrled = michal.pendingBanner;
            verify = michal.pendingAvatarV2;
            variable44 = michal.pendingAvatarDecoration;
            variable47 = michal.pendingGlobalName;
            variable45 = michal.pendingPronouns;
            quebec = michal.pendingBio;
            source = michal.pendingAccentColor;
            foxtra = michal.pendingThemeColors;
            michal = 44;
            michal = tangon[michal];
            option = oscard.bind(report)(michal);
            oscard = option.getPendingAvatarSrc;
            michal = {};
            sequen = result.id;
            michal['userId'] = sequen;
            michal['image'] = verify;
            variable48 = oscard.bind(option)(michal);
            michal = 45;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['user'] = result;
            michal['displayProfile'] = sizing;
            tangon = undefined;
            if(!golfie) { _fun00010_ip = 722; continue _fun00009 }
 719:
            tangon = foxtra;
 722:
            michal['pendingThemeColors'] = tangon;
            michal = zuuluu.bind(report)(michal);
            oscard = michal.theme;
            config = michal.primaryColor;
            sequen = michal.secondaryColor;
            variable37 = entity != config;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 46;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.useUserProfileColors;
            michal = {};
            michal['theme'] = oscard;
            michal['primaryColor'] = config;
            michal['secondaryColor'] = sequen;
            michal = zuuluu.bind(tangon)(michal);
            status = michal.gradientFallbackBackground;
            variable49 = michal.avatarBackground;
            sierra = michal.containerBackground;
            if(!(entity != result)) { _fun00010_ip = 2696; continue _fun00009 }
 827:
            if(!(entity != output)) { _fun00010_ip = 2696; continue _fun00009 }
 834:
            equals = {};
            equals['backgroundColor'] = sierra;
            _closure2_slot6 = equals;
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
            if(!golfie) { _fun00010_ip = 902; continue _fun00009 }
 899:
            offset = ctrled;
 902:
            oscard['pendingBanner'] = offset;
            offset = undefined;
            if(!golfie) { _fun00010_ip = 915; continue _fun00009 }
 912:
            offset = variable48;
 915:
            oscard['pendingAvatarSrc'] = offset;
            offset = undefined;
            if(!golfie) { _fun00010_ip = 937; continue _fun00009 }
 925:
            ctrled = entity != source;
            offset = undefined;
            if(!ctrled) { _fun00010_ip = 937; continue _fun00009 }
 934:
            offset = source;
 937:
            oscard['pendingAccentColor'] = offset;
            offset = undefined;
            if(!golfie) { _fun00010_ip = 959; continue _fun00009 }
 947:
            source = entity != foxtra;
            offset = undefined;
            if(!source) { _fun00010_ip = 959; continue _fun00009 }
 956:
            offset = foxtra;
 959:
            oscard['pendingThemeColors'] = offset;
            oscard['disableInteraction'] = golfie;
            option = verify.bind(report)(option, oscard);
            oscard = new Array(3);
            oscard[0] = option;
            offset = _closure1_slot14;
            verify = _closure1_slot4;
            option = {};
            ctrled = _closure1_slot13;
            source = _closure1_slot1;
            variable50 = _closure1_slot2;
            foxtra = 48;
            foxtra = variable50[foxtra];
            source = source.bind(report)(foxtra);
            foxtra = {};
            foxtra['backgroundColor'] = variable49;
            foxtra['user'] = result;
            foxtra['guildId'] = variable39;
            foxtra['disableStatus'] = vacuum;
            vacuum = undefined;
            if(!golfie) { _fun00010_ip = 1044; continue _fun00009 }
 1041:
            vacuum = variable48;
 1044:
            foxtra['pendingAvatarSrc'] = vacuum;
            vacuum = undefined;
            if(!golfie) { _fun00010_ip = 1057; continue _fun00009 }
 1054:
            vacuum = variable44;
 1057:
            foxtra['pendingAvatarDecoration'] = vacuum;
            source = ctrled.bind(report)(source, foxtra);
            foxtra = new Array(2);
            foxtra[0] = source;
            vacuum = _closure1_slot14;
            ctrled = _closure1_slot1;
            variable44 = _closure1_slot2;
            source = 49;
            source = variable44[source];
            ctrled = ctrled.bind(report)(source);
            source = {};
            source['fallbackBackground'] = status;
            source['primaryColor'] = config;
            source['secondaryColor'] = sequen;
            config = yankee.profileContent;
            sequen = new Array(2);
            sequen[0] = config;
            config = {};
            if(!(target === record)) { _fun00010_ip = 1142; continue _fun00009 }
 1137:
            record = 0;
            if(!golfie) { _fun00010_ip = 1155; continue _fun00009 }
 1142:
            target = entity != cntext;
            record = 0;
            if(target) { _fun00010_ip = 1155; continue _fun00009 }
 1151:
            record = _closure1_slot10;
 1155:
            config['paddingTop'] = record;
            record = _closure1_slot9;
            record = papara + record;
            config['paddingBottom'] = record;
            sequen[1] = config;
            source['containerStyle'] = sequen;
            record = _closure1_slot13;
            config = _closure1_slot16;
            sequen = {};
            sequen['customStatusActivity'] = cntext;
            sequen['user'] = result;
            sequen['guildId'] = variable39;
            papara = entity == kiloes;
            cntext = undefined;
            if(papara) { _fun00010_ip = 1219; continue _fun00009 }
 1214:
            cntext = kiloes.id;
 1219:
            sequen['channelId'] = cntext;
            sequen['hasCustomProfileTheme'] = variable37;
            sequen['showUserProfileActionSheet'] = whisks;
            sequen['isPreviewingChanges'] = golfie;
            config = record.bind(report)(config, sequen);
            sequen = new Array(3);
            sequen[0] = config;
            cntext = _closure1_slot14;
            record = _closure1_slot4;
            config = {};
            papara = yankee.primaryInfo;
            config['style'] = papara;
            status = _closure1_slot13;
            target = _closure1_slot19;
            papara = {};
            papara['user'] = result;
            variable48 = entity == kiloes;
            variable44 = undefined;
            if(variable48) { _fun00010_ip = 1300; continue _fun00009 }
 1295:
            variable44 = kiloes.id;
 1300:
            papara['channelId'] = variable44;
            papara['displayProfile'] = sizing;
            variable44 = undefined;
            if(!golfie) { _fun00010_ip = 1317; continue _fun00009 }
 1314:
            variable44 = variable47;
 1317:
            papara['displayNameOverride'] = variable44;
            variable44 = undefined;
            if(!golfie) { _fun00010_ip = 1330; continue _fun00009 }
 1327:
            variable44 = variable45;
 1330:
            papara['pronounsOverride'] = variable44;
            papara['badgeContainerBackground'] = sierra;
            papara['isPreviewingChanges'] = golfie;
            target = status.bind(report)(target, papara);
            papara = new Array(7);
            papara[0] = target;
            status = result.id;
            target = output.id;
            target = status !== target;
            if(!target) { _fun00010_ip = 1416; continue _fun00009 }
 1376:
            variable44 = _closure1_slot13;
            sierra = _closure1_slot1;
            variable45 = _closure1_slot2;
            status = 50;
            status = variable45[status];
            sierra = sierra.bind(report)(status);
            status = {};
            status['user'] = result;
            status['guildId'] = variable39;
            target = variable44.bind(report)(sierra, status);
 1416:
            papara[1] = target;
            target = _closure1_slot11;
            target = target.PENDING_INCOMING;
            target = update === target;
            if(!target) { _fun00010_ip = 1516; continue _fun00009 }
 1437:
            variable44 = _closure1_slot13;
            sierra = _closure1_slot1;
            variable45 = _closure1_slot2;
            status = 51;
            status = variable45[status];
            sierra = sierra.bind(report)(status);
            status = {};
            status['user'] = result;
            variable47 = entity == kiloes;
            variable45 = undefined;
            if(variable47) { _fun00010_ip = 1481; continue _fun00009 }
 1476:
            variable45 = kiloes.id;
 1481:
            status['channelId'] = variable45;
            status['guildId'] = variable39;
            variable45 = undefined;
            if(!echoed) { _fun00010_ip = 1497; continue _fun00009 }
 1494:
            variable45 = variable46;
 1497:
            status['applicationId'] = variable45;
            status['style'] = equals;
            status['showUserProfile'] = whisks;
            target = variable44.bind(report)(sierra, status);
 1516:
            papara[2] = target;
            target = echoed;
            if(!target) { _fun00010_ip = 1543; continue _fun00009 }
 1526:
            sierra = limora.map;
            status = function(argFoo) {
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
            target = sierra.bind(limora)(status);
 1543:
            papara[3] = target;
            sierra = _closure1_slot13;
            status = _closure1_slot1;
            limora = _closure1_slot2;
            target = 52;
            target = limora[target];
            status = status.bind(report)(target);
            target = {};
            target['user'] = result;
            target['style'] = equals;
            target = sierra.bind(report)(status, target);
            papara[4] = target;
            status = result.id;
            target = output.id;
            target = status === target;
            if(!target) { _fun00010_ip = 1611; continue _fun00009 }
 1608:
            target = !golfie;
 1611:
            if(!target) { _fun00010_ip = 1634; continue _fun00009 }
 1614:
            limora = _closure1_slot13;
            sierra = _closure1_slot20;
            status = {};
            status['guildId'] = variable39;
            target = limora.bind(report)(sierra, status);
 1634:
            papara[5] = target;
            status = result.id;
            target = output.id;
            target = status !== target;
            if(!target) { _fun00010_ip = 1751; continue _fun00009 }
 1655:
            limora = _closure1_slot13;
            sierra = _closure1_slot1;
            variable44 = _closure1_slot2;
            status = 53;
            status = variable44[status];
            sierra = sierra.bind(report)(status);
            status = {};
            status['user'] = result;
            status['friendToken'] = variable43;
            if(variable42) { _fun00010_ip = 1707; continue _fun00009 }
 1693:
            variable43 = _closure1_slot11;
            variable43 = variable43.BLOCKED;
            variable42 = update === variable43;
 1707:
            if(variable42) { _fun00010_ip = 1716; continue _fun00009 }
 1710:
            variable42 = result.isProvisional;
 1716:
            status['disableCalls'] = variable42;
            status['disableMessage'] = variable41;
            status['location'] = variable40;
            status['hasCustomProfileTheme'] = variable37;
            variable40 = yankee.primaryButtons;
            status['style'] = variable40;
            target = limora.bind(report)(sierra, status);
 1751:
            papara[6] = target;
            config['children'] = papara;
            config = cntext.bind(report)(record, config);
            sequen[1] = config;
            cntext = _closure1_slot14;
            record = _closure1_slot4;
            config = {};
            papara = yankee.cards;
            config['style'] = papara;
            target = result.isProvisional;
            if(!target) { _fun00010_ip = 1857; continue _fun00009 }
 1798:
            sierra = _closure1_slot13;
            status = _closure1_slot0;
            limora = _closure1_slot2;
            papara = 54;
            papara = limora[papara];
            papara = status.bind(report)(papara);
            status = papara.UserProfileProvisionalAccountExplainerCard;
            papara = {};
            papara['style'] = equals;
            limora = result.id;
            papara['userId'] = limora;
            limora = 16;
            papara['iconSize'] = limora;
            target = sierra.bind(report)(status, papara);
 1857:
            papara = new Array(9);
            papara[0] = target;
            status = result.id;
            target = output.id;
            target = status === target;
            if(!target) { _fun00010_ip = 1885; continue _fun00009 }
 1882:
            target = !golfie;
 1885:
            if(!target) { _fun00010_ip = 1949; continue _fun00009 }
 1888:
            limora = _closure1_slot13;
            sierra = _closure1_slot1;
            variable40 = _closure1_slot2;
            status = 55;
            status = variable40[status];
            sierra = sierra.bind(report)(status);
            status = {};
            variable40 = function() { // Original name: handleNavigateToPremium
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
            status['navigateToPremium'] = variable40;
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
            status['navigateToShop'] = variable38;
            status['hasCustomProfileTheme'] = variable37;
            target = limora.bind(report)(sierra, status);
 1949:
            papara[1] = target;
            sierra = _closure1_slot13;
            status = _closure1_slot1;
            limora = _closure1_slot2;
            target = 56;
            target = limora[target];
            status = status.bind(report)(target);
            target = {};
            target['user'] = result;
            target['currentUser'] = output;
            target['guildId'] = variable39;
            target['style'] = equals;
            target = sierra.bind(report)(status, target);
            papara[2] = target;
            status = variable36.length;
            target = 0;
            target = status > target;
            if(!target) { _fun00010_ip = 2070; continue _fun00009 }
 2020:
            limora = _closure1_slot13;
            sierra = _closure1_slot1;
            variable37 = _closure1_slot2;
            status = 57;
            status = variable37[status];
            sierra = sierra.bind(report)(status);
            status = {};
            variable37 = result.id;
            status['userId'] = variable37;
            status['applicationIds'] = variable36;
            status['style'] = equals;
            target = limora.bind(report)(sierra, status);
 2070:
            papara[3] = target;
            sierra = _closure1_slot13;
            status = _closure1_slot1;
            limora = _closure1_slot2;
            target = 58;
            target = limora[target];
            status = status.bind(report)(target);
            target = {};
            limora = result.id;
            target['userId'] = limora;
            target['displayProfile'] = sizing;
            limora = undefined;
            if(!golfie) { _fun00010_ip = 2122; continue _fun00009 }
 2119:
            limora = quebec;
 2122:
            target['pendingBio'] = limora;
            target['style'] = equals;
            target = sierra.bind(report)(status, target);
            papara[4] = target;
            target = entity != variable39;
            if(!target) { _fun00010_ip = 2278; continue _fun00009 }
 2151:
            limora = _closure1_slot14;
            sierra = _closure1_slot15;
            status = {};
            variable38 = _closure1_slot13;
            variable37 = _closure1_slot1;
            variable40 = _closure1_slot2;
            quebec = 59;
            quebec = variable40[quebec];
            variable36 = variable37.bind(report)(quebec);
            quebec = {};
            variable41 = result.id;
            quebec['userId'] = variable41;
            quebec['guildId'] = variable39;
            quebec['style'] = equals;
            variable36 = variable38.bind(report)(variable36, quebec);
            quebec = new Array(2);
            quebec[0] = variable36;
            variable38 = _closure1_slot13;
            variable36 = 60;
            variable36 = variable40[variable36];
            variable37 = variable37.bind(report)(variable36);
            variable36 = {};
            variable36['user'] = result;
            variable36['currentUser'] = output;
            variable36['guildId'] = variable39;
            variable36['showUserProfile'] = whisks;
            variable36['style'] = equals;
            variable36 = variable38.bind(report)(variable37, variable36);
            quebec[1] = variable36;
            status['children'] = quebec;
            target = limora.bind(report)(sierra, status);
 2278:
            papara[5] = target;
            variable36 = _closure1_slot13;
            status = _closure1_slot0;
            limora = _closure1_slot2;
            target = 61;
            sierra = limora[target];
            sierra = status.bind(report)(sierra);
            quebec = sierra.UserProfileAccountConnectionsCard;
            sierra = {};
            variable37 = result.id;
            sierra['userId'] = variable37;
            sierra['style'] = equals;
            sierra = variable36.bind(report)(quebec, sierra);
            papara[6] = sierra;
            sierra = _closure1_slot13;
            target = limora[target];
            target = status.bind(report)(target);
            status = target.UserProfileApplicationRoleConnectionsCard;
            target = {};
            limora = result.id;
            target['userId'] = limora;
            target['style'] = equals;
            target = sierra.bind(report)(status, target);
            papara[7] = target;
            target = !golfie;
            if(!target) { _fun00010_ip = 2437; continue _fun00009 }
 2387:
            limora = _closure1_slot13;
            sierra = _closure1_slot1;
            quebec = _closure1_slot2;
            status = 62;
            status = quebec[status];
            sierra = sierra.bind(report)(status);
            status = {};
            quebec = result.id;
            status['userId'] = quebec;
            status['style'] = equals;
            status['onBack'] = whisks;
            target = limora.bind(report)(sierra, status);
 2437:
            papara[8] = target;
            config['children'] = papara;
            config = cntext.bind(report)(record, config);
            sequen[2] = config;
            source['children'] = sequen;
            source = vacuum.bind(report)(ctrled, source);
            foxtra[1] = source;
            option['children'] = foxtra;
            option = offset.bind(report)(verify, option);
            oscard[1] = option;
            golfie = !golfie;
            if(!golfie) { _fun00010_ip = 2680; continue _fun00009 }
 2492:
            offset = _closure1_slot14;
            verify = _closure1_slot4;
            option = {};
            yankee = yankee.bannerButtons;
            option['style'] = yankee;
            source = result.id;
            yankee = output.id;
            foxtra = null;
            if(!(source !== yankee)) { _fun00010_ip = 2608; continue _fun00009 }
 2528:
            yankee = result.bot;
            foxtra = null;
            if(yankee) { _fun00010_ip = 2608; continue _fun00009 }
 2539:
            yankee = _closure1_slot11;
            yankee = yankee.FRIEND;
            if(!(update !== yankee)) { _fun00010_ip = 2585; continue _fun00009 }
 2553:
            yankee = null;
            if(!echoed) { _fun00010_ip = 2583; continue _fun00009 }
 2558:
            yankee = null;
            if(!backup) { _fun00010_ip = 2583; continue _fun00009 }
 2563:
            update = _closure1_slot13;
            echoed = _closure1_slot18;
            backup = {};
            backup['user'] = result;
            yankee = update.bind(report)(echoed, backup);
 2583:
            _fun00010_ip = 2605; continue _fun00009;
 2585:
            update = _closure1_slot13;
            echoed = _closure1_slot17;
            backup = {};
            backup['user'] = result;
            yankee = update.bind(report)(echoed, backup);
 2605:
            foxtra = yankee;
 2608:
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
 2680:
            oscard[2] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 2696:
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