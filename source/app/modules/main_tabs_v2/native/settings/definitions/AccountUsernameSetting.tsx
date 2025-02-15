// app/modules/main_tabs_v2/native/settings/definitions/AccountUsernameSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    mike = mike.View;
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.MobileSetting;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    verify = mike.RendererType;
    foxtrot = 4;
    mike = oscar[foxtrot];
    mike = report.bind(entity)(mike);
    options = mike.UserSettingsSections;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.PomeloEntrypoints;
    var _closure1_slot5 = mike;
    mike = 6;
    offset = oscar[mike];
    offset = report.bind(entity)(offset);
    offset = offset.jsx;
    var _closure1_slot6 = offset;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.jsxs;
    var _closure1_slot7 = mike;
    mike = 7;
    mike = oscar[mike];
    yankee = report.bind(entity)(mike);
    offset = yankee.createStyles;
    mike = {};
    romeo = {'flexDirection': 'row', 'alignItems': 'center'};
    mike['usernameTrailing'] = romeo;
    romeo = {};
    romeo['marginLeft'] = foxtrot;
    mike['usernameIcon'] = romeo;
    mike = offset.bind(yankee)(mike);
    var _closure1_slot8 = mike;
    mike = {};
    verify = verify.ROUTE;
    mike['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 21;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.IEpCBQ;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = verify;
    tango = tango.ACCOUNT;
    mike['parent'] = tango;
    tango = function() { // Original name: getAccountUsernameSettingCanNavigate
        _fun94229: for(var _fun94229_ip = 0; ; ) switch(_fun94229_ip) {
 0:
            mike = _closure1_slot4;
            entity = mike.getCurrentUser;
            tango = entity.bind(mike)();
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 8;
            entity = oscar[entity];
            verify = undefined;
            mike = zulu.bind(verify)(entity);
            entity = mike.isEligibleForPomelo;
            entity = entity.bind(mike)();
            mike = 18;
            mike = oscar[mike];
            zulu = zulu.bind(verify)(mike);
            mike = zulu.getPomeloEligibility;
            zulu = mike.bind(zulu)();
            mike = null;
            if(!(mike != tango)) { _fun94229_ip = 293; continue _fun94229 }
 79:
            mike = tango.isClaimed;
            mike = mike.bind(tango)();
            mike = !mike;
            if(!zulu) { _fun94229_ip = 121; continue _fun94229 }
 95:
            zulu = tango.isPomelo;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun94229_ip = 121; continue _fun94229 }
 108:
            zulu = tango.hasVerifiedEmailOrPhone;
            zulu = zulu.bind(tango)();
            if(!zulu) { _fun94229_ip = 175; continue _fun94229 }
 121:
            if(mike) { _fun94229_ip = 175; continue _fun94229 }
 124:
            entity = !entity;
            if(entity) { _fun94229_ip = 173; continue _fun94229 }
 130:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 22;
            mike = tango[mike];
            tango = zulu.bind(verify)(mike);
            zulu = tango.openPomeloModal;
            mike = _closure1_slot5;
            mike = mike.USER_SETTINGS_EDIT;
            mike = zulu.bind(tango)(mike);
            entity = false;
 173:
            _fun94229_ip = 291; continue _fun94229;
 175:
            golf = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 19;
            mike = offset[mike];
            tango = golf.bind(verify)(mike);
            zulu = tango.open;
            mike = {};
            oscar = 'POMELO_UPDATE_DISABLED_MESSAGE';
            mike['key'] = oscar;
            oscar = 20;
            oscar = offset[oscar];
            oscar = golf.bind(verify)(oscar);
            mike['icon'] = oscar;
            options = _closure1_slot0;
            report = 21;
            oscar = offset[report];
            oscar = options.bind(verify)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = offset[report];
            report = options.bind(verify)(report);
            report = report.t;
            report = report.7Ngnys;
            report = oscar.bind(golf)(report);
            mike['content'] = report;
            mike = zulu.bind(tango)(mike);
            entity = false;
 291:
            return entity;
 293:
            entity = false;
            return entity;
        }
    };
    mike['preNavigationAction'] = tango;
    tango = function() { // Original name: useAccountUsernameSettingTrailing
        _fun94230: for(var _fun94230_ip = 0; ; ) switch(_fun94230_ip) {
 0:
            entity = _closure1_slot8;
            report = undefined;
            offset = entity.bind(report)();
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 8;
            entity = tango[entity];
            mike = zulu.bind(report)(entity);
            entity = mike.useIsEligibleForPomelo;
            mike = entity.bind(mike)();
            entity = 9;
            entity = tango[entity];
            oscar = zulu.bind(report)(entity);
            tango = oscar.useStateFromStores;
            entity = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 10;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.getUserTag;
                mike = _closure1_slot4;
                entity = mike.getCurrentUser;
                mike = entity.bind(mike)();
                entity = {};
                report = 'never';
                entity['decoration'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            yankee = tango.bind(oscar)(zulu, entity);
            entity = yankee;
            if(!mike) { _fun94230_ip = 292; continue _fun94230 }
 96:
            tango = _closure1_slot7;
            zulu = _closure1_slot3;
            mike = {};
            oscar = offset.usernameTrailing;
            mike['style'] = oscar;
            verify = _closure1_slot6;
            options = _closure1_slot0;
            romeo = _closure1_slot2;
            oscar = 11;
            oscar = romeo[oscar];
            oscar = options.bind(report)(oscar);
            oscar = oscar.TableRow;
            options = oscar.TrailingText;
            oscar = {};
            oscar['text'] = yankee;
            options = verify.bind(report)(options, oscar);
            oscar = new Array(2);
            oscar[0] = options;
            yankee = _closure1_slot1;
            golf = 12;
            golf = romeo[golf];
            options = yankee.bind(report)(golf);
            golf = {};
            offset = offset.usernameIcon;
            golf['style'] = offset;
            offset = 13;
            offset = romeo[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.colors;
            offset = offset.STATUS_WARNING;
            golf['themedColor'] = offset;
            offset = 14;
            offset = romeo[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.Sizes;
            offset = offset.SMALL_20;
            golf['size'] = offset;
            offset = 15;
            offset = romeo[offset];
            offset = yankee.bind(report)(offset);
            golf['source'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 292:
            return entity;
        }
    };
    mike['useTrailing'] = tango;
    tango = function() { // Original name: useAccountUsernameSettingDescription
        _fun94232: for(var _fun94232_ip = 0; ; ) switch(_fun94232_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 16;
            entity = tango[entity];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = zulu.useGuildAutomodProfileQuarantineErrors;
            zulu = entity.bind(zulu)();
            entity = null;
            tango = entity == zulu;
            oscar = undefined;
            if(tango) { _fun94232_ip = 67; continue _fun94232 }
 46:
            tango = zulu.nick;
            zulu = entity == tango;
            oscar = undefined;
            if(zulu) { _fun94232_ip = 67; continue _fun94232 }
 61:
            zulu = 0;
            oscar = tango[zulu];
 67:
            zulu = entity == oscar;
            entity = null;
            if(zulu) { _fun94232_ip = 129; continue _fun94232 }
 76:
            tango = _closure1_slot6;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 17;
            mike = golf[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.Text;
            mike = {'variant': 'text-xs/medium', 'color': 'text-warning'};
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 129:
            return entity;
        }
    };
    mike['useDescription'] = tango;
    tango = {};
    options = options.ACCOUNT_CHANGE_USERNAME;
    tango['route'] = options;
    golf = function() { // Original name: getComponent
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 23;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        entity = entity.default;
        return entity;
    };
    tango['getComponent'] = golf;
    mike['screen'] = tango;
    tango = 24;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/AccountUsernameSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();