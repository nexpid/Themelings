// app/modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun101174: for(var _fun101174_ip = 0; ; ) switch(_fun101174_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun101174_ip = 46; continue _fun101174 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun101174_ip = 55; continue _fun101174 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun101174_ip = 345; continue _fun101174 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun101174_ip = 323; continue _fun101174 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun101174_ip = 283; continue _fun101174 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun101174_ip = 270; continue _fun101174 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun101174_ip = 163; continue _fun101174 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun101174_ip = 179; continue _fun101174 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun101174_ip = 249; continue _fun101174 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun101174_ip = 249; continue _fun101174 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun101174_ip = 234; continue _fun101174 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun101174_ip = 247; continue _fun101174 }
 234:
            verify = _closure1_slot8;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun101174_ip = 265; continue _fun101174;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun101174_ip = 283; continue _fun101174;
 270:
            golf = _closure1_slot8;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun101174_ip = 323; continue _fun101174 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun101174_ip = 330; continue _fun101174 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun101175: for(var _fun101175_ip = 0; ; ) switch(_fun101175_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun101175_ip = 56; continue _fun101175 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun101175_ip = 67; continue _fun101175;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun101176: for(var _fun101176_ip = 0; ; ) switch(_fun101176_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun101176_ip = 23; continue _fun101176 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun101176_ip = 33; continue _fun101176 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun101176_ip = 70; continue _fun101176 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun101176_ip = 55; continue _fun101176 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    tango = tango.DismissibleContentGroupName;
    var _closure1_slot6 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useAppLauncherOnboardingContent
        _fun101177: for(var _fun101177_ip = 0; ; ) switch(_fun101177_ip) {
 0:
            entity = argFoo;
            golf = entity.channelId;
            var _closure2_slot0 = golf;
            oscar = new Array(0);
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 6;
            zulu = tango[zulu];
            tango = undefined;
            verify = report.bind(tango)(zulu);
            options = verify.useStateFromStores;
            zulu = _closure1_slot5;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot5;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = options.bind(verify)(report, zulu);
            zulu = {};
            report = null;
            verify = report == options;
            report = undefined;
            if(verify) { _fun101177_ip = 91; continue _fun101177 }
 86:
            report = options.guild_id;
 91:
            zulu['guildId'] = report;
            mike = function(argFoo) { // Original name: useHasUsedActivities
                _fun101179: for(var _fun101179_ip = 0; ; ) switch(_fun101179_ip) {
 0:
                    entity = argFoo;
                    golf = entity.guildId;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    oscar = 4;
                    mike = tango[oscar];
                    verify = undefined;
                    offset = zulu.bind(verify)(mike);
                    options = offset.useIsDismissibleContentDismissed;
                    mike = 5;
                    report = tango[mike];
                    report = zulu.bind(verify)(report);
                    report = report.DismissibleContent;
                    report = report.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
                    report = options.bind(offset)(report);
                    oscar = tango[oscar];
                    options = zulu.bind(verify)(oscar);
                    oscar = options.useIsDismissibleContentDismissed;
                    mike = tango[mike];
                    mike = zulu.bind(verify)(mike);
                    mike = mike.DismissibleContent;
                    mike = mike.APP_LAUNCHER_ONBOARDING_APPS_BANNER;
                    oscar = oscar.bind(options)(mike);
                    mike = 6;
                    mike = tango[mike];
                    yankee = zulu.bind(verify)(mike);
                    offset = yankee.useStateFromStores;
                    mike = _closure1_slot4;
                    options = new Array(1);
                    options[0] = mike;
                    mike = function() {
                        mike = _closure1_slot4;
                        entity = mike.getApplicationFrecencyWithoutLoadingLatest;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    options = offset.bind(yankee)(options, mike);
                    mike = _closure1_slot7;
                    entity = 7;
                    entity = tango[entity];
                    tango = zulu.bind(verify)(entity);
                    zulu = tango.useActivityApplications;
                    entity = {};
                    entity['guildId'] = golf;
                    if(!report) { _fun101179_ip = 187; continue _fun101179 }
 184:
                    report = oscar;
 187:
                    report = !report;
                    entity['fetchesShelf'] = report;
                    entity = zulu.bind(tango)(entity);
                    golf = mike.bind(verify)(entity);
                    mike = golf.bind(verify)();
                    entity = mike.done;
                    report = null;
                    zulu = mike;
                    mike = false;
                    if(entity) { _fun101179_ip = 271; continue _fun101179 }
 224:
                    entity = zulu.value;
                    offset = options.getEntry;
                    entity = entity.id;
                    entity = offset.bind(options)(entity);
                    entity = report != entity;
                    mike = true;
                    if(entity) { _fun101179_ip = 271; continue _fun101179 }
 254:
                    offset = golf.bind(verify)();
                    entity = offset.done;
                    zulu = offset;
                    mike = false;
                    if(!entity) { _fun101179_ip = 224; continue _fun101179 }
 271:
                    entity = {};
                    entity['hasUsedActivities'] = mike;
                    return entity;
                }
            };
            mike = mike.bind(tango)(zulu);
            report = mike.hasUsedActivities;
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            mike = 8;
            mike = options[mike];
            zulu = zulu.bind(tango)(mike);
            mike = {};
            mike['channelId'] = golf;
            mike = zulu.bind(tango)(mike);
            zulu = mike.canShowBotsBanner;
            mike = mike.canShowAppsOrActivitiesBanner;
            if(!zulu) { _fun101177_ip = 201; continue _fun101177 }
 159:
            golf = oscar.push;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 5;
            zulu = verify[zulu];
            zulu = options.bind(tango)(zulu);
            zulu = zulu.DismissibleContent;
            zulu = zulu.APP_LAUNCHER_ONBOARDING_BOTS_BANNER;
            zulu = golf.bind(oscar)(zulu);
 201:
            if(!mike) { _fun101177_ip = 262; continue _fun101177 }
 204:
            zulu = oscar.push;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 5;
            mike = options[mike];
            mike = golf.bind(tango)(mike);
            mike = mike.DismissibleContent;
            if(report) { _fun101177_ip = 251; continue _fun101177 }
 238:
            report = mike.APP_LAUNCHER_ONBOARDING_APPS_BANNER;
            report = zulu.bind(oscar)(report);
            _fun101177_ip = 262; continue _fun101177;
 251:
            mike = mike.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
            mike = zulu.bind(oscar)(mike);
 262:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 9;
            mike = report[mike];
            report = zulu.bind(tango)(mike);
            zulu = report.useSelectedDismissibleContent;
            mike = _closure1_slot6;
            mike = mike.APP_LAUNCHER_ONBOARDING;
            zulu = zulu.bind(report)(oscar, mike);
            mike = _closure1_slot3;
            entity = 2;
            zulu = mike.bind(tango)(zulu, entity);
            entity = {};
            mike = 0;
            mike = zulu[mike];
            entity['visibleContent'] = mike;
            mike = 1;
            mike = zulu[mike];
            entity['markAsDismissed'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();