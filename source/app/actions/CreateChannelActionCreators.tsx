// app/actions/CreateChannelActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
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
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.BITRATE_DEFAULT;
    var _closure1_slot4 = golfie;
    golfie = michal.ChannelTypes;
    var _closure1_slot5 = golfie;
    michal = michal.Endpoints;
    var _closure1_slot6 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ChannelNotificationSettingsFlags;
    var _closure1_slot7 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: createChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            yankee = michal.guildId;
            var _closure2_slot0 = yankee;
            verify = michal.type;
            foxtra = michal.name;
            tangon = michal.permissionOverwrites;
            option = undefined;
            if(!(tangon === option)) { _fun00002_ip = 40; continue _fun00001 }
 36:
            tangon = new Array(0);
 40:
            var _closure2_slot1 = tangon;
            romeon = michal.bitrate;
            offset = michal.userLimit;
            golfie = michal.parentId;
            zuuluu = michal.skuId;
            michal = michal.branchId;
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            report = 3;
            report = kiloes[report];
            kiloes = backup.bind(option)(report);
            backup = kiloes.dispatch;
            report = {};
            sizing = 'CREATE_CHANNEL_MODAL_SUBMIT';
            report['type'] = sizing;
            report['guildId'] = yankee;
            report['channelType'] = verify;
            report = backup.bind(kiloes)(report);
            report = {};
            report['type'] = verify;
            report['name'] = foxtra;
            report['permission_overwrites'] = tangon;
            tangon = null;
            foxtra = tangon != romeon;
            if(!foxtra) { _fun00002_ip = 160; continue _fun00001 }
 152:
            backup = _closure1_slot4;
            foxtra = romeon !== backup;
 160:
            if(!foxtra) { _fun00002_ip = 169; continue _fun00001 }
 163:
            report['bitrate'] = romeon;
 169:
            romeon = tangon != offset;
            if(!romeon) { _fun00002_ip = 182; continue _fun00001 }
 176:
            foxtra = 0;
            romeon = offset > foxtra;
 182:
            if(!romeon) { _fun00002_ip = 191; continue _fun00001 }
 185:
            report['user_limit'] = offset;
 191:
            if(!(tangon != golfie)) { _fun00002_ip = 201; continue _fun00001 }
 195:
            report['parent_id'] = golfie;
 201:
            golfie = _closure1_slot5;
            golfie = golfie.GUILD_STORE;
            if(!(verify === golfie)) { _fun00002_ip = 234; continue _fun00001 }
 215:
            if(!(tangon != zuuluu)) { _fun00002_ip = 382; continue _fun00001 }
 222:
            report['sku_id'] = zuuluu;
            report['branch_id'] = michal;
 234:
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 4;
            michal = verify[michal];
            tangon = zuuluu.bind(option)(michal);
            zuuluu = tangon.post;
            michal = {};
            offset = _closure1_slot6;
            golfie = offset.GUILD_CHANNELS;
            golfie = golfie.bind(offset)(yankee);
            michal['url'] = golfie;
            michal['body'] = report;
            report = true;
            michal['oldFormErrors'] = report;
            report = {};
            golfie = _closure1_slot0;
            oscard = 5;
            oscard = verify[oscard];
            oscard = golfie.bind(option)(oscard);
            oscard = oscard.NetworkActionNames;
            oscard = oscard.CHANNEL_CREATE;
            report['event'] = oscard;
            oscard = function(argFoo) { // Original name: properties
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 6;
                    entity = zuuluu[entity];
                    golfie = undefined;
                    zuuluu = michal.bind(golfie)(entity);
                    michal = zuuluu.exact;
                    entity = {};
                    tangon = _closure2_slot1;
                    oscard = tangon.length;
                    tangon = 0;
                    tangon = oscard > tangon;
                    entity['is_private'] = tangon;
                    oscard = null;
                    option = oscard == report;
                    tangon = undefined;
                    if(option) { _fun00004_ip = 89; continue _fun00003 }
 70:
                    option = report.body;
                    verify = oscard == option;
                    tangon = undefined;
                    if(verify) { _fun00004_ip = 89; continue _fun00003 }
 84:
                    tangon = option.id;
 89:
                    entity['channel_id'] = tangon;
                    option = oscard == report;
                    tangon = undefined;
                    if(option) { _fun00004_ip = 121; continue _fun00003 }
 102:
                    report = report.body;
                    oscard = oscard == report;
                    tangon = undefined;
                    if(oscard) { _fun00004_ip = 121; continue _fun00003 }
 116:
                    tangon = report.type;
 121:
                    entity['channel_type'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            report['properties'] = oscard;
            michal['trackedActionData'] = report;
            report = false;
            michal['rejectWithError'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    oscard = _closure1_slot3;
                    report = oscard.isOptInEnabled;
                    tangon = _closure2_slot0;
                    tangon = report.bind(oscard)(tangon);
                    if(!tangon) { _fun00006_ip = 130; continue _fun00005 }
 31:
                    report = _closure1_slot1;
                    romeon = _closure1_slot2;
                    tangon = 7;
                    tangon = romeon[tangon];
                    yankee = undefined;
                    verify = report.bind(yankee)(tangon);
                    option = verify.updateChannelOverrideSettings;
                    golfie = _closure2_slot0;
                    tangon = entity.body;
                    kiloes = tangon.id;
                    report = {};
                    tangon = _closure1_slot7;
                    tangon = tangon.OPT_IN_ENABLED;
                    report['flags'] = tangon;
                    offset = _closure1_slot0;
                    tangon = 8;
                    tangon = romeon[tangon];
                    tangon = offset.bind(yankee)(tangon);
                    tangon = tangon.NotificationLabels;
                    foxtra = tangon.OptedIn;
                    output = verify;
                    sizing = golfie;
                    backup = report;
                    tangon = output[option](sizing, kiloes, backup, foxtra, romeon);
 130:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 9;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.checkGuildTemplateDirty;
                    michal = _closure2_slot0;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            entity = function(argFoo) {
                entity = argFoo;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 3;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE';
                michal['type'] = report;
                report = entity.body;
                michal['errors'] = report;
                michal = zuuluu.bind(tangon)(michal);
                throw entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 382:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            result = 'Unexpected missing SKU';
            echoed = michal;
            entity = new echoed[zuuluu](result, output);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    michal['createChannel'] = golfie;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: createRoleSubscriptionTemplateChannel
        michal = _closure1_slot1;
        option = _closure1_slot2;
        entity = 4;
        entity = option[entity];
        golfie = undefined;
        zuuluu = michal.bind(golfie)(entity);
        michal = zuuluu.post;
        entity = {};
        verify = _closure1_slot6;
        oscard = verify.GUILD_CHANNELS;
        tangon = argFoo;
        tangon = oscard.bind(verify)(tangon);
        entity['url'] = tangon;
        tangon = {};
        oscard = argBar;
        tangon['name'] = oscard;
        oscard = argBaz;
        tangon['type'] = oscard;
        oscard = argCor;
        tangon['topic'] = oscard;
        entity['body'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = {};
        oscard = _closure1_slot0;
        report = 5;
        report = option[report];
        report = oscard.bind(golfie)(report);
        report = report.NetworkActionNames;
        report = report.CHANNEL_CREATE;
        tangon['event'] = report;
        report = function(argFoo) { // Original name: properties
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = argFoo;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 6;
                entity = zuuluu[entity];
                golfie = undefined;
                zuuluu = michal.bind(golfie)(entity);
                michal = zuuluu.exact;
                entity = {};
                tangon = true;
                entity['is_private'] = tangon;
                oscard = null;
                option = oscard == report;
                tangon = undefined;
                if(option) { _fun00008_ip = 73; continue _fun00007 }
 54:
                option = report.body;
                verify = oscard == option;
                tangon = undefined;
                if(verify) { _fun00008_ip = 73; continue _fun00007 }
 68:
                tangon = option.id;
 73:
                entity['channel_id'] = tangon;
                option = oscard == report;
                tangon = undefined;
                if(option) { _fun00008_ip = 105; continue _fun00007 }
 86:
                report = report.body;
                oscard = oscard == report;
                tangon = undefined;
                if(oscard) { _fun00008_ip = 105; continue _fun00007 }
 100:
                tangon = report.type;
 105:
                entity['channel_type'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        tangon['properties'] = report;
        entity['trackedActionData'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['createRoleSubscriptionTemplateChannel'] = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/CreateChannelActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();