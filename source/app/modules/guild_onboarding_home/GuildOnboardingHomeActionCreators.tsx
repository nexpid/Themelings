// app/modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    report = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = report;
    var _closure1_slot2 = verify;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    tango = verify[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = verify[tango];
    tango = options.bind(entity)(tango);
    report = tango.AnalyticEvents;
    var _closure1_slot8 = report;
    tango = tango.Endpoints;
    var _closure1_slot9 = tango;
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun100649: for(var _fun100649_ip = 0; ; ) switch(_fun100649_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun100649_ip = 283; continue _fun100649 }
 13:
                    oscar = verify;
                    golf = _closure1_slot1;
                    mike = _closure1_slot2;
                    report = 6;
                    tango = mike[report];
                    mike = undefined;
                    options = golf.bind(mike)(tango);
                    golf = options.dispatch;
                    tango = {};
                    offset = 'GUILD_HOME_SETTINGS_FETCH_START';
                    tango['type'] = offset;
                    tango['guildId'] = verify;
                    tango = golf.bind(options)(tango);
 67: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 7;
                    tango = options[tango];
                    tango = golf.bind(mike)(tango);
                    options = tango.HTTP;
                    golf = options.get;
                    tango = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    yankee = _closure1_slot9;
                    offset = yankee.GUILD_HOME_SETTINGS;
                    verify = oscar;
                    verify = offset.bind(yankee)(verify);
                    tango['url'] = verify;
                    tango = golf.bind(options)(tango);
                    SaveGenerator(address=140);
 138:
                    return tango;
 140:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun100649_ip = 232; continue _fun100649 }
 146:
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    golf = 8;
                    golf = options[golf];
                    offset = verify.bind(mike)(golf);
                    verify = offset.settingsFromServer;
                    golf = tango.body;
                    golf = verify.bind(offset)(golf);
                    verify = _closure1_slot1;
                    options = options[report];
                    offset = verify.bind(mike)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'GUILD_HOME_SETTINGS_FETCH_SUCCESS';
                    options['type'] = yankee;
                    yankee = oscar;
                    options['guildId'] = yankee;
                    options['homeSettings'] = golf;
                    options = verify.bind(offset)(options);
 229: // try_end0
                    return golf;
 232:
                    return tango;
 235: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'GUILD_HOME_SETTINGS_FETCH_FAIL';
                    zulu['type'] = golf;
                    zulu['guildId'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 283:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    oscar = tango.bind(entity)();
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun100653: for(var _fun100653_ip = 0; ; ) switch(_fun100653_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun100653_ip = 309; continue _fun100653 }
 13:
                    report = oscar;
                    tango = _closure1_slot4;
                    zulu = tango.isFullServerPreview;
                    zulu = zulu.bind(tango)(oscar);
                    if(zulu) { _fun100653_ip = 304; continue _fun100653 }
 40:
                    golf = _closure1_slot1;
                    zulu = _closure1_slot2;
                    oscar = 6;
                    zulu = zulu[oscar];
                    tango = undefined;
                    options = golf.bind(tango)(zulu);
                    golf = options.dispatch;
                    zulu = {};
                    verify = 'GUILD_NEW_MEMBER_ACTIONS_FETCH_START';
                    zulu['type'] = verify;
                    verify = report;
                    zulu['guildId'] = verify;
                    zulu = golf.bind(options)(zulu);
 91: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 7;
                    zulu = options[zulu];
                    zulu = golf.bind(tango)(zulu);
                    options = zulu.HTTP;
                    golf = options.get;
                    zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    yankee = _closure1_slot9;
                    offset = yankee.GUILD_MEMBER_ACTIONS;
                    verify = report;
                    verify = offset.bind(yankee)(verify);
                    zulu['url'] = verify;
                    zulu = golf.bind(options)(zulu);
                    SaveGenerator(address=164);
 162:
                    return zulu;
 164:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun100653_ip = 256; continue _fun100653 }
 170:
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    golf = 8;
                    golf = options[golf];
                    offset = verify.bind(tango)(golf);
                    verify = offset.actionsFromServer;
                    golf = zulu.body;
                    golf = verify.bind(offset)(golf);
                    verify = _closure1_slot1;
                    options = options[oscar];
                    offset = verify.bind(tango)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS';
                    options['type'] = yankee;
                    yankee = report;
                    options['guildId'] = yankee;
                    options['memberActions'] = golf;
                    options = verify.bind(offset)(options);
 253: // try_end0
                    return golf;
 256:
                    return zulu;
 259: // catch_target0
                    CatchBlockStart(arg_register=2);
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    mike = mike[oscar];
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    oscar = 'GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL';
                    mike['type'] = oscar;
                    mike['guildId'] = report;
                    mike = zulu.bind(tango)(mike);
 304:
                    mike = undefined;
                    return mike;
 309:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    report = tango.bind(entity)();
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun100657: for(var _fun100657_ip = 0; ; ) switch(_fun100657_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun100657_ip = 246; continue _fun100657 }
 13:
                    oscar = verify;
                    golf = _closure1_slot1;
                    mike = _closure1_slot2;
                    report = 6;
                    tango = mike[report];
                    mike = undefined;
                    options = golf.bind(mike)(tango);
                    golf = options.dispatch;
                    tango = {};
                    offset = 'GUILD_NEW_MEMBER_ACTIONS_DELETE_START';
                    tango['type'] = offset;
                    tango['guildId'] = verify;
                    tango = golf.bind(options)(tango);
 67: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 7;
                    tango = options[tango];
                    tango = golf.bind(mike)(tango);
                    options = tango.HTTP;
                    golf = options.del;
                    tango = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    yankee = _closure1_slot9;
                    offset = yankee.GUILD_MEMBER_ACTIONS;
                    verify = oscar;
                    verify = offset.bind(yankee)(verify);
                    tango['url'] = verify;
                    tango = golf.bind(options)(tango);
                    SaveGenerator(address=141);
 139:
                    return tango;
 141:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun100657_ip = 195; continue _fun100657 }
 147:
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[report];
                    verify = options.bind(mike)(golf);
                    options = verify.dispatch;
                    golf = {};
                    offset = 'GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS';
                    golf['type'] = offset;
                    offset = oscar;
                    golf['guildId'] = offset;
                    golf = options.bind(verify)(golf);
 193: // try_end0
                    _fun100657_ip = 243; continue _fun100657;
 195:
                    return tango;
 198: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'GUILD_NEW_MEMBER_ACTIONS_DELETE_FAIL';
                    zulu['type'] = golf;
                    zulu['guildId'] = oscar;
                    zulu = tango.bind(report)(zulu);
 243:
                    return mike;
 246:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    tango = tango.bind(entity)();
    golf = 12;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx';
    golf = options.bind(verify)(golf);
    zulu['fetchGuildHomeSettings'] = oscar;
    zulu['fetchNewMemberActions'] = report;
    zulu['clearNewMemberActions'] = tango;
    tango = function(argFoo, argBar) {
        _fun100659: for(var _fun100659_ip = 0; ; ) switch(_fun100659_ip) {
 0:
            offset = argFoo;
            report = argBar;
            zulu = arguments[2];
            entity = undefined;
            if(!(zulu === entity)) { _fun100659_ip = 17; continue _fun100659 }
 15:
            zulu = true;
 17:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 6;
            tango = golf[tango];
            golf = oscar.bind(entity)(tango);
            oscar = golf.dispatch;
            tango = {};
            options = 'SELECT_HOME_RESOURCE_CHANNEL';
            tango['type'] = options;
            tango['guildId'] = offset;
            tango['channelId'] = report;
            tango = oscar.bind(golf)(tango);
            golf = null;
            if(!(golf != report)) { _fun100659_ip = 270; continue _fun100659 }
 79:
            oscar = _closure1_slot5;
            tango = oscar.getChannel;
            verify = tango.bind(oscar)(report);
            oscar = _closure1_slot6;
            tango = oscar.getResourceForChannel;
            oscar = tango.bind(oscar)(offset, report);
            tango = golf == offset;
            if(tango) { _fun100659_ip = 133; continue _fun100659 }
 118:
            yankee = _closure1_slot4;
            options = yankee.isFullServerPreview;
            tango = options.bind(yankee)(offset);
 133:
            if(tango) { _fun100659_ip = 140; continue _fun100659 }
 136:
            tango = golf == verify;
 140:
            if(tango) { _fun100659_ip = 147; continue _fun100659 }
 143:
            tango = golf == oscar;
 147:
            if(tango) { _fun100659_ip = 226; continue _fun100659 }
 150:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 9;
            tango = golf[tango];
            options = oscar.bind(entity)(tango);
            golf = options.track;
            tango = _closure1_slot8;
            oscar = tango.SERVER_GUIDE_CHANNEL_SELECTED;
            tango = {};
            tango['guild_id'] = offset;
            verify = verify.id;
            tango['channel_id'] = verify;
            verify = 'resource';
            tango['server_guide_channel_type'] = verify;
            verify = -1;
            tango['channel_action_type'] = verify;
            tango = golf.bind(options)(oscar, tango);
 226:
            if(!zulu) { _fun100659_ip = 270; continue _fun100659 }
 229:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 10;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.transitionToChannel;
            mike = {};
            oscar = false;
            mike['navigationReplace'] = oscar;
            mike = zulu.bind(tango)(report, mike);
 270:
            return entity;
        }
    };
    zulu['selectHomeResourceChannel'] = tango;
    tango = function(argFoo, argBar) {
        _fun100660: for(var _fun100660_ip = 0; ; ) switch(_fun100660_ip) {
 0:
            offset = argFoo;
            tango = argBar;
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 6;
            zulu = zulu[entity];
            entity = undefined;
            oscar = report.bind(entity)(zulu);
            report = oscar.dispatch;
            zulu = {};
            golf = 'SELECT_NEW_MEMBER_ACTION_CHANNEL';
            zulu['type'] = golf;
            zulu['guildId'] = offset;
            zulu['channelId'] = tango;
            zulu = report.bind(oscar)(zulu);
            report = _closure1_slot5;
            zulu = report.getChannel;
            verify = zulu.bind(report)(tango);
            report = _closure1_slot6;
            zulu = report.getActionForChannel;
            options = zulu.bind(report)(offset, tango);
            report = null;
            zulu = report == offset;
            if(zulu) { _fun100660_ip = 115; continue _fun100660 }
 100:
            golf = _closure1_slot4;
            oscar = golf.isFullServerPreview;
            zulu = oscar.bind(golf)(offset);
 115:
            if(zulu) { _fun100660_ip = 122; continue _fun100660 }
 118:
            zulu = report == verify;
 122:
            if(zulu) { _fun100660_ip = 129; continue _fun100660 }
 125:
            zulu = report == options;
 129:
            if(zulu) { _fun100660_ip = 210; continue _fun100660 }
 132:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 9;
            zulu = oscar[zulu];
            golf = report.bind(entity)(zulu);
            oscar = golf.track;
            zulu = _closure1_slot8;
            report = zulu.SERVER_GUIDE_CHANNEL_SELECTED;
            zulu = {};
            zulu['guild_id'] = offset;
            verify = verify.id;
            zulu['channel_id'] = verify;
            verify = 'member action';
            zulu['server_guide_channel_type'] = verify;
            options = options.actionType;
            zulu['channel_action_type'] = options;
            zulu = oscar.bind(golf)(report, zulu);
 210:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 10;
            mike = report[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.transitionToChannel;
            mike = mike.bind(zulu)(tango);
            return entity;
        }
    };
    zulu['selectNewMemberActionChannel'] = tango;
    mike = function(argFoo, argBar) {
        _fun100661: for(var _fun100661_ip = 0; ; ) switch(_fun100661_ip) {
 0:
            options = argFoo;
            golf = argBar;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'COMPLETE_NEW_MEMBER_ACTION';
            mike['type'] = oscar;
            mike['guildId'] = options;
            mike['channelId'] = golf;
            mike = zulu.bind(tango)(mike);
            zulu = _closure1_slot4;
            mike = zulu.isFullServerPreview;
            mike = mike.bind(zulu)(options);
            if(mike) { _fun100661_ip = 372; continue _fun100661 }
 84:
            zulu = _closure1_slot5;
            mike = zulu.getChannel;
            yankee = mike.bind(zulu)(golf);
            zulu = _closure1_slot6;
            mike = zulu.getActionForChannel;
            offset = mike.bind(zulu)(options, golf);
            mike = null;
            if(!(mike != yankee)) { _fun100661_ip = 308; continue _fun100661 }
 123:
            if(!(mike != offset)) { _fun100661_ip = 308; continue _fun100661 }
 130:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 11;
            zulu = oscar[zulu];
            oscar = tango.bind(entity)(zulu);
            tango = oscar.keys;
            romeo = _closure1_slot7;
            zulu = romeo.getCompletedActions;
            zulu = zulu.bind(romeo)(options);
            if(!(mike == zulu)) { _fun100661_ip = 176; continue _fun100661 }
 174:
            zulu = {};
 176:
            zulu = tango.bind(oscar)(zulu);
            var _closure2_slot0 = zulu;
            tango = _closure1_slot6;
            zulu = tango.getNewMemberActions;
            romeo = zulu.bind(tango)(options);
            if(!(mike == romeo)) { _fun100661_ip = 208; continue _fun100661 }
 204:
            romeo = new Array(0);
 208:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            oscar = zulu.bind(entity)(mike);
            tango = oscar.track;
            mike = _closure1_slot8;
            zulu = mike.SERVER_GUIDE_ACTION_COMPLETED;
            mike = {};
            foxtrot = yankee.guild_id;
            mike['guild_id'] = foxtrot;
            yankee = yankee.id;
            mike['channel_id'] = yankee;
            offset = offset.actionType;
            mike['channel_action_type'] = offset;
            yankee = romeo.reduce;
            offset = function(argFoo, argBar) {
                _fun100662: for(var _fun100662_ip = 0; ; ) switch(_fun100662_ip) {
 0:
                    entity = argFoo;
                    if(!entity) { _fun100662_ip = 31; continue _fun100662 }
 6:
                    tango = _closure2_slot0;
                    zulu = tango.includes;
                    mike = argBar;
                    mike = mike.channelId;
                    entity = zulu.bind(tango)(mike);
 31:
                    return entity;
                }
            };
            verify = true;
            verify = yankee.bind(romeo)(offset, verify);
            mike['has_completed_all'] = verify;
            mike = tango.bind(oscar)(zulu, mike);
 308:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 7;
            mike = tango[mike];
            mike = zulu.bind(entity)(mike);
            tango = mike.HTTP;
            zulu = tango.post;
            mike = {};
            oscar = _closure1_slot9;
            report = oscar.GUILD_MEMBER_ACTION_UPDATE;
            report = report.bind(oscar)(options, golf);
            mike['url'] = report;
            report = true;
            mike['rejectWithError'] = report;
            mike = zulu.bind(tango)(mike);
 372:
            return entity;
        }
    };
    zulu['completeNewMemberAction'] = mike;
    return entity;
})();