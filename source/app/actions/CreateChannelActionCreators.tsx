// app/actions/CreateChannelActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
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
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.BITRATE_DEFAULT;
    var _closure1_slot4 = golf;
    golf = mike.ChannelTypes;
    var _closure1_slot5 = golf;
    mike = mike.Endpoints;
    var _closure1_slot6 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ChannelNotificationSettingsFlags;
    var _closure1_slot7 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: createChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            yankee = mike.guildId;
            var _closure2_slot0 = yankee;
            verify = mike.type;
            foxtrot = mike.name;
            tango = mike.permissionOverwrites;
            options = undefined;
            if(!(tango === options)) { _fun00002_ip = 40; continue _fun00001 }
 36:
            tango = new Array(0);
 40:
            var _closure2_slot1 = tango;
            romeo = mike.bitrate;
            offset = mike.userLimit;
            golf = mike.parentId;
            zulu = mike.skuId;
            mike = mike.branchId;
            backup = _closure1_slot1;
            kilo = _closure1_slot2;
            report = 3;
            report = kilo[report];
            kilo = backup.bind(options)(report);
            backup = kilo.dispatch;
            report = {};
            sizing = 'CREATE_CHANNEL_MODAL_SUBMIT';
            report['type'] = sizing;
            report = backup.bind(kilo)(report);
            report = {};
            report['type'] = verify;
            report['name'] = foxtrot;
            report['permission_overwrites'] = tango;
            tango = null;
            foxtrot = tango != romeo;
            if(!foxtrot) { _fun00002_ip = 151; continue _fun00001 }
 143:
            backup = _closure1_slot4;
            foxtrot = romeo !== backup;
 151:
            if(!foxtrot) { _fun00002_ip = 160; continue _fun00001 }
 154:
            report['bitrate'] = romeo;
 160:
            romeo = tango != offset;
            if(!romeo) { _fun00002_ip = 173; continue _fun00001 }
 167:
            foxtrot = 0;
            romeo = offset > foxtrot;
 173:
            if(!romeo) { _fun00002_ip = 182; continue _fun00001 }
 176:
            report['user_limit'] = offset;
 182:
            if(!(tango != golf)) { _fun00002_ip = 192; continue _fun00001 }
 186:
            report['parent_id'] = golf;
 192:
            golf = _closure1_slot5;
            golf = golf.GUILD_STORE;
            if(!(verify === golf)) { _fun00002_ip = 225; continue _fun00001 }
 206:
            if(!(tango != zulu)) { _fun00002_ip = 373; continue _fun00001 }
 213:
            report['sku_id'] = zulu;
            report['branch_id'] = mike;
 225:
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 4;
            mike = verify[mike];
            tango = zulu.bind(options)(mike);
            zulu = tango.post;
            mike = {};
            offset = _closure1_slot6;
            golf = offset.GUILD_CHANNELS;
            golf = golf.bind(offset)(yankee);
            mike['url'] = golf;
            mike['body'] = report;
            report = true;
            mike['oldFormErrors'] = report;
            report = {};
            golf = _closure1_slot0;
            oscar = 5;
            oscar = verify[oscar];
            oscar = golf.bind(options)(oscar);
            oscar = oscar.NetworkActionNames;
            oscar = oscar.CHANNEL_CREATE;
            report['event'] = oscar;
            oscar = function(argFoo) { // Original name: properties
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 6;
                    entity = zulu[entity];
                    golf = undefined;
                    zulu = mike.bind(golf)(entity);
                    mike = zulu.exact;
                    entity = {};
                    tango = _closure2_slot1;
                    oscar = tango.length;
                    tango = 0;
                    tango = oscar > tango;
                    entity['is_private'] = tango;
                    oscar = null;
                    options = oscar == report;
                    tango = undefined;
                    if(options) { _fun00004_ip = 89; continue _fun00003 }
 70:
                    options = report.body;
                    verify = oscar == options;
                    tango = undefined;
                    if(verify) { _fun00004_ip = 89; continue _fun00003 }
 84:
                    tango = options.id;
 89:
                    entity['channel_id'] = tango;
                    options = oscar == report;
                    tango = undefined;
                    if(options) { _fun00004_ip = 121; continue _fun00003 }
 102:
                    report = report.body;
                    oscar = oscar == report;
                    tango = undefined;
                    if(oscar) { _fun00004_ip = 121; continue _fun00003 }
 116:
                    tango = report.type;
 121:
                    entity['channel_type'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            report['properties'] = oscar;
            mike['trackedActionData'] = report;
            report = false;
            mike['rejectWithError'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    oscar = _closure1_slot3;
                    report = oscar.isOptInEnabled;
                    tango = _closure2_slot0;
                    tango = report.bind(oscar)(tango);
                    if(!tango) { _fun00006_ip = 130; continue _fun00005 }
 31:
                    report = _closure1_slot1;
                    romeo = _closure1_slot2;
                    tango = 7;
                    tango = romeo[tango];
                    yankee = undefined;
                    verify = report.bind(yankee)(tango);
                    options = verify.updateChannelOverrideSettings;
                    golf = _closure2_slot0;
                    tango = entity.body;
                    kilo = tango.id;
                    report = {};
                    tango = _closure1_slot7;
                    tango = tango.OPT_IN_ENABLED;
                    report['flags'] = tango;
                    offset = _closure1_slot0;
                    tango = 8;
                    tango = romeo[tango];
                    tango = offset.bind(yankee)(tango);
                    tango = tango.NotificationLabels;
                    foxtrot = tango.OptedIn;
                    output = verify;
                    sizing = golf;
                    backup = report;
                    tango = output[options](sizing, kilo, backup, foxtrot, romeo);
 130:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 9;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.checkGuildTemplateDirty;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            entity = function(argFoo) {
                entity = argFoo;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 3;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.dispatch;
                mike = {};
                report = 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE';
                mike['type'] = report;
                report = entity.body;
                mike['errors'] = report;
                mike = zulu.bind(tango)(mike);
                throw entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 373:
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            result = 'Unexpected missing SKU';
            echo = mike;
            entity = new echo[zulu](result, output);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    mike['createChannel'] = golf;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: createRoleSubscriptionTemplateChannel
        mike = _closure1_slot1;
        options = _closure1_slot2;
        entity = 4;
        entity = options[entity];
        golf = undefined;
        zulu = mike.bind(golf)(entity);
        mike = zulu.post;
        entity = {};
        verify = _closure1_slot6;
        oscar = verify.GUILD_CHANNELS;
        tango = argFoo;
        tango = oscar.bind(verify)(tango);
        entity['url'] = tango;
        tango = {};
        oscar = argBar;
        tango['name'] = oscar;
        oscar = argBaz;
        tango['type'] = oscar;
        oscar = argCorge;
        tango['topic'] = oscar;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = {};
        oscar = _closure1_slot0;
        report = 5;
        report = options[report];
        report = oscar.bind(golf)(report);
        report = report.NetworkActionNames;
        report = report.CHANNEL_CREATE;
        tango['event'] = report;
        report = function(argFoo) { // Original name: properties
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = argFoo;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 6;
                entity = zulu[entity];
                golf = undefined;
                zulu = mike.bind(golf)(entity);
                mike = zulu.exact;
                entity = {};
                tango = true;
                entity['is_private'] = tango;
                oscar = null;
                options = oscar == report;
                tango = undefined;
                if(options) { _fun00008_ip = 73; continue _fun00007 }
 54:
                options = report.body;
                verify = oscar == options;
                tango = undefined;
                if(verify) { _fun00008_ip = 73; continue _fun00007 }
 68:
                tango = options.id;
 73:
                entity['channel_id'] = tango;
                options = oscar == report;
                tango = undefined;
                if(options) { _fun00008_ip = 105; continue _fun00007 }
 86:
                report = report.body;
                oscar = oscar == report;
                tango = undefined;
                if(oscar) { _fun00008_ip = 105; continue _fun00007 }
 100:
                tango = report.type;
 105:
                entity['channel_type'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        tango['properties'] = report;
        entity['trackedActionData'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['createRoleSubscriptionTemplateChannel'] = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/CreateChannelActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();