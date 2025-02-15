// app/modules/interaction_components/InteractionModalUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: useApplicationInfo
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot4;
        zulu = tango.useMemo;
        oscar = report.id;
        mike = new Array(4);
        mike[0] = oscar;
        oscar = report.icon;
        mike[1] = oscar;
        oscar = report.name;
        mike[2] = oscar;
        report = report.bot;
        mike[3] = report;
        entity = function() {
            _fun123825: for(var _fun123825_ip = 0; ; ) switch(_fun123825_ip) {
 0:
                mike = _closure1_slot8;
                entity = mike.getGuildId;
                options = entity.bind(mike)();
                oscar = null;
                entity = oscar != options;
                tango = undefined;
                report = undefined;
                if(!entity) { _fun123825_ip = 83; continue _fun123825 }
 30:
                mike = _closure2_slot0;
                mike = mike.bot;
                mike = oscar != mike;
                report = undefined;
                if(!mike) { _fun123825_ip = 83; continue _fun123825 }
 52:
                golf = _closure1_slot7;
                mike = golf.getMember;
                entity = _closure2_slot0;
                entity = entity.bot;
                entity = entity.id;
                report = mike.bind(golf)(options, entity);
 83:
                entity = {};
                golf = _closure1_slot1;
                options = _closure1_slot2;
                mike = 11;
                mike = options[mike];
                verify = golf.bind(tango)(mike);
                options = verify.getApplicationIconURL;
                golf = {};
                offset = _closure2_slot0;
                yankee = offset.id;
                golf['id'] = yankee;
                offset = offset.icon;
                golf['icon'] = offset;
                offset = true;
                golf['botIconFirst'] = offset;
                yankee = oscar != report;
                offset = undefined;
                if(!yankee) { _fun123825_ip = 164; continue _fun123825 }
 154:
                yankee = _closure2_slot0;
                offset = yankee.bot;
 164:
                golf['bot'] = offset;
                golf = options.bind(verify)(golf);
                entity['applicationIconURL'] = golf;
                if(!(oscar != report)) { _fun123825_ip = 197; continue _fun123825 }
 183:
                report = _closure2_slot0;
                report = report.bot;
                if(!(oscar == report)) { _fun123825_ip = 208; continue _fun123825 }
 197:
                report = _closure2_slot0;
                report = report.name;
                _fun123825_ip = 223; continue _fun123825;
 208:
                oscar = _closure2_slot0;
                oscar = oscar.bot;
                report = oscar.username;
 223:
                entity['applicationName'] = report;
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 12;
                zulu = oscar[zulu];
                zulu = report.bind(tango)(zulu);
                mike = _closure2_slot0;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                entity['applicationBaseUrl'] = mike;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    mike = function(argFoo, argBar) { // Original name: submitModal
        options = argFoo;
        var _closure2_slot0 = options;
        entity = argBar;
        var _closure2_slot1 = entity;
        golf = _closure1_slot1;
        yankee = _closure1_slot2;
        entity = 19;
        entity = yankee[entity];
        zulu = undefined;
        oscar = golf.bind(zulu)(entity);
        report = oscar.fromTimestamp;
        entity = global;
        verify = entity.Date;
        entity = verify.now;
        entity = entity.bind(verify)();
        entity = report.bind(oscar)(entity);
        var _closure2_slot2 = entity;
        verify = options.channelId;
        oscar = _closure1_slot6;
        report = oscar.getChannel;
        oscar = report.bind(oscar)(verify);
        var _closure2_slot3 = oscar;
        report = 18;
        report = yankee[report];
        golf = golf.bind(zulu)(report);
        report = null;
        oscar = report != oscar;
        report = 'expected channel';
        report = golf.bind(zulu)(oscar, report);
        golf = _closure1_slot13;
        oscar = options.customId;
        report = options.components;
        report = golf.bind(zulu)(oscar, report);
        var _closure2_slot4 = report;
        offset = _closure1_slot0;
        mike = 20;
        mike = yankee[mike];
        oscar = offset.bind(zulu)(mike);
        report = oscar.addQueued;
        mike = {};
        golf = {};
        verify = 10;
        verify = yankee[verify];
        verify = offset.bind(zulu)(verify);
        verify = verify.InteractionTypes;
        verify = verify.MODAL_SUBMIT;
        golf['interactionType'] = verify;
        options = options.application;
        options = options.id;
        golf['applicationId'] = options;
        mike['data'] = golf;
        mike = report.bind(oscar)(entity, mike);
        mike = function() { // Original name: send
            _fun123827: for(var _fun123827_ip = 0; ; ) switch(_fun123827_ip) {
 0:
                mike = _closure2_slot1;
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun123827_ip = 26; continue _fun123827 }
 16:
                mike = _closure2_slot1;
                entity = mike.aborted;
 26:
                if(entity) { _fun123827_ip = 262; continue _fun123827 }
 32:
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 21;
                entity = offset[entity];
                options = undefined;
                entity = verify.bind(options)(entity);
                zulu = entity.HTTP;
                mike = zulu.post;
                entity = {};
                report = _closure1_slot12;
                report = report.INTERACTIONS;
                entity['url'] = report;
                report = {};
                golf = 10;
                golf = offset[golf];
                golf = verify.bind(options)(golf);
                golf = golf.InteractionTypes;
                golf = golf.MODAL_SUBMIT;
                report['type'] = golf;
                options = _closure2_slot0;
                golf = options.application;
                golf = golf.id;
                report['application_id'] = golf;
                golf = _closure2_slot3;
                verify = golf.id;
                report['channel_id'] = verify;
                golf = golf.guild_id;
                report['guild_id'] = golf;
                golf = {};
                verify = options.id;
                golf['id'] = verify;
                options = options.customId;
                golf['custom_id'] = options;
                options = _closure2_slot4;
                golf['components'] = options;
                report['data'] = golf;
                golf = _closure1_slot5;
                oscar = golf.getSessionId;
                oscar = oscar.bind(golf)();
                report['session_id'] = oscar;
                oscar = _closure2_slot2;
                report['nonce'] = oscar;
                entity['body'] = report;
                tango = _closure2_slot1;
                entity['signal'] = tango;
                tango = false;
                entity['rejectWithError'] = tango;
                zulu = mike.bind(zulu)(entity);
                mike = zulu.catch;
                entity = function(argFoo) {
                    _fun123828: for(var _fun123828_ip = 0; ; ) switch(_fun123828_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.status;
                        mike = 429;
                        if(!(mike !== zulu)) { _fun123828_ip = 63; continue _fun123828 }
 18:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 20;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = tango.setFailed;
                        mike = _closure2_slot2;
                        mike = zulu.bind(tango)(mike);
                        _fun123828_ip = 136; continue _fun123828;
 63:
                        mike = global;
                        tango = mike.setTimeout;
                        zulu = _closure2_slot5;
                        entity = entity.body;
                        report = entity.retry_after;
                        oscar = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 22;
                        entity = mike[entity];
                        mike = undefined;
                        entity = oscar.bind(mike)(entity);
                        entity = entity.Millis;
                        entity = entity.SECOND;
                        entity = report * entity;
                        entity = tango.bind(mike)(zulu, entity);
 136:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
 262:
                entity = undefined;
                return entity;
            }
        };
        var _closure2_slot5 = mike;
        mike = mike.bind(zulu)();
        return entity;
    };
    var _closure1_slot15 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golf[report];
    report = argCorge;
    report = report.bind(entity)(verify);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    verify = golf[report];
    verify = options.bind(entity)(verify);
    var _closure1_slot9 = verify;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.InteractionModalState;
    var _closure1_slot10 = report;
    report = 7;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot12 = report;
    report = function(argFoo, argBar) { // Original name: getData
        zulu = argBar;
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = zulu.map;
        entity = function(argFoo) {
            _fun123830: for(var _fun123830_ip = 0; ; ) switch(_fun123830_ip) {
 0:
                mike = argFoo;
                tango = mike.type;
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                golf = 10;
                entity = entity[golf];
                report = undefined;
                entity = oscar.bind(report)(entity);
                entity = entity.ComponentType;
                entity = entity.ACTION_ROW;
                if(!(entity !== tango)) { _fun123830_ip = 333; continue _fun123830 }
 52:
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golf];
                entity = oscar.bind(report)(entity);
                entity = entity.ComponentType;
                entity = entity.TEXT_INPUT;
                if(!(entity !== tango)) { _fun123830_ip = 245; continue _fun123830 }
 88:
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golf];
                entity = oscar.bind(report)(entity);
                entity = entity.ComponentType;
                entity = entity.STRING_SELECT;
                if(!(entity !== tango)) { _fun123830_ip = 157; continue _fun123830 }
 121:
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 18;
                entity = oscar[entity];
                oscar = tango.bind(report)(entity);
                tango = false;
                entity = 'unreachable';
                entity = oscar.bind(report)(tango, entity);
                return report;
 157:
                golf = _closure1_slot11;
                oscar = golf.getInteractionComponentState;
                tango = _closure2_slot0;
                entity = mike.id;
                oscar = oscar.bind(golf)(tango, entity);
                entity = {};
                tango = mike.type;
                entity['type'] = tango;
                tango = mike.customId;
                entity['custom_id'] = tango;
                tango = null;
                golf = tango == oscar;
                options = undefined;
                if(golf) { _fun123830_ip = 223; continue _fun123830 }
 218:
                options = oscar.type;
 223:
                golf = mike.type;
                tango = null;
                if(!(options === golf)) { _fun123830_ip = 239; continue _fun123830 }
 234:
                tango = oscar.values;
 239:
                entity['values'] = tango;
                return entity;
 245:
                golf = _closure1_slot11;
                oscar = golf.getInteractionComponentState;
                tango = _closure2_slot0;
                entity = mike.id;
                oscar = oscar.bind(golf)(tango, entity);
                entity = {};
                tango = mike.type;
                entity['type'] = tango;
                tango = mike.customId;
                entity['custom_id'] = tango;
                tango = null;
                golf = tango == oscar;
                options = undefined;
                if(golf) { _fun123830_ip = 311; continue _fun123830 }
 306:
                options = oscar.type;
 311:
                golf = mike.type;
                tango = null;
                if(!(options === golf)) { _fun123830_ip = 327; continue _fun123830 }
 322:
                tango = oscar.value;
 327:
                entity['value'] = tango;
                return entity;
 333:
                entity = {};
                tango = mike.type;
                entity['type'] = tango;
                tango = _closure1_slot13;
                zulu = _closure2_slot0;
                mike = mike.components;
                mike = tango.bind(report)(zulu, mike);
                entity['components'] = mike;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot13 = report;
    report = 23;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/interaction_components/InteractionModalUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: useIsFirstTextInputInModal
        _fun123831: for(var _fun123831_ip = 0; ; ) switch(_fun123831_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            report = undefined;
            zulu = zulu.bind(report)(mike);
            mike = zulu.useComponentStateContext;
            tango = mike.bind(zulu)();
            zulu = null;
            oscar = zulu == tango;
            mike = undefined;
            if(oscar) { _fun123831_ip = 73; continue _fun123831 }
 46:
            tango = tango.modal;
            oscar = zulu == tango;
            mike = undefined;
            if(oscar) { _fun123831_ip = 73; continue _fun123831 }
 61:
            oscar = tango.components;
            tango = 0;
            mike = oscar[tango];
 73:
            tango = zulu == mike;
            zulu = undefined;
            if(tango) { _fun123831_ip = 87; continue _fun123831 }
 82:
            zulu = mike.type;
 87:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 10;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            entity = entity.ComponentType;
            entity = entity.ACTION_ROW;
            entity = zulu === entity;
            if(!entity) { _fun123831_ip = 150; continue _fun123831 }
 126:
            zulu = mike.components;
            mike = 0;
            mike = zulu[mike];
            zulu = mike.id;
            mike = argFoo;
            entity = zulu === mike;
 150:
            return entity;
        }
    };
    zulu['useIsFirstTextInputInModal'] = report;
    report = function(argFoo, argBar) { // Original name: useModalState
        mike = argFoo;
        backup = argBar;
        var _closure2_slot0 = mike;
        var _closure2_slot1 = backup;
        options = mike.application;
        foxtrot = mike.customId;
        var _closure2_slot2 = foxtrot;
        golf = mike.components;
        offset = _closure1_slot1;
        yankee = _closure1_slot2;
        zulu = 13;
        zulu = yankee[zulu];
        oscar = undefined;
        zulu = offset.bind(oscar)(zulu);
        sizing = zulu.bind(oscar)();
        var _closure2_slot3 = sizing;
        tango = _closure1_slot4;
        zulu = tango.useState;
        echo = null;
        zulu = zulu.bind(tango)(echo);
        output = _closure1_slot3;
        kilo = 2;
        zulu = output.bind(oscar)(zulu, kilo);
        romeo = 0;
        tango = zulu[romeo];
        report = 1;
        zulu = zulu[report];
        var _closure2_slot4 = zulu;
        result = _closure1_slot4;
        zulu = result.useState;
        zulu = zulu.bind(result)(echo);
        zulu = output.bind(oscar)(zulu, kilo);
        kilo = zulu[romeo];
        var _closure2_slot5 = kilo;
        zulu = zulu[report];
        var _closure2_slot6 = zulu;
        report = _closure1_slot0;
        zulu = 14;
        zulu = yankee[zulu];
        result = report.bind(oscar)(zulu);
        output = result.useStateFromStores;
        zulu = _closure1_slot9;
        romeo = new Array(1);
        romeo[0] = zulu;
        report = new Array(1);
        report[0] = kilo;
        zulu = function() {
            zulu = _closure1_slot9;
            mike = zulu.getModalState;
            entity = _closure2_slot5;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report = output.bind(result)(romeo, zulu, report);
        var _closure2_slot7 = report;
        zulu = 15;
        zulu = yankee[zulu];
        offset = offset.bind(oscar)(zulu);
        zulu = function() {
            entity = global;
            entity = entity.Set;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            zulu = mike;
            entity = new zulu[entity](mike);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        zulu = offset.bind(oscar)(zulu);
        var _closure2_slot8 = zulu;
        romeo = _closure1_slot4;
        yankee = romeo.useCallback;
        offset = new Array(3);
        offset[0] = sizing;
        offset[1] = mike;
        offset[2] = zulu;
        mike = function() {
            _fun123835: for(var _fun123835_ip = 0; ; ) switch(_fun123835_ip) {
 0:
                zulu = _closure2_slot4;
                entity = undefined;
                tango = null;
                zulu = zulu.bind(entity)(tango);
                zulu = _closure2_slot6;
                zulu = zulu.bind(entity)(tango);
                tango = _closure2_slot8;
                zulu = function(argFoo) {
                    tango = argFoo;
                    mike = true;
                    var _closure4_slot0 = mike;
                    zulu = tango.forEach;
                    mike = function(argFoo) {
                        _fun123837: for(var _fun123837_ip = 0; ; ) switch(_fun123837_ip) {
 0:
                            mike = argFoo;
                            entity = undefined;
                            mike = mike.bind(entity)();
                            if(mike) { _fun123837_ip = 21; continue _fun123837 }
 12:
                            mike = false;
                            _closure4_slot0 = mike;
 21:
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
                    entity = _closure4_slot0;
                    return entity;
                };
                zulu = zulu.bind(entity)(tango);
                if(!zulu) { _fun123835_ip = 76; continue _fun123835 }
 46:
                zulu = _closure2_slot6;
                report = _closure1_slot15;
                tango = _closure2_slot0;
                mike = _closure2_slot3;
                mike = report.bind(entity)(tango, mike);
                mike = zulu.bind(entity)(mike);
 76:
                return entity;
            }
        };
        mike = yankee.bind(romeo)(mike, offset);
        romeo = _closure1_slot4;
        yankee = romeo.useEffect;
        offset = new Array(4);
        offset[0] = kilo;
        offset[1] = report;
        offset[2] = backup;
        offset[3] = foxtrot;
        verify = function() {
            _fun123838: for(var _fun123838_ip = 0; ; ) switch(_fun123838_ip) {
 0:
                tango = _closure2_slot7;
                zulu = _closure1_slot10;
                zulu = zulu.SUCCEEDED;
                if(!(tango === zulu)) { _fun123838_ip = 85; continue _fun123838 }
 24:
                report = _closure1_slot1;
                tango = _closure1_slot2;
                zulu = 16;
                zulu = tango[zulu];
                tango = undefined;
                oscar = report.bind(tango)(zulu);
                report = oscar.dispatch;
                zulu = {};
                golf = 'CLEAR_INTERACTION_MODAL_STATE';
                zulu['type'] = golf;
                golf = _closure2_slot2;
                zulu['customId'] = golf;
                zulu = report.bind(oscar)(zulu);
                zulu = _closure2_slot1;
                zulu = zulu.bind(tango)();
 85:
                tango = _closure2_slot7;
                zulu = _closure1_slot10;
                zulu = zulu.ERRORED;
                if(!(tango === zulu)) { _fun123838_ip = 169; continue _fun123838 }
 103:
                zulu = _closure2_slot4;
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 17;
                tango = golf[entity];
                mike = undefined;
                tango = oscar.bind(mike)(tango);
                report = tango.intl;
                tango = report.string;
                entity = golf[entity];
                entity = oscar.bind(mike)(entity);
                entity = entity.t;
                entity = entity.uJgdEh;
                entity = tango.bind(report)(entity);
                entity = zulu.bind(mike)(entity);
 169:
                entity = undefined;
                return entity;
            }
        };
        verify = yankee.bind(romeo)(verify, offset);
        entity = _closure1_slot14;
        oscar = entity.bind(oscar)(options);
        entity = {};
        entity['components'] = golf;
        golf = oscar.applicationIconURL;
        entity['applicationIconURL'] = golf;
        oscar = oscar.applicationName;
        entity['applicationName'] = oscar;
        entity['submissionState'] = report;
        entity['error'] = tango;
        entity['validators'] = zulu;
        entity['onSubmit'] = mike;
        return entity;
    };
    zulu['useModalState'] = report;
    tango = function(argFoo) { // Original name: useIframeModalState
        _fun123839: for(var _fun123839_ip = 0; ; ) switch(_fun123839_ip) {
 0:
            entity = argFoo;
            zulu = entity.application;
            offset = entity.customId;
            tango = _closure1_slot14;
            romeo = undefined;
            tango = tango.bind(romeo)(zulu);
            oscar = tango.applicationIconURL;
            report = tango.applicationName;
            tango = tango.applicationBaseUrl;
            verify = _closure1_slot6;
            options = verify.getChannel;
            golf = entity.channelId;
            verify = options.bind(verify)(golf);
            golf = _closure1_slot1;
            options = _closure1_slot2;
            mike = 18;
            mike = options[mike];
            yankee = golf.bind(romeo)(mike);
            golf = null;
            options = golf != verify;
            mike = 'channel should not be null';
            mike = yankee.bind(romeo)(options, mike);
            mike = {};
            echo = entity.channelId;
            output = zulu.id;
            options = global;
            zulu = options.HermesInternal;
            romeo = zulu.concat;
            zulu = '';
            yankee = ':';
            update = zulu;
            result = yankee;
            sizing = yankee;
            kilo = offset;
            yankee = update[romeo](echo, result, output, sizing, kilo, backup);
            mike['instance_id'] = yankee;
            mike['custom_id'] = offset;
            offset = entity.channelId;
            mike['channel_id'] = offset;
            offset = verify.guild_id;
            offset = golf != offset;
            if(!offset) { _fun123839_ip = 192; continue _fun123839 }
 183:
            yankee = verify.guild_id;
            offset = zulu !== yankee;
 192:
            if(!offset) { _fun123839_ip = 206; continue _fun123839 }
 195:
            verify = verify.guild_id;
            mike['guild_id'] = verify;
 206:
            options = options.URL;
            golf = golf != tango;
            if(!golf) { _fun123839_ip = 222; continue _fun123839 }
 219:
            zulu = tango;
 222:
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            update = golf;
            echo = zulu;
            zulu = new update[options](echo, result);
            zulu = zulu instanceof Object ? zulu : golf;
            entity = entity.iframePath;
            zulu['pathname'] = entity;
            entity = {};
            entity['applicationIconURL'] = oscar;
            entity['applicationName'] = report;
            entity['applicationBaseUrl'] = tango;
            entity['queryParams'] = mike;
            mike = zulu.toString;
            mike = mike.bind(zulu)();
            entity['iframeUrl'] = mike;
            return entity;
        }
    };
    zulu['useIframeModalState'] = tango;
    zulu['submitModal'] = mike;
    return entity;
})();