// app/modules/guild_automod/GuildAutomodActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: _transformClientActionToApiAction
        michal = argFoo;
        entity = {};
        zuuluu = michal.type;
        entity['type'] = zuuluu;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon._transformMetadataToSnakeCase;
        michal = michal.metadata;
        michal = zuuluu.bind(tangon)(michal);
        entity['metadata'] = michal;
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: _transformClientRuleToApiRule
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 4;
            entity = report[entity];
            verify = undefined;
            report = tangon.bind(verify)(entity);
            tangon = report._transformMetadataToSnakeCase;
            entity = michal.triggerMetadata;
            tangon = tangon.bind(report)(entity);
            report = null;
            if(!(report != tangon)) { _fun00002_ip = 56; continue _fun00001 }
 51:
            entity = delete tangon.keywordLists;
 56:
            entity = {};
            oscard = michal.id;
            entity['id'] = oscard;
            oscard = michal.name;
            entity['name'] = oscard;
            oscard = michal.guildId;
            entity['guild_id'] = oscard;
            oscard = michal.eventType;
            entity['event_type'] = oscard;
            oscard = michal.triggerType;
            entity['trigger_type'] = oscard;
            entity['trigger_metadata'] = tangon;
            golfie = michal.actions;
            oscard = golfie.filter;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 5;
            tangon = offset[tangon];
            tangon = option.bind(verify)(tangon);
            tangon = tangon.isNotNullish;
            oscard = oscard.bind(golfie)(tangon);
            tangon = oscard.map;
            zuuluu = _closure1_slot9;
            zuuluu = tangon.bind(oscard)(zuuluu);
            entity['actions'] = zuuluu;
            zuuluu = michal.enabled;
            entity['enabled'] = zuuluu;
            zuuluu = michal.creatorId;
            entity['creator_id'] = zuuluu;
            zuuluu = michal.position;
            entity['position'] = zuuluu;
            zuuluu = global;
            golfie = zuuluu.Array;
            oscard = golfie.from;
            tangon = michal.exemptChannels;
            if(!(report == tangon)) { _fun00002_ip = 229; continue _fun00001 }
 225:
            tangon = new Array(0);
 229:
            tangon = oscard.bind(golfie)(tangon);
            entity['exempt_channels'] = tangon;
            tangon = zuuluu.Array;
            zuuluu = tangon.from;
            michal = michal.exemptRoles;
            if(!(report == michal)) { _fun00002_ip = 264; continue _fun00001 }
 260:
            michal = new Array(0);
 264:
            michal = zuuluu.bind(tangon)(michal);
            entity['exempt_roles'] = michal;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: _transformApiActionToClientAction
        michal = argFoo;
        entity = {};
        zuuluu = michal.type;
        entity['type'] = zuuluu;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon._transformMetadataToCamelCase;
        michal = michal.metadata;
        michal = zuuluu.bind(tangon)(michal);
        entity['metadata'] = michal;
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: _transformApiRuletoClientRule
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = {};
            tangon = michal.id;
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00004_ip = 69; continue _fun00003 }
 16:
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            report = 6;
            oscard = oscard[report];
            report = undefined;
            golfie = golfie.bind(report)(oscard);
            oscard = golfie.fromTimestamp;
            report = global;
            option = report.Date;
            report = option.now;
            report = report.bind(option)();
            tangon = oscard.bind(golfie)(report);
 69:
            entity['id'] = tangon;
            tangon = michal.name;
            entity['name'] = tangon;
            tangon = michal.guild_id;
            entity['guildId'] = tangon;
            tangon = michal.event_type;
            entity['eventType'] = tangon;
            tangon = michal.trigger_type;
            entity['triggerType'] = tangon;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            report = 4;
            report = offset[report];
            option = undefined;
            golfie = verify.bind(option)(report);
            oscard = golfie._transformMetadataToCamelCase;
            report = michal.trigger_metadata;
            report = oscard.bind(golfie)(report);
            entity['triggerMetadata'] = report;
            golfie = michal.actions;
            oscard = golfie.filter;
            report = 5;
            report = offset[report];
            report = verify.bind(option)(report);
            report = report.isNotNullish;
            oscard = oscard.bind(golfie)(report);
            report = oscard.map;
            tangon = _closure1_slot11;
            tangon = report.bind(oscard)(tangon);
            entity['actions'] = tangon;
            tangon = michal.enabled;
            entity['enabled'] = tangon;
            tangon = michal.creator_id;
            entity['creatorId'] = tangon;
            tangon = michal.position;
            entity['position'] = tangon;
            tangon = global;
            golfie = tangon.Set;
            report = michal.exempt_channels;
            if(!(zuuluu == report)) { _fun00004_ip = 264; continue _fun00003 }
 260:
            report = new Array(0);
 264:
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            romeon = oscard;
            yankee = report;
            report = new romeon[golfie](yankee, offset);
            report = report instanceof Object ? report : oscard;
            entity['exemptChannels'] = report;
            report = tangon.Set;
            michal = michal.exempt_roles;
            if(!(zuuluu == michal)) { _fun00004_ip = 312; continue _fun00003 }
 308:
            michal = new Array(0);
 312:
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            romeon = tangon;
            yankee = michal;
            michal = new romeon[report](yankee, offset);
            michal = michal instanceof Object ? michal : tangon;
            entity['exemptRoles'] = michal;
            michal = entity.triggerMetadata;
            if(!(zuuluu != michal)) { _fun00004_ip = 361; continue _fun00003 }
 350:
            michal = entity.triggerMetadata;
            michal = delete michal.keywordLists;
 361:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _validateAutomodRule
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 151; continue _fun00005 }
 13:
                    michal = _closure1_slot10;
                    report = undefined;
                    golfie = michal.bind(report)(option);
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 7;
                    michal = oscard[michal];
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.post;
                    michal = {};
                    offset = _closure1_slot7;
                    verify = offset.GUILD_AUTOMOD_VALIDATE_RULE;
                    option = option.guildId;
                    option = verify.bind(offset)(option);
                    michal['url'] = option;
                    michal['body'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=103);
 101:
                    return michal;
 103:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 148; continue _fun00005 }
 109:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report._transformMetadataToCamelCase;
                    zuuluu = michal.body;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return zuuluu;
 148:
                    return michal;
 151:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot13 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _createAutomodRule
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 131; continue _fun00007 }
 10:
                    michal = _closure1_slot10;
                    report = undefined;
                    golfie = michal.bind(report)(option);
                    michal = delete golfie.id;
                    tangon = _closure1_slot12;
                    zuuluu = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 7;
                    michal = oscard[michal];
                    michal = zuuluu.bind(report)(michal);
                    oscard = michal.HTTP;
                    zuuluu = oscard.post;
                    michal = {};
                    offset = _closure1_slot7;
                    verify = offset.GUILD_AUTOMOD_RULES;
                    option = option.guildId;
                    option = verify.bind(offset)(option);
                    michal['url'] = option;
                    michal['body'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = zuuluu.bind(oscard)(michal);
                    SaveGenerator(address=109);
 107:
                    return michal;
 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 128; continue _fun00007 }
 115:
                    zuuluu = michal.body;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return zuuluu;
 128:
                    return michal;
 131:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _updateAutomodRule
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 135; continue _fun00009 }
 13:
                    michal = _closure1_slot10;
                    report = undefined;
                    golfie = michal.bind(report)(option);
                    tangon = _closure1_slot12;
                    zuuluu = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 7;
                    michal = oscard[michal];
                    michal = zuuluu.bind(report)(michal);
                    oscard = michal.HTTP;
                    zuuluu = oscard.patch;
                    michal = {};
                    yankee = _closure1_slot7;
                    offset = yankee.GUILD_AUTOMOD_RULE;
                    verify = option.guildId;
                    option = option.id;
                    option = offset.bind(yankee)(verify, option);
                    michal['url'] = option;
                    michal['body'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = zuuluu.bind(oscard)(michal);
                    SaveGenerator(address=113);
 111:
                    return michal;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 132; continue _fun00009 }
 119:
                    zuuluu = michal.body;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return zuuluu;
 132:
                    return michal;
 135:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _deleteAutomodRule
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 100; continue _fun00011 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 7;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.del;
                    michal = {};
                    option = _closure1_slot7;
                    golfie = option.GUILD_AUTOMOD_RULE;
                    oscard = argBar;
                    report = argFoo;
                    report = golfie.bind(option)(oscard, report);
                    michal['url'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=86);
 84:
                    return michal;
 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 97; continue _fun00011 }
 92:
                    zuuluu = true;
                    return zuuluu;
 97:
                    return michal;
 100:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot16 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _fetchAutomodRules
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 147; continue _fun00013 }
 10:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 7;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = report.bind(michal)(zuuluu);
                    report = michal.HTTP;
                    zuuluu = report.get;
                    michal = {};
                    option = _closure1_slot7;
                    golfie = option.GUILD_AUTOMOD_RULES;
                    oscard = argFoo;
                    oscard = golfie.bind(option)(oscard);
                    michal['url'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=84);
 82:
                    return michal;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 144; continue _fun00013 }
 90:
                    zuuluu = global;
                    oscard = zuuluu.Array;
                    report = oscard.isArray;
                    zuuluu = michal.body;
                    zuuluu = report.bind(oscard)(zuuluu);
                    if(zuuluu) { _fun00014_ip = 122; continue _fun00013 }
 116:
                    zuuluu = new Array(0);
                    _fun00014_ip = 141; continue _fun00013;
 122:
                    oscard = michal.body;
                    report = oscard.map;
                    tangon = _closure1_slot12;
                    zuuluu = report.bind(oscard)(tangon);
 141:
                    return zuuluu;
 144:
                    return michal;
 147:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot17 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _executeAlertAction
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    oscard = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 166; continue _fun00015 }
 13:
                    tangon = _closure1_slot5;
                    zuuluu = tangon.can;
                    michal = _closure1_slot8;
                    michal = michal.MANAGE_MESSAGES;
                    michal = zuuluu.bind(tangon)(michal, oscard);
                    if(!michal) { _fun00016_ip = 158; continue _fun00015 }
 45:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 7;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {};
                    option = _closure1_slot7;
                    golfie = option.GUILD_AUTOMOD_ALERT_ACTION;
                    report = oscard.guild_id;
                    report = golfie.bind(option)(report);
                    michal['url'] = report;
                    report = {};
                    golfie = argFoo;
                    report['message_id'] = golfie;
                    oscard = oscard.id;
                    report['channel_id'] = oscard;
                    oscard = argBaz;
                    report['alert_action_type'] = oscard;
                    michal['body'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=152);
 150:
                    return michal;
 152:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00016_ip = 163; continue _fun00015 }
 158:
                    zuuluu = undefined;
                    return zuuluu;
 163:
                    return michal;
 166:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot18 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot6 = golfie;
    golfie = tangon.Endpoints;
    var _closure1_slot7 = golfie;
    tangon = tangon.Permissions;
    var _closure1_slot8 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_automod/GuildAutomodActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: validateAutomodRule
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['validateAutomodRule'] = tangon;
    tangon = function() { // Original name: createAutomodRule
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['createAutomodRule'] = tangon;
    tangon = function() { // Original name: updateAutomodRule
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['updateAutomodRule'] = tangon;
    tangon = function() { // Original name: deleteAutomodRule
        entity = undefined;
        tangon = _closure1_slot16;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['deleteAutomodRule'] = tangon;
    tangon = function() { // Original name: fetchAutomodRules
        entity = undefined;
        tangon = _closure1_slot17;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchAutomodRules'] = tangon;
    tangon = function() { // Original name: executeAlertAction
        entity = undefined;
        tangon = _closure1_slot18;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['executeAlertAction'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: removeMentionRaidRestrictionWithFeedback
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            michal = argBar;
            var _closure2_slot1 = michal;
            michal = argBaz;
            var _closure2_slot2 = michal;
            tangon = _closure1_slot4;
            zuuluu = tangon.getGuild;
            golfie = zuuluu.bind(tangon)(report);
            zuuluu = null;
            zuuluu = zuuluu != golfie;
            if(!zuuluu) { _fun00018_ip = 75; continue _fun00017 }
 49:
            oscard = _closure1_slot5;
            report = oscard.can;
            tangon = _closure1_slot8;
            tangon = tangon.MANAGE_GUILD;
            zuuluu = report.bind(oscard)(tangon, golfie);
 75:
            if(!zuuluu) { _fun00018_ip = 118; continue _fun00017 }
 78:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 8;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.openConfirmRemoveMentionRaid;
            entity = function() {
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                entity = 9;
                michal = report[entity];
                entity = undefined;
                verify = tangon.bind(entity)(michal);
                option = verify.trackWithMetadata;
                michal = _closure1_slot6;
                golfie = michal.GUILD_AUTOMOD_FEEDBACK;
                zuuluu = {};
                michal = 10;
                michal = report[michal];
                michal = tangon.bind(entity)(michal);
                michal = michal.Feedback;
                michal = michal.MENTION_RAID_REMOVE_RESTRICTION;
                zuuluu['feedback_type'] = michal;
                offset = _closure2_slot1;
                zuuluu['decision_id'] = offset;
                zuuluu = option.bind(verify)(golfie, zuuluu);
                zuuluu = 7;
                zuuluu = report[zuuluu];
                zuuluu = tangon.bind(entity)(zuuluu);
                report = zuuluu.HTTP;
                tangon = report.post;
                zuuluu = {};
                option = _closure1_slot7;
                golfie = option.GUILD_AUTOMOD_CLEAR_MENTION_RAID;
                oscard = _closure2_slot0;
                oscard = golfie.bind(option)(oscard);
                zuuluu['url'] = oscard;
                oscard = true;
                zuuluu['rejectWithError'] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
                michal = _closure2_slot2;
                michal = michal.bind(entity)();
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 118:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['removeMentionRaidRestrictionWithFeedback'] = tangon;
    michal = function(argFoo) { // Original name: clearMentionRaidDetected
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 11;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['clearMentionRaidDetected'] = michal;
    return entity;
})();