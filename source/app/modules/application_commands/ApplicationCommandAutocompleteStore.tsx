// app/modules/application_commands/ApplicationCommandAutocompleteStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: getOrCreateChannelState
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot10;
            michal = tangon.has;
            michal = michal.bind(tangon)(zuuluu);
            if(michal) { _fun00004_ip = 239; continue _fun00003 }
 26:
            report = _closure1_slot10;
            tangon = report.set;
            michal = {};
            golfie = _closure1_slot7;
            oscard = golfie.getActiveCommand;
            option = oscard.bind(golfie)(zuuluu);
            oscard = null;
            verify = oscard == option;
            oscard = undefined;
            golfie = undefined;
            if(verify) { _fun00004_ip = 70; continue _fun00003 }
 65:
            golfie = option.id;
 70:
            michal['commandId'] = golfie;
            option = _closure1_slot7;
            golfie = option.getActiveOptionName;
            golfie = golfie.bind(option)(zuuluu);
            michal['optionName'] = golfie;
            golfie = global;
            option = golfie.Map;
            verify = option.prototype;
            verify = Object.create(verify, {constructor: {value: option}});
            romeon = verify;
            option = new romeon[option](yankee);
            option = option instanceof Object ? option : verify;
            michal['optionNameToAutocompleteQueries'] = option;
            option = golfie.Map;
            verify = option.prototype;
            verify = Object.create(verify, {constructor: {value: option}});
            romeon = verify;
            option = new romeon[option](yankee);
            option = option instanceof Object ? option : verify;
            michal['optionNameToLastResults'] = option;
            option = golfie.Map;
            verify = option.prototype;
            verify = Object.create(verify, {constructor: {value: option}});
            romeon = verify;
            option = new romeon[option](yankee);
            option = option instanceof Object ? option : verify;
            michal['optionNameToNonce'] = option;
            golfie = golfie.Map;
            option = golfie.prototype;
            option = Object.create(option, {constructor: {value: golfie}});
            romeon = option;
            golfie = new romeon[golfie](yankee);
            golfie = golfie instanceof Object ? golfie : option;
            michal['optionNameToLastQuery'] = golfie;
            golfie = false;
            michal['lastErrored'] = golfie;
            michal['lastResponseNonce'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 239:
            michal = _closure1_slot10;
            entity = michal.get;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    offset = function() { // Original name: handleInit
        zuuluu = _closure1_slot9;
        michal = zuuluu.clear;
        michal = michal.bind(zuuluu)();
        michal = _closure1_slot10;
        entity = michal.clear;
        entity = entity.bind(michal)();
        entity = true;
        return entity;
    };
    verify = function(argFoo) { // Original name: handleSetActiveCommand
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            report = entity.command;
            zuuluu = _closure1_slot14;
            entity = null;
            oscard = entity == report;
            entity = undefined;
            michal = undefined;
            if(oscard) { _fun00006_ip = 39; continue _fun00005 }
 34:
            michal = report.id;
 39:
            michal = zuuluu.bind(entity)(tangon, michal);
            return entity;
        }
    };
    entity = function(argFoo, argBar) { // Original name: handleCommandChange
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = _closure1_slot7;
            michal = zuuluu.getActiveOptionName;
            zuuluu = michal.bind(zuuluu)(report);
            michal = _closure1_slot10;
            entity = michal.get;
            michal = entity.bind(michal)(report);
            report = null;
            entity = report != michal;
            if(!entity) { _fun00008_ip = 73; continue _fun00007 }
 47:
            oscard = michal.commandId;
            oscard = tangon !== oscard;
            if(oscard) { _fun00008_ip = 70; continue _fun00007 }
 60:
            golfie = michal.optionName;
            oscard = zuuluu !== golfie;
 70:
            entity = oscard;
 73:
            if(!entity) { _fun00008_ip = 182; continue _fun00007 }
 76:
            report = report != tangon;
            if(!report) { _fun00008_ip = 93; continue _fun00007 }
 83:
            oscard = michal.commandId;
            report = tangon !== oscard;
 93:
            if(!report) { _fun00008_ip = 160; continue _fun00007 }
 96:
            oscard = michal.optionNameToLastResults;
            report = oscard.clear;
            report = report.bind(oscard)();
            oscard = michal.optionNameToNonce;
            report = oscard.clear;
            report = report.bind(oscard)();
            oscard = michal.optionNameToLastQuery;
            report = oscard.clear;
            report = report.bind(oscard)();
            oscard = michal.optionNameToAutocompleteQueries;
            report = oscard.clear;
            report = report.bind(oscard)();
 160:
            report = false;
            michal['lastErrored'] = report;
            michal['commandId'] = tangon;
            michal['optionName'] = zuuluu;
            entity = true;
 182:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    michal = global;
    romeon = michal.Object;
    yankee = romeon.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot2 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 6;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.AnalyticEvents;
    var _closure1_slot8 = option;
    option = michal.Map;
    yankee = option.prototype;
    yankee = Object.create(yankee, {constructor: {value: option}});
    sizing = yankee;
    option = new sizing[option](kiloes);
    option = option instanceof Object ? option : yankee;
    var _closure1_slot9 = option;
    option = michal.Map;
    yankee = option.prototype;
    yankee = Object.create(yankee, {constructor: {value: option}});
    sizing = yankee;
    option = new sizing[option](kiloes);
    option = option instanceof Object ? option : yankee;
    var _closure1_slot10 = option;
    michal = michal.Map;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    sizing = option;
    michal = new sizing[michal](kiloes);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot11 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: ApplicationCommandAutocompleteStore
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot12;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00010_ip = 69; continue _fun00009 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00010_ip = 105; continue _fun00009;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.waitFor;
            entity = _closure1_slot7;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'getLastErrored';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot13;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.lastErrored;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getAutocompleteChoices';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = _closure1_slot13;
                entity = undefined;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                tangon = michal.optionNameToAutocompleteQueries;
                zuuluu = tangon.get;
                michal = argBar;
                tangon = zuuluu.bind(tangon)(michal);
                michal = null;
                michal = michal == tangon;
                if(michal) { _fun00012_ip = 58; continue _fun00011 }
 45:
                zuuluu = tangon.get;
                michal = argBaz;
                entity = zuuluu.bind(tangon)(michal);
 58:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getAutocompleteLastChoices';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            zuuluu = _closure1_slot13;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            zuuluu = entity.optionNameToLastResults;
            michal = zuuluu.get;
            entity = argBar;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getLastResponseNonce';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot13;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.lastResponseNonce;
            return entity;
        };
        report['value'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'ApplicationCommandAutocompleteStore';
    option['displayName'] = michal;
    michal = 9;
    michal = oscard[michal];
    kiloes = golfie.bind(entity)(michal);
    michal = {};
    michal['CONNECTION_OPEN'] = offset;
    michal['LOGOUT'] = offset;
    michal['CHANNEL_SELECT'] = offset;
    offset = function(argFoo) { // Original name: handleApplicationCommandAutocompleteRequest
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            golfie = entity.nonce;
            yankee = entity.channelId;
            offset = entity.query;
            tangon = entity.name;
            entity = _closure1_slot13;
            michal = undefined;
            entity = entity.bind(michal)(yankee);
            oscard = entity.optionNameToLastQuery;
            zuuluu = oscard.get;
            zuuluu = zuuluu.bind(oscard)(tangon);
            if(!(zuuluu !== offset)) { _fun00014_ip = 297; continue _fun00013 }
 61:
            oscard = entity.optionNameToLastQuery;
            zuuluu = oscard.set;
            zuuluu = zuuluu.bind(oscard)(tangon, offset);
            oscard = entity.optionNameToAutocompleteQueries;
            zuuluu = oscard.get;
            verify = zuuluu.bind(oscard)(tangon);
            oscard = null;
            option = oscard == verify;
            zuuluu = undefined;
            if(option) { _fun00014_ip = 115; continue _fun00013 }
 105:
            option = verify.get;
            zuuluu = option.bind(verify)(offset);
 115:
            if(!(oscard == zuuluu)) { _fun00014_ip = 268; continue _fun00013 }
 122:
            verify = entity.optionNameToNonce;
            option = verify.get;
            verify = option.bind(verify)(tangon);
            if(!(oscard != verify)) { _fun00014_ip = 156; continue _fun00013 }
 142:
            option = _closure1_slot9;
            oscard = option.delete;
            oscard = oscard.bind(option)(verify);
 156:
            verify = _closure1_slot9;
            option = verify.set;
            oscard = {};
            oscard['channelId'] = yankee;
            oscard['query'] = offset;
            oscard['name'] = tangon;
            oscard = option.bind(verify)(golfie, oscard);
            option = _closure1_slot11;
            oscard = option.set;
            report = global;
            report = report.Date;
            verify = report.prototype;
            verify = Object.create(verify, {constructor: {value: report}});
            backup = verify;
            report = new backup[report](foxtra);
            report = report instanceof Object ? report : verify;
            report = oscard.bind(option)(golfie, report);
            oscard = entity.optionNameToNonce;
            report = oscard.set;
            report = report.bind(oscard)(tangon, golfie);
            report = entity.lastErrored;
            michal = undefined;
            if(!report) { _fun00014_ip = 266; continue _fun00013 }
 256:
            report = false;
            entity['lastErrored'] = report;
            michal = true;
 266:
            return michal;
 268:
            michal = false;
            entity['lastErrored'] = michal;
            michal = entity.optionNameToLastResults;
            entity = michal.set;
            entity = entity.bind(michal)(tangon, zuuluu);
            entity = true;
            return entity;
 297:
            entity = false;
            return entity;
        }
    };
    michal['APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST'] = offset;
    offset = function(argFoo) { // Original name: handleApplicationCommandAutocompleteResponse
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            verify = entity.choices;
            michal = entity.nonce;
            tangon = _closure1_slot9;
            zuuluu = tangon.get;
            zuuluu = zuuluu.bind(tangon)(michal);
            report = null;
            if(!(report != zuuluu)) { _fun00016_ip = 443; continue _fun00015 }
 41:
            oscard = _closure1_slot9;
            tangon = oscard.delete;
            tangon = tangon.bind(oscard)(michal);
            tangon = report == verify;
            option = undefined;
            oscard = undefined;
            if(tangon) { _fun00016_ip = 83; continue _fun00015 }
 66:
            golfie = verify.map;
            tangon = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = argFoo;
                    entity = {};
                    oscard = entity;
                    report = michal;
                    zuuluu = copyDataProperties(oscard, report);
                    zuuluu = michal.name_localized;
                    tangon = null;
                    if(!(tangon == zuuluu)) { _fun00018_ip = 32; continue _fun00017 }
 27:
                    zuuluu = michal.name;
 32:
                    michal = 'displayName';
                    entity[michal] = zuuluu;
                    return entity;
                }
            };
            oscard = golfie.bind(verify)(tangon);
 83:
            if(!(report == oscard)) { _fun00016_ip = 91; continue _fun00015 }
 87:
            oscard = new Array(0);
 91:
            golfie = _closure1_slot11;
            tangon = golfie.get;
            offset = tangon.bind(golfie)(michal);
            golfie = report != offset;
            tangon = 0;
            if(!golfie) { _fun00016_ip = 166; continue _fun00015 }
 114:
            golfie = global;
            golfie = golfie.Date;
            verify = golfie.prototype;
            verify = Object.create(verify, {constructor: {value: golfie}});
            kiloes = verify;
            golfie = new kiloes[golfie](backup);
            verify = golfie instanceof Object ? golfie : verify;
            golfie = verify.getTime;
            verify = golfie.bind(verify)();
            golfie = offset.getTime;
            golfie = golfie.bind(offset)();
            tangon = verify - golfie;
 166:
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            golfie = 7;
            golfie = offset[golfie];
            yankee = verify.bind(option)(golfie);
            offset = yankee.trackWithMetadata;
            golfie = _closure1_slot8;
            verify = golfie.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE;
            golfie = {};
            golfie['duration_ms'] = tangon;
            tangon = false;
            golfie['error'] = tangon;
            romeon = oscard.length;
            golfie['num_options'] = romeon;
            golfie = offset.bind(yankee)(verify, golfie);
            verify = _closure1_slot11;
            golfie = verify.delete;
            golfie = golfie.bind(verify)(michal);
            golfie = _closure1_slot13;
            entity = zuuluu.channelId;
            entity = golfie.bind(option)(entity);
            verify = entity.optionNameToAutocompleteQueries;
            option = verify.get;
            golfie = zuuluu.name;
            golfie = option.bind(verify)(golfie);
            if(!(report == golfie)) { _fun00016_ip = 334; continue _fun00015 }
 284:
            offset = entity.optionNameToAutocompleteQueries;
            verify = offset.set;
            option = zuuluu.name;
            golfie = global;
            golfie = golfie.Map;
            yankee = golfie.prototype;
            yankee = Object.create(yankee, {constructor: {value: golfie}});
            kiloes = yankee;
            golfie = new kiloes[golfie](backup);
            golfie = golfie instanceof Object ? golfie : yankee;
            golfie = verify.bind(offset)(option, golfie);
 334:
            verify = entity.optionNameToAutocompleteQueries;
            option = verify.get;
            golfie = zuuluu.name;
            option = option.bind(verify)(golfie);
            if(!(report != option)) { _fun00016_ip = 375; continue _fun00015 }
 359:
            golfie = option.set;
            report = zuuluu.query;
            report = golfie.bind(option)(report, oscard);
 375:
            option = entity.optionNameToLastQuery;
            golfie = option.get;
            report = zuuluu.name;
            golfie = golfie.bind(option)(report);
            report = zuuluu.query;
            if(!(golfie === report)) { _fun00016_ip = 433; continue _fun00015 }
 405:
            entity['lastErrored'] = tangon;
            report = entity.optionNameToLastResults;
            tangon = report.set;
            zuuluu = zuuluu.name;
            zuuluu = tangon.bind(report)(zuuluu, oscard);
 433:
            entity['lastResponseNonce'] = michal;
            entity = true;
            return entity;
 443:
            entity = false;
            return entity;
        }
    };
    michal['APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE'] = offset;
    offset = function(argFoo) { // Original name: handleInteractionFailure
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            golfie = entity.nonce;
            entity = null;
            if(!(entity != golfie)) { _fun00020_ip = 228; continue _fun00019 }
 18:
            tangon = _closure1_slot9;
            michal = tangon.get;
            michal = michal.bind(tangon)(golfie);
            if(!(entity != michal)) { _fun00020_ip = 224; continue _fun00019 }
 42:
            report = _closure1_slot9;
            tangon = report.delete;
            tangon = tangon.bind(report)(golfie);
            report = _closure1_slot11;
            tangon = report.get;
            oscard = tangon.bind(report)(golfie);
            tangon = entity != oscard;
            entity = 0;
            if(!tangon) { _fun00020_ip = 131; continue _fun00019 }
 79:
            tangon = global;
            tangon = tangon.Date;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            foxtra = report;
            tangon = new foxtra[tangon](romeon);
            report = tangon instanceof Object ? tangon : report;
            tangon = report.getTime;
            report = tangon.bind(report)();
            tangon = oscard.getTime;
            tangon = tangon.bind(oscard)();
            entity = report - tangon;
 131:
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 7;
            report = report[tangon];
            tangon = undefined;
            verify = oscard.bind(tangon)(report);
            option = verify.trackWithMetadata;
            report = _closure1_slot8;
            oscard = report.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE;
            report = {};
            report['duration_ms'] = entity;
            entity = true;
            report['error'] = entity;
            report = option.bind(verify)(oscard, report);
            oscard = _closure1_slot11;
            report = oscard.delete;
            report = report.bind(oscard)(golfie);
            zuuluu = _closure1_slot13;
            michal = michal.channelId;
            michal = zuuluu.bind(tangon)(michal);
            michal['lastErrored'] = entity;
            return entity;
 224:
            entity = false;
            return entity;
 228:
            entity = false;
            return entity;
        }
    };
    michal['INTERACTION_FAILURE'] = offset;
    michal['APPLICATION_COMMAND_SET_ACTIVE_COMMAND'] = verify;
    michal['APP_LAUNCHER_SET_ACTIVE_COMMAND'] = verify;
    tangon = function(argFoo) { // Original name: handleUpdateChannelState
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            report = entity.command;
            zuuluu = _closure1_slot14;
            entity = null;
            oscard = entity == report;
            entity = undefined;
            michal = undefined;
            if(oscard) { _fun00022_ip = 39; continue _fun00021 }
 34:
            michal = report.id;
 39:
            michal = zuuluu.bind(entity)(tangon, michal);
            return entity;
        }
    };
    michal['APPLICATION_COMMAND_UPDATE_CHANNEL_STATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    sizing = tangon;
    backup = michal;
    michal = new sizing[option](kiloes, backup, foxtra);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/application_commands/ApplicationCommandAutocompleteStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();