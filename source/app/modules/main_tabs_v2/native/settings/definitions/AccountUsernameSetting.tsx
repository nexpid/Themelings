// app/modules/main_tabs_v2/native/settings/definitions/AccountUsernameSetting.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    option = oscard[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(option);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.View;
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.MobileSetting;
    foxtra = 4;
    michal = oscard[foxtra];
    michal = report.bind(entity)(michal);
    verify = michal.RendererType;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.UserSettingsSections;
    michal = 6;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.PomeloEntrypoints;
    var _closure1_slot6 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    offset = michal.jsx;
    var _closure1_slot7 = offset;
    michal = michal.jsxs;
    var _closure1_slot8 = michal;
    michal = 8;
    michal = oscard[michal];
    yankee = report.bind(entity)(michal);
    offset = yankee.createStyles;
    michal = {};
    romeon = {'flexDirection': 'row', 'alignItems': 'center'};
    michal['usernameTrailing'] = romeon;
    romeon = {};
    romeon['marginLeft'] = foxtra;
    michal['usernameIcon'] = romeon;
    michal = offset.bind(yankee)(michal);
    var _closure1_slot9 = michal;
    michal = {};
    verify = verify.ROUTE;
    michal['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 22;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.IEpCBQ;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = verify;
    tangon = tangon.ACCOUNT;
    michal['parent'] = tangon;
    tangon = function() { // Original name: useGetAccountUsernameSettingCanNavigate
        tangon = _closure1_slot3;
        zuuluu = tangon.useCallback;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                tangon = entity.bind(michal)();
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 9;
                entity = oscard[entity];
                verify = undefined;
                michal = zuuluu.bind(verify)(entity);
                entity = michal.isEligibleForPomelo;
                entity = entity.bind(michal)();
                michal = 19;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(verify)(michal);
                michal = zuuluu.getPomeloEligibility;
                zuuluu = michal.bind(zuuluu)();
                michal = null;
                if(!(michal != tangon)) { _fun00002_ip = 295; continue _fun00001 }
 79:
                michal = tangon.isClaimed;
                michal = michal.bind(tangon)();
                michal = !michal;
                if(!zuuluu) { _fun00002_ip = 121; continue _fun00001 }
 95:
                zuuluu = tangon.isPomelo;
                zuuluu = zuuluu.bind(tangon)();
                if(zuuluu) { _fun00002_ip = 121; continue _fun00001 }
 108:
                zuuluu = tangon.hasVerifiedEmailOrPhone;
                zuuluu = zuuluu.bind(tangon)();
                if(!zuuluu) { _fun00002_ip = 175; continue _fun00001 }
 121:
                if(michal) { _fun00002_ip = 175; continue _fun00001 }
 124:
                entity = !entity;
                if(entity) { _fun00002_ip = 173; continue _fun00001 }
 130:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 23;
                michal = tangon[michal];
                tangon = zuuluu.bind(verify)(michal);
                zuuluu = tangon.openPomeloModal;
                michal = _closure1_slot6;
                michal = michal.USER_SETTINGS_EDIT;
                michal = zuuluu.bind(tangon)(michal);
                entity = false;
 173:
                _fun00002_ip = 293; continue _fun00001;
 175:
                golfie = _closure1_slot1;
                offset = _closure1_slot2;
                michal = 20;
                michal = offset[michal];
                tangon = golfie.bind(verify)(michal);
                zuuluu = tangon.open;
                michal = {};
                oscard = 'POMELO_UPDATE_DISABLED_MESSAGE';
                michal['key'] = oscard;
                oscard = 21;
                oscard = offset[oscard];
                oscard = golfie.bind(verify)(oscard);
                michal['icon'] = oscard;
                option = _closure1_slot0;
                report = 22;
                oscard = offset[report];
                oscard = option.bind(verify)(oscard);
                golfie = oscard.intl;
                oscard = golfie.string;
                report = offset[report];
                report = option.bind(verify)(report);
                report = report.t;
                report = report.7Ngnys;
                report = oscard.bind(golfie)(report);
                michal['content'] = report;
                michal = zuuluu.bind(tangon)(michal);
                entity = false;
 293:
                return entity;
 295:
                entity = false;
                return entity;
            }
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['usePreNavigationAction'] = tangon;
    tangon = function() { // Original name: useAccountUsernameSettingTrailing
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot9;
            report = undefined;
            offset = entity.bind(report)();
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            entity = tangon[entity];
            michal = zuuluu.bind(report)(entity);
            entity = michal.useIsEligibleForPomelo;
            michal = entity.bind(michal)();
            entity = 10;
            entity = tangon[entity];
            oscard = zuuluu.bind(report)(entity);
            tangon = oscard.useStateFromStores;
            entity = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 11;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.getUserTag;
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                michal = entity.bind(michal)();
                entity = {};
                report = 'never';
                entity['decoration'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            yankee = tangon.bind(oscard)(zuuluu, entity);
            entity = yankee;
            if(!michal) { _fun00004_ip = 292; continue _fun00003 }
 96:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot4;
            michal = {};
            oscard = offset.usernameTrailing;
            michal['style'] = oscard;
            verify = _closure1_slot7;
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 12;
            oscard = romeon[oscard];
            oscard = option.bind(report)(oscard);
            oscard = oscard.TableRow;
            option = oscard.TrailingText;
            oscard = {};
            oscard['text'] = yankee;
            option = verify.bind(report)(option, oscard);
            oscard = new Array(2);
            oscard[0] = option;
            yankee = _closure1_slot1;
            golfie = 13;
            golfie = romeon[golfie];
            option = yankee.bind(report)(golfie);
            golfie = {};
            offset = offset.usernameIcon;
            golfie['style'] = offset;
            offset = 14;
            offset = romeon[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.colors;
            offset = offset.STATUS_WARNING;
            golfie['themedColor'] = offset;
            offset = 15;
            offset = romeon[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.Sizes;
            offset = offset.SMALL_20;
            golfie['size'] = offset;
            offset = 16;
            offset = romeon[offset];
            offset = yankee.bind(report)(offset);
            golfie['source'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 292:
            return entity;
        }
    };
    michal['useTrailing'] = tangon;
    tangon = function() { // Original name: useAccountUsernameSettingDescription
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 17;
            entity = tangon[entity];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.useGuildAutomodProfileQuarantineErrors;
            zuuluu = entity.bind(zuuluu)();
            entity = null;
            tangon = entity == zuuluu;
            oscard = undefined;
            if(tangon) { _fun00006_ip = 67; continue _fun00005 }
 46:
            tangon = zuuluu.nick;
            zuuluu = entity == tangon;
            oscard = undefined;
            if(zuuluu) { _fun00006_ip = 67; continue _fun00005 }
 61:
            zuuluu = 0;
            oscard = tangon[zuuluu];
 67:
            zuuluu = entity == oscard;
            entity = null;
            if(zuuluu) { _fun00006_ip = 129; continue _fun00005 }
 76:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 18;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.Text;
            michal = {'variant': 'text-xs/medium', 'color': 'text-warning'};
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 129:
            return entity;
        }
    };
    michal['useDescription'] = tangon;
    tangon = {};
    option = option.ACCOUNT_CHANGE_USERNAME;
    tangon['route'] = option;
    golfie = function() { // Original name: getComponent
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 24;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.default;
        return entity;
    };
    tangon['getComponent'] = golfie;
    michal['screen'] = tangon;
    tangon = 25;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/AccountUsernameSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();