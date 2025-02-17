// app/modules/keyword_filter/KeywordUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo, argBar, argBaz) { // Original name: maskStringPreserveSpaces
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            report = arguments[3];
            entity = undefined;
            if(!(report === entity)) { _fun00002_ip = 16; continue _fun00001 }
 14:
            report = false;
 16:
            var _closure2_slot0 = entity;
            entity = global;
            oscar = entity.Math;
            tango = oscar.max;
            mike = argBar;
            verify = 0;
            oscar = tango.bind(oscar)(mike, verify);
            yankee = entity.Math;
            offset = yankee.min;
            mike = golf.length;
            options = 1;
            tango = mike - options;
            mike = argBaz;
            mike = offset.bind(yankee)(mike, tango);
            tango = '*';
            if(!report) { _fun00002_ip = 89; continue _fun00001 }
 83:
            tango = '\\*';
 89:
            _closure2_slot0 = tango;
            report = golf.substring;
            tango = mike + options;
            foxtrot = report.bind(golf)(oscar, tango);
            report = new Array(0);
            backup = report;
            romeo = 0;
            tango = arraySpread(backup, foxtrot, romeo);
            tango = report.map;
            zulu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = ' ';
                    mike = argFoo;
                    if(!(entity !== mike)) { _fun00004_ip = 18; continue _fun00003 }
 11:
                    entity = _closure2_slot0;
 18:
                    return entity;
                }
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.join;
            report = '';
            tango = zulu.bind(tango)(report);
            zulu = golf.substring;
            zulu = zulu.bind(golf)(verify, oscar);
            oscar = golf.substring;
            mike = mike + options;
            mike = oscar.bind(golf)(mike);
            entity = entity.HermesInternal;
            entity = entity.concat;
            entity = entity.bind(report)(zulu, tango, mike);
            return entity;
        }
    };
    var _closure1_slot5 = tango;
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
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot4 = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/keyword_filter/KeywordUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['maskStringPreserveSpaces'] = tango;
    mike = function(argFoo, argBar) { // Original name: getKeywordSubstitutedContent
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            mike = argBar;
            var _closure2_slot0 = mike;
            tango = undefined;
            report = undefined;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 3;
            oscar = options[oscar];
            options = golf.bind(tango)(oscar);
            golf = options.isEligibleForKeywordFiltering;
            oscar = {};
            verify = 'keyword_substituted_content';
            oscar['location'] = verify;
            oscar = golf.bind(options)(oscar);
 62: // try_start_0
            options = entity;
            golf = _closure1_slot3;
            oscar = golf.getKeywordTrie;
            offset = oscar.bind(golf)();
            oscar = '';
            if(!(oscar !== options)) { _fun00006_ip = 178; continue _fun00005 }
 89:
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            oscar = 2;
            oscar = verify[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = golf.normalize;
            golf = oscar.bind(golf)(options);
            oscar = golf.toLowerCase;
            verify = oscar.bind(golf)();
            oscar = null;
            golf = oscar == offset;
            options = undefined;
            if(golf) { _fun00006_ip = 152; continue _fun00005 }
 141:
            golf = offset.search;
            options = golf.bind(offset)(verify);
 152:
            if(!(oscar == options)) { _fun00006_ip = 158; continue _fun00005 }
 156:
            options = {};
 158:
            oscar = global;
            golf = oscar.Object;
            oscar = golf.values;
            oscar = oscar.bind(golf)(options);
            _fun00006_ip = 182; continue _fun00005;
 178:
            oscar = new Array(0);
 182:
            report = oscar;
            golf = oscar.length;
            oscar = 0;
            if(!(oscar !== golf)) { _fun00006_ip = 252; continue _fun00005 }
 196:
            golf = report;
            oscar = golf.forEach;
            report = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 4;
                    zulu = zulu[entity];
                    entity = undefined;
                    report = tango.bind(entity)(zulu);
                    tango = report.track;
                    mike = _closure1_slot4;
                    zulu = mike.KEYWORD_FILTER_MATCH;
                    mike = {};
                    oscar = _closure2_slot0;
                    options = null;
                    verify = options == oscar;
                    oscar = undefined;
                    if(verify) { _fun00008_ip = 69; continue _fun00007 }
 60:
                    verify = _closure2_slot0;
                    oscar = verify.messageId;
 69:
                    mike['message_id'] = oscar;
                    oscar = _closure2_slot0;
                    verify = options == oscar;
                    oscar = undefined;
                    if(verify) { _fun00008_ip = 96; continue _fun00007 }
 87:
                    verify = _closure2_slot0;
                    oscar = verify.channelId;
 96:
                    mike['channel_id'] = oscar;
                    oscar = _closure2_slot0;
                    options = options == oscar;
                    oscar = undefined;
                    if(options) { _fun00008_ip = 123; continue _fun00007 }
 113:
                    golf = _closure2_slot0;
                    oscar = golf.authorId;
 123:
                    mike['author_id'] = oscar;
                    oscar = argFoo;
                    oscar = oscar.keyword;
                    mike['keyword'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                }
            };
            report = oscar.bind(golf)(report);
            oscar = golf.sort;
            report = function(argFoo, argBar) {
                entity = argBar;
                mike = entity.start;
                entity = argFoo;
                entity = entity.start;
                entity = mike - entity;
                return entity;
            };
            golf = oscar.bind(golf)(report);
            oscar = golf.reduce;
            report = entity;
            zulu = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argBar;
                    oscar = _closure1_slot5;
                    report = entity.start;
                    tango = entity.end;
                    zulu = _closure2_slot0;
                    mike = null;
                    golf = mike == zulu;
                    mike = undefined;
                    if(golf) { _fun00010_ip = 48; continue _fun00009 }
 38:
                    entity = _closure2_slot0;
                    mike = entity.escapeReplacement;
 48:
                    yankee = argFoo;
                    romeo = undefined;
                    offset = report;
                    verify = tango;
                    options = mike;
                    entity = romeo[oscar](yankee, offset, verify, options, golf);
                    return entity;
                }
            };
            zulu = oscar.bind(golf)(zulu, report);
            _fun00006_ip = 255; continue _fun00005;
 252:
            zulu = entity;
 255: // try_end0
            return zulu;
 257: // catch_target0
            CatchBlockStart(arg_register=4);
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 5;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.captureException;
            mike = {};
            oscar = {};
            golf = 'keyword_filtering';
            oscar['app_context'] = golf;
            mike['tags'] = oscar;
            mike = zulu.bind(tango)(report, mike);
            return entity;
        }
    };
    zulu['getKeywordSubstitutedContent'] = mike;
    return entity;
})();