// app/modules/main_tabs_v2/native/settings/definitions/AccountWebAuthnViewSetting.tsx
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
    mike = tango.bind(entity)(mike);
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
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.UserSettingsSections;
    mike = {};
    verify = verify.ROUTE;
    mike['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 6;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.y7SXYW;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = verify;
    tango = tango.ACCOUNT;
    mike['parent'] = tango;
    tango = function() { // Original name: accountCanUseWebAuthnView
        _fun94632: for(var _fun94632_ip = 0; ; ) switch(_fun94632_ip) {
 0:
            mike = _closure1_slot4;
            entity = mike.getCurrentUser;
            zulu = entity.bind(mike)();
            entity = null;
            tango = entity == zulu;
            verify = undefined;
            mike = undefined;
            if(tango) { _fun94632_ip = 35; continue _fun94632 }
 29:
            mike = zulu.verified;
 35:
            entity = entity != mike;
            if(!entity) { _fun94632_ip = 45; continue _fun94632 }
 42:
            entity = mike;
 45:
            if(entity) { _fun94632_ip = 187; continue _fun94632 }
 51:
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 5;
            mike = offset[mike];
            tango = zulu.bind(verify)(mike);
            zulu = tango.show;
            mike = {};
            options = _closure1_slot0;
            report = 6;
            oscar = offset[report];
            oscar = options.bind(verify)(oscar);
            yankee = oscar.intl;
            golf = yankee.string;
            oscar = offset[report];
            oscar = options.bind(verify)(oscar);
            oscar = oscar.t;
            oscar = oscar.v740sr;
            oscar = golf.bind(yankee)(oscar);
            mike['title'] = oscar;
            oscar = offset[report];
            oscar = options.bind(verify)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = offset[report];
            report = options.bind(verify)(report);
            report = report.t;
            report = report.uggF7u;
            report = oscar.bind(golf)(report);
            mike['body'] = report;
            mike = zulu.bind(tango)(mike);
 187:
            return entity;
        }
    };
    mike['preNavigationAction'] = tango;
    tango = function() { // Original name: useAccountSecurityKeysSettingTrailing
        _fun94633: for(var _fun94633_ip = 0; ; ) switch(_fun94633_ip) {
 0:
            zulu = _closure1_slot3;
            mike = zulu.hasFetchedCredentials;
            mike = mike.bind(zulu)();
            if(mike) { _fun94633_ip = 52; continue _fun94633 }
 20:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 7;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.fetchWebAuthnCredentials;
            mike = mike.bind(zulu)();
 52:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 8;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.useStateFromStores;
            entity = _closure1_slot3;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 6;
                zulu = golf[entity];
                mike = undefined;
                zulu = oscar.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = golf[entity];
                entity = oscar.bind(mike)(entity);
                entity = entity.t;
                mike = entity.n8mZ0d;
                entity = {};
                oscar = _closure1_slot3;
                report = oscar.getCredentials;
                report = report.bind(oscar)();
                report = report.length;
                entity['count'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike['useTrailing'] = tango;
    tango = {};
    options = options.WEBAUTHN_VIEW;
    tango['route'] = options;
    golf = function() { // Original name: getComponent
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 9;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        entity = entity.default;
        return entity;
    };
    tango['getComponent'] = golf;
    mike['screen'] = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/AccountWebAuthnViewSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();