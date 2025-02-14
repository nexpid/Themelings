// app/modules/guild_automod/GuildAutomodActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: _transformClientActionToApiAction
        mike = argFoo;
        entity = {};
        zulu = mike.type;
        entity['type'] = zulu;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 4;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango._transformMetadataToSnakeCase;
        mike = mike.metadata;
        mike = zulu.bind(tango)(mike);
        entity['metadata'] = mike;
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: _transformClientRuleToApiRule
        _fun125429: for(var _fun125429_ip = 0; ; ) switch(_fun125429_ip) {
 0:
            mike = argFoo;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 4;
            entity = report[entity];
            verify = undefined;
            report = tango.bind(verify)(entity);
            tango = report._transformMetadataToSnakeCase;
            entity = mike.triggerMetadata;
            tango = tango.bind(report)(entity);
            report = null;
            if(!(report != tango)) { _fun125429_ip = 56; continue _fun125429 }
 51:
            entity = delete tango.keywordLists;
 56:
            entity = {};
            oscar = mike.id;
            entity['id'] = oscar;
            oscar = mike.name;
            entity['name'] = oscar;
            oscar = mike.guildId;
            entity['guild_id'] = oscar;
            oscar = mike.eventType;
            entity['event_type'] = oscar;
            oscar = mike.triggerType;
            entity['trigger_type'] = oscar;
            entity['trigger_metadata'] = tango;
            golf = mike.actions;
            oscar = golf.filter;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 5;
            tango = offset[tango];
            tango = options.bind(verify)(tango);
            tango = tango.isNotNullish;
            oscar = oscar.bind(golf)(tango);
            tango = oscar.map;
            zulu = _closure1_slot9;
            zulu = tango.bind(oscar)(zulu);
            entity['actions'] = zulu;
            zulu = mike.enabled;
            entity['enabled'] = zulu;
            zulu = mike.creatorId;
            entity['creator_id'] = zulu;
            zulu = mike.position;
            entity['position'] = zulu;
            zulu = global;
            golf = zulu.Array;
            oscar = golf.from;
            tango = mike.exemptChannels;
            if(!(report == tango)) { _fun125429_ip = 229; continue _fun125429 }
 225:
            tango = new Array(0);
 229:
            tango = oscar.bind(golf)(tango);
            entity['exempt_channels'] = tango;
            tango = zulu.Array;
            zulu = tango.from;
            mike = mike.exemptRoles;
            if(!(report == mike)) { _fun125429_ip = 264; continue _fun125429 }
 260:
            mike = new Array(0);
 264:
            mike = zulu.bind(tango)(mike);
            entity['exempt_roles'] = mike;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: _transformApiActionToClientAction
        mike = argFoo;
        entity = {};
        zulu = mike.type;
        entity['type'] = zulu;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 4;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango._transformMetadataToCamelCase;
        mike = mike.metadata;
        mike = zulu.bind(tango)(mike);
        entity['metadata'] = mike;
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: _transformApiRuletoClientRule
        _fun125431: for(var _fun125431_ip = 0; ; ) switch(_fun125431_ip) {
 0:
            mike = argFoo;
            entity = {};
            tango = mike.id;
            zulu = null;
            if(!(zulu == tango)) { _fun125431_ip = 69; continue _fun125431 }
 16:
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            report = 6;
            oscar = oscar[report];
            report = undefined;
            golf = golf.bind(report)(oscar);
            oscar = golf.fromTimestamp;
            report = global;
            options = report.Date;
            report = options.now;
            report = report.bind(options)();
            tango = oscar.bind(golf)(report);
 69:
            entity['id'] = tango;
            tango = mike.name;
            entity['name'] = tango;
            tango = mike.guild_id;
            entity['guildId'] = tango;
            tango = mike.event_type;
            entity['eventType'] = tango;
            tango = mike.trigger_type;
            entity['triggerType'] = tango;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            report = 4;
            report = offset[report];
            options = undefined;
            golf = verify.bind(options)(report);
            oscar = golf._transformMetadataToCamelCase;
            report = mike.trigger_metadata;
            report = oscar.bind(golf)(report);
            entity['triggerMetadata'] = report;
            golf = mike.actions;
            oscar = golf.filter;
            report = 5;
            report = offset[report];
            report = verify.bind(options)(report);
            report = report.isNotNullish;
            oscar = oscar.bind(golf)(report);
            report = oscar.map;
            tango = _closure1_slot11;
            tango = report.bind(oscar)(tango);
            entity['actions'] = tango;
            tango = mike.enabled;
            entity['enabled'] = tango;
            tango = mike.creator_id;
            entity['creatorId'] = tango;
            tango = mike.position;
            entity['position'] = tango;
            tango = global;
            golf = tango.Set;
            report = mike.exempt_channels;
            if(!(zulu == report)) { _fun125431_ip = 264; continue _fun125431 }
 260:
            report = new Array(0);
 264:
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            romeo = oscar;
            yankee = report;
            report = new romeo[golf](yankee, offset);
            report = report instanceof Object ? report : oscar;
            entity['exemptChannels'] = report;
            report = tango.Set;
            mike = mike.exempt_roles;
            if(!(zulu == mike)) { _fun125431_ip = 312; continue _fun125431 }
 308:
            mike = new Array(0);
 312:
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            romeo = tango;
            yankee = mike;
            mike = new romeo[report](yankee, offset);
            mike = mike instanceof Object ? mike : tango;
            entity['exemptRoles'] = mike;
            mike = entity.triggerMetadata;
            if(!(zulu != mike)) { _fun125431_ip = 361; continue _fun125431 }
 350:
            mike = entity.triggerMetadata;
            mike = delete mike.keywordLists;
 361:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _validateAutomodRule
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun125434: for(var _fun125434_ip = 0; ; ) switch(_fun125434_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun125434_ip = 151; continue _fun125434 }
 13:
                    mike = _closure1_slot10;
                    report = undefined;
                    golf = mike.bind(report)(options);
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 7;
                    mike = oscar[mike];
                    mike = tango.bind(report)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.post;
                    mike = {};
                    offset = _closure1_slot7;
                    verify = offset.GUILD_AUTOMOD_VALIDATE_RULE;
                    options = options.guildId;
                    options = verify.bind(offset)(options);
                    mike['url'] = options;
                    mike['body'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=103);
 101:
                    return mike;
 103:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun125434_ip = 148; continue _fun125434 }
 109:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 4;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report._transformMetadataToCamelCase;
                    zulu = mike.body;
                    zulu = tango.bind(report)(zulu);
                    return zulu;
 148:
                    return mike;
 151:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot13 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _createAutomodRule
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun125437: for(var _fun125437_ip = 0; ; ) switch(_fun125437_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun125437_ip = 131; continue _fun125437 }
 10:
                    mike = _closure1_slot10;
                    report = undefined;
                    golf = mike.bind(report)(options);
                    mike = delete golf.id;
                    tango = _closure1_slot12;
                    zulu = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 7;
                    mike = oscar[mike];
                    mike = zulu.bind(report)(mike);
                    oscar = mike.HTTP;
                    zulu = oscar.post;
                    mike = {};
                    offset = _closure1_slot7;
                    verify = offset.GUILD_AUTOMOD_RULES;
                    options = options.guildId;
                    options = verify.bind(offset)(options);
                    mike['url'] = options;
                    mike['body'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = zulu.bind(oscar)(mike);
                    SaveGenerator(address=109);
 107:
                    return mike;
 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun125437_ip = 128; continue _fun125437 }
 115:
                    zulu = mike.body;
                    zulu = tango.bind(report)(zulu);
                    return zulu;
 128:
                    return mike;
 131:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot14 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _updateAutomodRule
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun125440: for(var _fun125440_ip = 0; ; ) switch(_fun125440_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun125440_ip = 135; continue _fun125440 }
 13:
                    mike = _closure1_slot10;
                    report = undefined;
                    golf = mike.bind(report)(options);
                    tango = _closure1_slot12;
                    zulu = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 7;
                    mike = oscar[mike];
                    mike = zulu.bind(report)(mike);
                    oscar = mike.HTTP;
                    zulu = oscar.patch;
                    mike = {};
                    yankee = _closure1_slot7;
                    offset = yankee.GUILD_AUTOMOD_RULE;
                    verify = options.guildId;
                    options = options.id;
                    options = offset.bind(yankee)(verify, options);
                    mike['url'] = options;
                    mike['body'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = zulu.bind(oscar)(mike);
                    SaveGenerator(address=113);
 111:
                    return mike;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun125440_ip = 132; continue _fun125440 }
 119:
                    zulu = mike.body;
                    zulu = tango.bind(report)(zulu);
                    return zulu;
 132:
                    return mike;
 135:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _deleteAutomodRule
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun125443: for(var _fun125443_ip = 0; ; ) switch(_fun125443_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun125443_ip = 100; continue _fun125443 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 7;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.del;
                    mike = {};
                    options = _closure1_slot7;
                    golf = options.GUILD_AUTOMOD_RULE;
                    oscar = argBar;
                    report = argFoo;
                    report = golf.bind(options)(oscar, report);
                    mike['url'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=86);
 84:
                    return mike;
 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun125443_ip = 97; continue _fun125443 }
 92:
                    zulu = true;
                    return zulu;
 97:
                    return mike;
 100:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot16 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _fetchAutomodRules
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun125446: for(var _fun125446_ip = 0; ; ) switch(_fun125446_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun125446_ip = 147; continue _fun125446 }
 10:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 7;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = report.bind(mike)(zulu);
                    report = mike.HTTP;
                    zulu = report.get;
                    mike = {};
                    options = _closure1_slot7;
                    golf = options.GUILD_AUTOMOD_RULES;
                    oscar = argFoo;
                    oscar = golf.bind(options)(oscar);
                    mike['url'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=84);
 82:
                    return mike;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun125446_ip = 144; continue _fun125446 }
 90:
                    zulu = global;
                    oscar = zulu.Array;
                    report = oscar.isArray;
                    zulu = mike.body;
                    zulu = report.bind(oscar)(zulu);
                    if(zulu) { _fun125446_ip = 122; continue _fun125446 }
 116:
                    zulu = new Array(0);
                    _fun125446_ip = 141; continue _fun125446;
 122:
                    oscar = mike.body;
                    report = oscar.map;
                    tango = _closure1_slot12;
                    zulu = report.bind(oscar)(tango);
 141:
                    return zulu;
 144:
                    return mike;
 147:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot17 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _executeAlertAction
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun125449: for(var _fun125449_ip = 0; ; ) switch(_fun125449_ip) {
 0:
                    StartGenerator();
                    oscar = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun125449_ip = 166; continue _fun125449 }
 13:
                    tango = _closure1_slot5;
                    zulu = tango.can;
                    mike = _closure1_slot8;
                    mike = mike.MANAGE_MESSAGES;
                    mike = zulu.bind(tango)(mike, oscar);
                    if(!mike) { _fun125449_ip = 158; continue _fun125449 }
 45:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 7;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    options = _closure1_slot7;
                    golf = options.GUILD_AUTOMOD_ALERT_ACTION;
                    report = oscar.guild_id;
                    report = golf.bind(options)(report);
                    mike['url'] = report;
                    report = {};
                    golf = argFoo;
                    report['message_id'] = golf;
                    oscar = oscar.id;
                    report['channel_id'] = oscar;
                    oscar = argBaz;
                    report['alert_action_type'] = oscar;
                    mike['body'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=152);
 150:
                    return mike;
 152:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun125449_ip = 163; continue _fun125449 }
 158:
                    zulu = undefined;
                    return zulu;
 163:
                    return mike;
 166:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot18 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot18 = entity;
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
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot6 = golf;
    golf = tango.Endpoints;
    var _closure1_slot7 = golf;
    tango = tango.Permissions;
    var _closure1_slot8 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_automod/GuildAutomodActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: validateAutomodRule
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['validateAutomodRule'] = tango;
    tango = function() { // Original name: createAutomodRule
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['createAutomodRule'] = tango;
    tango = function() { // Original name: updateAutomodRule
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['updateAutomodRule'] = tango;
    tango = function() { // Original name: deleteAutomodRule
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['deleteAutomodRule'] = tango;
    tango = function() { // Original name: fetchAutomodRules
        entity = undefined;
        tango = _closure1_slot17;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchAutomodRules'] = tango;
    tango = function() { // Original name: executeAlertAction
        entity = undefined;
        tango = _closure1_slot18;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['executeAlertAction'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: removeMentionRaidRestrictionWithFeedback
        _fun125456: for(var _fun125456_ip = 0; ; ) switch(_fun125456_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            mike = argBar;
            var _closure2_slot1 = mike;
            mike = argBaz;
            var _closure2_slot2 = mike;
            tango = _closure1_slot4;
            zulu = tango.getGuild;
            golf = zulu.bind(tango)(report);
            zulu = null;
            zulu = zulu != golf;
            if(!zulu) { _fun125456_ip = 75; continue _fun125456 }
 49:
            oscar = _closure1_slot5;
            report = oscar.can;
            tango = _closure1_slot8;
            tango = tango.MANAGE_GUILD;
            zulu = report.bind(oscar)(tango, golf);
 75:
            if(!zulu) { _fun125456_ip = 118; continue _fun125456 }
 78:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 8;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.openConfirmRemoveMentionRaid;
            entity = function() {
                tango = _closure1_slot0;
                report = _closure1_slot2;
                entity = 9;
                mike = report[entity];
                entity = undefined;
                verify = tango.bind(entity)(mike);
                options = verify.trackWithMetadata;
                mike = _closure1_slot6;
                golf = mike.GUILD_AUTOMOD_FEEDBACK;
                zulu = {};
                mike = 10;
                mike = report[mike];
                mike = tango.bind(entity)(mike);
                mike = mike.Feedback;
                mike = mike.MENTION_RAID_REMOVE_RESTRICTION;
                zulu['feedback_type'] = mike;
                offset = _closure2_slot1;
                zulu['decision_id'] = offset;
                zulu = options.bind(verify)(golf, zulu);
                zulu = 7;
                zulu = report[zulu];
                zulu = tango.bind(entity)(zulu);
                report = zulu.HTTP;
                tango = report.post;
                zulu = {};
                options = _closure1_slot7;
                golf = options.GUILD_AUTOMOD_CLEAR_MENTION_RAID;
                oscar = _closure2_slot0;
                oscar = golf.bind(options)(oscar);
                zulu['url'] = oscar;
                oscar = true;
                zulu['rejectWithError'] = oscar;
                zulu = tango.bind(report)(zulu);
                mike = _closure2_slot2;
                mike = mike.bind(entity)();
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 118:
            entity = undefined;
            return entity;
        }
    };
    zulu['removeMentionRaidRestrictionWithFeedback'] = tango;
    mike = function(argFoo) { // Original name: clearMentionRaidDetected
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 11;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearMentionRaidDetected'] = mike;
    return entity;
})();