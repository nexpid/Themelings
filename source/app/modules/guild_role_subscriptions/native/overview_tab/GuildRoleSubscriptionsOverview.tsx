// app/modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsOverview.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    tango = function(argFoo) { // Original name: serverNameHook
        tango = _closure1_slot7;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 5;
        entity = zulu[entity];
        zulu = undefined;
        entity = mike.bind(zulu)(entity);
        mike = entity.Text;
        entity = {'variant': 'heading-lg/extrabold', 'color': 'interactive-active'};
        report = argFoo;
        entity['children'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot8 = tango;
    mike = function(argFoo) { // Original name: RoleSubscriptionsUnavailableNotice
        entity = argFoo;
        foxtrot = entity.serverName;
        tango = _closure1_slot7;
        mike = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 6;
        entity = verify[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = {};
        options = _closure1_slot0;
        report = 7;
        oscar = verify[report];
        oscar = options.bind(zulu)(oscar);
        yankee = oscar.intl;
        offset = yankee.format;
        oscar = verify[report];
        oscar = options.bind(zulu)(oscar);
        oscar = oscar.t;
        golf = oscar.uEqG1N;
        oscar = {};
        oscar['serverName'] = foxtrot;
        romeo = _closure1_slot8;
        oscar['serverNameHook'] = romeo;
        oscar = offset.bind(yankee)(golf, oscar);
        entity['title'] = oscar;
        oscar = verify[report];
        oscar = options.bind(zulu)(oscar);
        golf = oscar.intl;
        oscar = golf.string;
        report = verify[report];
        report = options.bind(zulu)(report);
        report = report.t;
        report = report.+3DKTU;
        report = oscar.bind(golf)(report);
        entity['description'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot9 = mike;
    entity = function(argFoo) { // Original name: PurchasePage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.guildId;
            options = entity.gatedChannelId;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 8;
            entity = zulu[entity];
            tango = undefined;
            zulu = mike.bind(tango)(entity);
            mike = zulu.useNativeIAPPayments;
            entity = {};
            oscar = new Array(0);
            entity['productIds'] = oscar;
            oscar = false;
            entity['fetchingProductIDs'] = oscar;
            entity = mike.bind(zulu)(entity);
            entity = entity.storeFront;
            golf = null;
            mike = golf == entity;
            oscar = undefined;
            if(mike) { _fun00002_ip = 91; continue _fun00001 }
 85:
            oscar = entity.country;
 91:
            zulu = _closure1_slot7;
            mike = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 9;
            entity = offset[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.GroupListingsFetchContextProvider;
            entity = {};
            entity['guildId'] = verify;
            yankee = golf == options;
            entity['refetchOnMount'] = yankee;
            entity['countryCode'] = oscar;
            oscar = golf == oscar;
            entity['dontFetchWhileTrue'] = oscar;
            golf = _closure1_slot7;
            oscar = _closure1_slot1;
            report = 10;
            report = offset[report];
            oscar = oscar.bind(tango)(report);
            report = {};
            report['guildId'] = verify;
            report['gatedChannelId'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    offset = options[entity];
    oscar = argCorge;
    entity = undefined;
    oscar = oscar.bind(entity)(offset);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.jsx;
    var _closure1_slot7 = oscar;
    oscar = 16;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsOverview.tsx';
    oscar = golf.bind(options)(oscar);
    report = function(argFoo) { // Original name: GuildRoleSubscriptionsOverview
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golf = entity.guildId;
            var _closure2_slot0 = golf;
            oscar = entity.gatedChannelId;
            tango = _closure1_slot0;
            options = _closure1_slot2;
            entity = 11;
            verify = options[entity];
            report = undefined;
            foxtrot = tango.bind(report)(verify);
            romeo = foxtrot.useStateFromStores;
            verify = _closure1_slot6;
            yankee = new Array(1);
            yankee[0] = verify;
            offset = new Array(1);
            offset[0] = golf;
            verify = function() {
                zulu = _closure1_slot6;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = romeo.bind(foxtrot)(yankee, verify, offset);
            var _closure2_slot1 = offset;
            entity = options[entity];
            romeo = tango.bind(report)(entity);
            yankee = romeo.useStateFromStores;
            entity = _closure1_slot4;
            verify = new Array(1);
            verify[0] = entity;
            entity = function() {
                mike = _closure1_slot4;
                entity = mike.isConnected;
                entity = entity.bind(mike)();
                return entity;
            };
            romeo = yankee.bind(romeo)(verify, entity);
            var _closure2_slot2 = romeo;
            verify = _closure1_slot1;
            entity = 12;
            entity = options[entity];
            entity = verify.bind(report)(entity);
            yankee = entity.bind(report)(golf);
            var _closure2_slot3 = yankee;
            entity = 13;
            entity = options[entity];
            tango = tango.bind(report)(entity);
            entity = tango.useCanUseRoleSubscriptionIAP;
            entity = entity.bind(tango)(golf);
            verify = _closure1_slot3;
            options = verify.useEffect;
            tango = new Array(3);
            tango[0] = offset;
            tango[1] = romeo;
            tango[2] = yankee;
            zulu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot2;
                    entity = !entity;
                    if(entity) { _fun00006_ip = 33; continue _fun00005 }
 13:
                    tango = _closure2_slot1;
                    mike = null;
                    mike = mike != tango;
                    if(!mike) { _fun00006_ip = 30; continue _fun00005 }
 26:
                    mike = _closure2_slot3;
 30:
                    entity = mike;
 33:
                    if(entity) { _fun00006_ip = 262; continue _fun00005 }
 39:
                    zulu = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 14;
                    mike = report[mike];
                    tango = undefined;
                    golf = zulu.bind(tango)(mike);
                    oscar = golf.show;
                    mike = {};
                    zulu = _closure1_slot0;
                    options = 7;
                    verify = report[options];
                    verify = zulu.bind(tango)(verify);
                    yankee = verify.intl;
                    offset = yankee.string;
                    verify = report[options];
                    verify = zulu.bind(tango)(verify);
                    verify = verify.t;
                    verify = verify.r0DLNj;
                    verify = offset.bind(yankee)(verify);
                    mike['title'] = verify;
                    verify = report[options];
                    verify = zulu.bind(tango)(verify);
                    yankee = verify.intl;
                    offset = yankee.string;
                    verify = report[options];
                    verify = zulu.bind(tango)(verify);
                    verify = verify.t;
                    verify = verify.6Y0JlJ;
                    verify = offset.bind(yankee)(verify);
                    mike['body'] = verify;
                    verify = report[options];
                    verify = zulu.bind(tango)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    options = report[options];
                    options = zulu.bind(tango)(options);
                    options = options.t;
                    options = options.BddRzc;
                    options = verify.bind(offset)(options);
                    mike['confirmText'] = options;
                    mike = oscar.bind(golf)(mike);
                    mike = 15;
                    mike = report[mike];
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.replaceWith;
                    entity = _closure1_slot5;
                    entity = entity.defaultRoute;
                    entity = mike.bind(zulu)(entity);
 262:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = options.bind(verify)(zulu, tango);
            tango = _closure1_slot7;
            if(entity) { _fun00004_ip = 273; continue _fun00003 }
 224:
            zulu = _closure1_slot9;
            entity = {};
            options = null;
            yankee = options == offset;
            verify = undefined;
            if(yankee) { _fun00004_ip = 246; continue _fun00003 }
 241:
            verify = offset.name;
 246:
            offset = options != verify;
            options = '';
            if(!offset) { _fun00004_ip = 260; continue _fun00003 }
 257:
            options = verify;
 260:
            entity['serverName'] = options;
            entity = tango.bind(report)(zulu, entity);
            _fun00004_ip = 294; continue _fun00003;
 273:
            zulu = _closure1_slot10;
            mike = {};
            mike['guildId'] = golf;
            mike['gatedChannelId'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 294:
            return entity;
        }
    };
    zulu['default'] = report;
    zulu['serverNameHook'] = tango;
    zulu['RoleSubscriptionsUnavailableNotice'] = mike;
    return entity;
})();