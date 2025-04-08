// app/modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: handleInviteDisabledPress
        tangon = _closure1_slot3;
        zuuluu = tangon.lazy;
        entity = function() {
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            michal = 9;
            michal = entity[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = 8;
            michal = entity[michal];
            entity = entity.paths;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        oscard = zuuluu.bind(tangon)(entity);
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 10;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.openAlert;
        zuuluu = _closure1_slot8;
        michal = {};
        zuuluu = zuuluu.bind(entity)(oscard, michal);
        michal = 'invites-disabled';
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: GuildSearchAndInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.guildId;
            offset = entity.canInvite;
            var _closure2_slot0 = offset;
            foxtra = entity.invitesDisabled;
            var _closure2_slot1 = foxtra;
            kiloes = entity.onInvitePress;
            var _closure2_slot2 = kiloes;
            yankee = entity.onEventsPress;
            var _closure2_slot3 = yankee;
            golfie = entity.hasUnreadEvents;
            var _closure2_slot4 = golfie;
            source = entity.useEventsButton;
            var _closure2_slot5 = source;
            entity = entity.useButtonComponent;
            zuuluu = _closure1_slot10;
            tangon = undefined;
            romeon = zuuluu.bind(tangon)(entity);
            var _closure2_slot6 = romeon;
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 11;
            zuuluu = oscard[zuuluu];
            report = option.bind(tangon)(zuuluu);
            zuuluu = report.useNavigation;
            zuuluu = zuuluu.bind(report)();
            var _closure2_slot7 = zuuluu;
            zuuluu = 12;
            zuuluu = oscard[zuuluu];
            report = option.bind(tangon)(zuuluu);
            zuuluu = report.useGuildSearchContext;
            zuuluu = zuuluu.bind(report)(verify);
            var _closure2_slot8 = zuuluu;
            report = _closure1_slot1;
            zuuluu = 13;
            zuuluu = oscard[zuuluu];
            verify = report.bind(tangon)(zuuluu);
            zuuluu = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.navigateToSearch;
                tangon = _closure2_slot7;
                zuuluu = _closure2_slot8;
                michal = {};
                golfie = true;
                michal['prefetch'] = golfie;
                michal = report.bind(oscard)(tangon, zuuluu, michal);
                return entity;
            };
            update = verify.bind(tangon)(zuuluu);
            var _closure2_slot9 = update;
            zuuluu = 15;
            zuuluu = oscard[zuuluu];
            verify = option.bind(tangon)(zuuluu);
            option = verify.useIOSPressEffects;
            zuuluu = 4;
            zuuluu = option.bind(verify)(zuuluu);
            echoed = zuuluu.onPressIn;
            result = zuuluu.onPressOut;
            sizing = zuuluu.pressableStyles;
            zuuluu = 16;
            zuuluu = oscard[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            output = zuuluu.bind(tangon)();
            var _closure2_slot10 = output;
            option = _closure1_slot3;
            oscard = option.useMemo;
            report = new Array(2);
            report[0] = update;
            report[1] = output;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot8;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 17;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.Button;
                    entity = {'variant': null, 'grow': true, 'shrink': true, 'size': 'sm'};
                    option = _closure2_slot10;
                    golfie = 'secondary';
                    if(!option) { _fun00004_ip = 69; continue _fun00003 }
 63:
                    golfie = 'tertiary';
 69:
                    entity['variant'] = golfie;
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    golfie = 18;
                    golfie = verify[golfie];
                    golfie = option.bind(zuuluu)(golfie);
                    entity['icon'] = golfie;
                    oscard = _closure2_slot9;
                    entity['onPress'] = oscard;
                    option = _closure1_slot0;
                    report = 19;
                    oscard = verify[report];
                    oscard = option.bind(zuuluu)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    report = verify[report];
                    report = option.bind(zuuluu)(report);
                    report = report.t;
                    report = report.5h0QOD;
                    report = oscard.bind(golfie)(report);
                    entity['text'] = report;
                    report = 2;
                    entity['maxFontSizeMultiplier'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                }
            };
            verify = oscard.bind(option)(zuuluu, report);
            option = _closure1_slot3;
            oscard = option.useMemo;
            report = new Array(4);
            report[0] = offset;
            report[1] = foxtra;
            report[2] = output;
            report[3] = kiloes;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = null;
                    if(!michal) { _fun00006_ip = 199; continue _fun00005 }
 15:
                    report = _closure1_slot8;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 20;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.IconButton;
                    michal = {};
                    verify = _closure2_slot10;
                    option = 'secondary';
                    if(!verify) { _fun00006_ip = 69; continue _fun00005 }
 63:
                    option = 'tertiary';
 69:
                    michal['variant'] = option;
                    option = 'sm';
                    michal['size'] = option;
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    option = 21;
                    option = yankee[option];
                    option = verify.bind(tangon)(option);
                    michal['icon'] = option;
                    option = _closure2_slot2;
                    michal['onPress'] = option;
                    option = _closure1_slot11;
                    michal['onPressDisabled'] = option;
                    offset = _closure1_slot0;
                    golfie = 19;
                    option = yankee[golfie];
                    option = offset.bind(tangon)(option);
                    verify = option.intl;
                    option = verify.string;
                    golfie = yankee[golfie];
                    golfie = offset.bind(tangon)(golfie);
                    golfie = golfie.t;
                    golfie = golfie.VINpSE;
                    golfie = option.bind(verify)(golfie);
                    michal['accessibilityLabel'] = golfie;
                    oscard = _closure2_slot1;
                    michal['disabled'] = oscard;
                    oscard = 2;
                    michal['maxFontSizeMultiplier'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 199:
                    return entity;
                }
            };
            option = oscard.bind(option)(zuuluu, report);
            oscard = _closure1_slot3;
            report = oscard.useMemo;
            zuuluu = new Array(5);
            zuuluu[0] = source;
            zuuluu[1] = output;
            zuuluu[2] = yankee;
            zuuluu[3] = golfie;
            golfie = romeon.badge;
            zuuluu[4] = golfie;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot5;
                    entity = null;
                    if(!michal) { _fun00008_ip = 251; continue _fun00007 }
 15:
                    report = _closure1_slot9;
                    tangon = _closure1_slot4;
                    zuuluu = {};
                    verify = _closure1_slot8;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 20;
                    oscard = oscard[michal];
                    michal = undefined;
                    oscard = golfie.bind(michal)(oscard);
                    golfie = oscard.IconButton;
                    oscard = {};
                    romeon = _closure2_slot10;
                    offset = 'secondary';
                    if(!romeon) { _fun00008_ip = 79; continue _fun00007 }
 73:
                    offset = 'tertiary';
 79:
                    oscard['variant'] = offset;
                    offset = 'sm';
                    oscard['size'] = offset;
                    romeon = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    offset = 22;
                    offset = kiloes[offset];
                    offset = romeon.bind(michal)(offset);
                    oscard['icon'] = offset;
                    backup = _closure1_slot0;
                    offset = 19;
                    romeon = kiloes[offset];
                    romeon = backup.bind(michal)(romeon);
                    foxtra = romeon.intl;
                    romeon = foxtra.string;
                    offset = kiloes[offset];
                    offset = backup.bind(michal)(offset);
                    offset = offset.t;
                    offset = offset.tlopTE;
                    offset = romeon.bind(foxtra)(offset);
                    oscard['accessibilityLabel'] = offset;
                    offset = _closure2_slot3;
                    oscard['onPress'] = offset;
                    offset = 2;
                    oscard['maxFontSizeMultiplier'] = offset;
                    golfie = verify.bind(michal)(golfie, oscard);
                    oscard = new Array(2);
                    oscard[0] = golfie;
                    golfie = _closure2_slot4;
                    if(!golfie) { _fun00008_ip = 237; continue _fun00007 }
 207:
                    offset = _closure1_slot8;
                    verify = _closure1_slot4;
                    option = {};
                    yankee = _closure2_slot6;
                    yankee = yankee.badge;
                    option['style'] = yankee;
                    golfie = offset.bind(michal)(verify, option);
 237:
                    oscard[1] = golfie;
                    zuuluu['children'] = oscard;
                    entity = report.bind(michal)(tangon, zuuluu);
 251:
                    return entity;
                }
            };
            golfie = report.bind(oscard)(michal, zuuluu);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot4;
            report = {};
            oscard = romeon.container;
            report['style'] = oscard;
            if(entity) { _fun00002_ip = 680; continue _fun00001 }
 404:
            yankee = _closure1_slot8;
            oscard = _closure1_slot1;
            source = _closure1_slot2;
            entity = 23;
            entity = source[entity];
            entity = oscard.bind(tangon)(entity);
            oscard = entity.View;
            entity = {};
            output = romeon.search;
            romeon = new Array(2);
            romeon[0] = output;
            romeon[1] = sizing;
            entity['style'] = romeon;
            output = _closure1_slot8;
            sizing = _closure1_slot0;
            romeon = 24;
            romeon = source[romeon];
            romeon = sizing.bind(tangon)(romeon);
            sizing = romeon.SearchButtonContent;
            romeon = {};
            romeon['onPress'] = update;
            romeon['onPressIn'] = echoed;
            romeon['onPressOut'] = result;
            romeon = output.bind(tangon)(sizing, romeon);
            entity['children'] = romeon;
            oscard = yankee.bind(tangon)(oscard, entity);
            entity = new Array(2);
            entity[0] = oscard;
            oscard = null;
            if(!offset) { _fun00002_ip = 667; continue _fun00001 }
 531:
            romeon = _closure1_slot8;
            output = _closure1_slot0;
            result = _closure1_slot2;
            offset = 20;
            offset = result[offset];
            offset = output.bind(tangon)(offset);
            yankee = offset.IconButton;
            offset = {};
            sizing = 'tertiary';
            offset['variant'] = sizing;
            echoed = _closure1_slot1;
            sizing = 21;
            sizing = result[sizing];
            sizing = echoed.bind(tangon)(sizing);
            offset['icon'] = sizing;
            offset['onPress'] = kiloes;
            backup = _closure1_slot11;
            offset['onPressDisabled'] = backup;
            backup = 19;
            kiloes = result[backup];
            kiloes = output.bind(tangon)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            backup = result[backup];
            backup = output.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.VINpSE;
            backup = kiloes.bind(sizing)(backup);
            offset['accessibilityLabel'] = backup;
            offset['disabled'] = foxtra;
            oscard = romeon.bind(tangon)(yankee, offset);
 667:
            entity[1] = oscard;
            report['children'] = entity;
            entity = report;
            _fun00002_ip = 703; continue _fun00001;
 680:
            oscard = new Array(3);
            oscard[0] = verify;
            oscard[1] = option;
            oscard[2] = golfie;
            report['children'] = oscard;
            entity = report;
 703:
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SEARCH_BAR_MARGIN_BOTTOM;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot8 = option;
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = function(argFoo) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = {};
            michal = {};
            golfie = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 7;
            tangon = tangon[oscard];
            report = undefined;
            tangon = golfie.bind(report)(tangon);
            tangon = tangon.spacing;
            tangon = tangon.PX_16;
            michal['paddingHorizontal'] = tangon;
            tangon = _closure1_slot7;
            michal['marginBottom'] = tangon;
            tangon = 'row';
            michal['flexDirection'] = tangon;
            tangon = 10;
            golfie = argFoo;
            if(!golfie) { _fun00010_ip = 96; continue _fun00009 }
 68:
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            golfie = golfie[oscard];
            golfie = option.bind(report)(golfie);
            golfie = golfie.spacing;
            tangon = golfie.PX_12;
 96:
            michal['gap'] = tangon;
            entity['container'] = michal;
            michal = {};
            tangon = 1;
            michal['flex'] = tangon;
            entity['search'] = michal;
            michal = {'position': 'absolute', 'right': 0, 'top': 0, 'width': 8, 'height': 8};
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            golfie = zuuluu[oscard];
            golfie = tangon.bind(report)(golfie);
            golfie = golfie.radii;
            golfie = golfie.round;
            michal['borderRadius'] = golfie;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.colors;
            zuuluu = zuuluu.BG_BRAND;
            michal['backgroundColor'] = zuuluu;
            entity['badge'] = michal;
            return entity;
        }
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot10 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: ConnectedGuildSearchAndInviteInner
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            backup = entity.guild;
            var _closure2_slot0 = backup;
            report = entity.useButtonComponent;
            tangon = undefined;
            if(!(report === tangon)) { _fun00012_ip = 28; continue _fun00011 }
 26:
            report = false;
 28:
            oscard = entity.useEventsButton;
            if(!(oscard === tangon)) { _fun00012_ip = 40; continue _fun00011 }
 38:
            oscard = false;
 40:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 25;
            zuuluu = option[zuuluu];
            romeon = golfie.bind(tangon)(zuuluu);
            yankee = romeon.useStateFromStores;
            zuuluu = _closure1_slot5;
            offset = new Array(1);
            offset[0] = zuuluu;
            verify = new Array(1);
            verify[0] = backup;
            zuuluu = function() {
                report = _closure1_slot5;
                zuuluu = report.getChannels;
                tangon = _closure2_slot0;
                michal = tangon.id;
                zuuluu = zuuluu.bind(report)(michal);
                report = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 26;
                michal = michal[entity];
                entity = undefined;
                michal = report.bind(entity)(michal);
                entity = michal.shouldRenderInvite;
                entity = entity.bind(michal)(zuuluu, tangon);
                return entity;
            };
            foxtra = yankee.bind(romeon)(offset, zuuluu, verify);
            zuuluu = _closure1_slot1;
            verify = 13;
            verify = option[verify];
            verify = zuuluu.bind(tangon)(verify);
            michal = function() {
                tangon = _closure1_slot6;
                zuuluu = tangon.getChannelId;
                golfie = _closure2_slot0;
                michal = golfie.id;
                offset = zuuluu.bind(tangon)(michal);
                tangon = _closure1_slot5;
                zuuluu = tangon.getChannels;
                michal = golfie.id;
                verify = zuuluu.bind(tangon)(michal);
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 27;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.handleOpenInviteActionsheet;
                option = 'Guild Header';
                romeon = tangon;
                yankee = golfie;
                michal = romeon[zuuluu](yankee, offset, verify, option, golfie);
                return entity;
            };
            yankee = verify.bind(tangon)(michal);
            michal = 28;
            michal = option[michal];
            golfie = golfie.bind(tangon)(michal);
            michal = golfie.useShouldShowInvitesDisabledNotif;
            romeon = michal.bind(golfie)(backup);
            michal = 29;
            michal = option[michal];
            golfie = zuuluu.bind(tangon)(michal);
            michal = backup.id;
            golfie = golfie.bind(tangon)(michal);
            michal = 30;
            michal = option[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.bind(tangon)(backup);
            option = michal.hasUnread;
            offset = michal.handlePress;
            verify = michal.handleLongPress;
            zuuluu = _closure1_slot8;
            michal = _closure1_slot12;
            entity = {};
            backup = backup.id;
            entity['guildId'] = backup;
            entity['canInvite'] = foxtra;
            entity['invitesDisabled'] = romeon;
            entity['onInvitePress'] = yankee;
            entity['onEventsPress'] = offset;
            entity['onEventsLongPress'] = verify;
            entity['hasUnreadEvents'] = option;
            if(!oscard) { _fun00012_ip = 267; continue _fun00011 }
 264:
            oscard = golfie;
 267:
            entity['useEventsButton'] = oscard;
            entity['useButtonComponent'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 31;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();