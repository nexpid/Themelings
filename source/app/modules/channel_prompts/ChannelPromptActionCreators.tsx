// app/modules/channel_prompts/ChannelPromptActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _sendGamingStatsMessage
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golf = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 237; continue _fun00001 }
 13:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 5;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    oscar = mike.HTTP;
                    report = oscar.post;
                    mike = {};
                    verify = _closure1_slot5;
                    options = verify.SEND_GAMING_STATS;
                    options = options.bind(verify)(golf);
                    mike['url'] = options;
                    options = {};
                    verify = {};
                    offset = argFoo;
                    verify['guild_id'] = offset;
                    verify['channel_id'] = golf;
                    offset = argBaz;
                    verify['message_id'] = offset;
                    options['message_reference'] = verify;
                    mike['body'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=117);
 115:
                    return mike;
 117:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 234; continue _fun00001 }
 123:
                    oscar = _closure1_slot4;
                    report = oscar.getMessages;
                    report = report.bind(oscar)(golf);
                    report = report.hasMoreAfter;
                    if(report) { _fun00002_ip = 195; continue _fun00001 }
 147:
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 7;
                    report = options[report];
                    report = oscar.bind(zulu)(report);
                    options = report.ComponentDispatch;
                    oscar = options.dispatch;
                    report = _closure1_slot8;
                    report = report.SCROLLTO_PRESENT;
                    report = oscar.bind(options)(report);
                    _fun00002_ip = 231; continue _fun00001;
 195:
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 6;
                    report = options[report];
                    oscar = oscar.bind(zulu)(report);
                    report = oscar.jumpToPresent;
                    tango = _closure1_slot7;
                    tango = report.bind(oscar)(golf, tango);
 231:
                    return zulu;
 234:
                    return mike;
 237:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _updateGamingStats
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 105; continue _fun00003 }
 10:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 5;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.patch;
                    mike = {};
                    verify = _closure1_slot5;
                    options = verify.UPDATE_GAMING_STATS;
                    golf = oscar.channel_id;
                    oscar = oscar.id;
                    oscar = options.bind(verify)(golf, oscar);
                    mike['url'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=93);
 91:
                    return mike;
 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00004_ip = 102; continue _fun00003 }
 99:
                    return zulu;
 102:
                    return mike;
 105:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DraftType;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Endpoints;
    var _closure1_slot5 = golf;
    golf = tango.MessageTypes;
    var _closure1_slot6 = golf;
    golf = tango.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot7 = golf;
    tango = tango.ComponentActions;
    var _closure1_slot8 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_prompts/ChannelPromptActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: initiateChannelPrompts
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.HTTP;
        zulu = tango.post;
        mike = {};
        report = _closure1_slot5;
        report = report.INITIATE_CHANNEL_PROMPTS;
        mike['url'] = report;
        report = {};
        oscar = argFoo;
        report['guild_ids'] = oscar;
        mike['body'] = report;
        report = true;
        mike['rejectWithError'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['initiateChannelPrompts'] = tango;
    tango = function(argFoo) { // Original name: forcePrompt
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscar = arguments[1];
            entity = undefined;
            if(!(oscar === entity)) { _fun00006_ip = 22; continue _fun00005 }
 9:
            mike = _closure1_slot6;
            oscar = mike.GUILD_DEADCHAT_REVIVE_PROMPT;
 22:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 5;
            mike = tango[mike];
            mike = zulu.bind(entity)(mike);
            tango = mike.HTTP;
            zulu = tango.post;
            mike = {};
            options = _closure1_slot5;
            golf = options.FORCE_SEND_PROMPT;
            report = argFoo;
            report = golf.bind(options)(report);
            mike['url'] = report;
            report = {};
            report['prompt_type'] = oscar;
            mike['body'] = report;
            report = true;
            mike['rejectWithError'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['forcePrompt'] = tango;
    tango = function() { // Original name: sendGamingStatsMessage
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['sendGamingStatsMessage'] = tango;
    mike = function() { // Original name: updateGamingStats
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['updateGamingStats'] = mike;
    return entity;
})();