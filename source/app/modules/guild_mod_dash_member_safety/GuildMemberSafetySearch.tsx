// app/modules/guild_mod_dash_member_safety/GuildMemberSafetySearch.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot8;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot8;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
 343:
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
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    tango = function() { // Original name: getDefaultSearchState
        entity = {'query': '', 'requireUnusualDmActivity': false, 'requireCommunicationDisabled': false, 'requireUnusualAccountActivity': false, 'requireUsernameQuarantined': false};
        mike = global;
        mike = mike.Set;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        tango = zulu;
        mike = new tango[mike](zulu);
        mike = mike instanceof Object ? mike : zulu;
        entity['selectedRoleIds'] = mike;
        mike = {'optionId': 0, 'afterDate': null, 'beforeDate': null};
        entity['selectedJoinDateOption'] = mike;
        mike = {'optionId': 0, 'afterDate': null, 'beforeDate': null};
        entity['selectedAccountAgeOption'] = mike;
        mike = undefined;
        entity['selectedJoinSourceType'] = mike;
        entity['selectedSourceInviteCode'] = mike;
        entity['selectedSort'] = mike;
        return entity;
    };
    var _closure1_slot9 = tango;
    entity = function(argFoo, argBar) { // Original name: hasStringMatch
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            report = argBar;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun00008_ip = 51; continue _fun00007 }
 15:
            mike = zulu.toLowerCase;
            tango = mike.bind(zulu)();
            zulu = tango.includes;
            mike = report.toLowerCase;
            mike = mike.bind(report)();
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            entity = !mike;
 51:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    entity = 0;
    options = golf[entity];
    entity = undefined;
    options = verify.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot5 = options;
    verify = report.Object;
    options = verify.freeze;
    report = tango.bind(entity)();
    report = options.bind(verify)(report);
    var _closure1_slot6 = report;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: GuildMemberSafetySearch
            zulu = this;
            report = _closure1_slot3;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = argFoo;
            zulu['guildId'] = tango;
            mike = _closure1_slot9;
            mike = mike.bind(entity)();
            zulu['_searchState'] = mike;
            mike = true;
            zulu['hasDefaultQuery'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'requiresUsernameMatch';
        entity['key'] = mike;
        mike = function() { // Original name: get
            entity = this;
            entity = entity._searchState;
            mike = entity.query;
            entity = mike.trim;
            entity = entity.bind(mike)();
            mike = entity.length;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        entity['get'] = mike;
        mike = new Array(6);
        mike[0] = entity;
        entity = {};
        oscar = 'reset';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            mike = _closure1_slot9;
            entity = undefined;
            mike = mike.bind(entity)();
            zulu['_searchState'] = mike;
            mike = true;
            zulu['hasDefaultQuery'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'updateSearchState';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            entity = {};
            oscar = mike._searchState;
            golf = entity;
            zulu = copyDataProperties(golf, oscar);
            oscar = argFoo;
            golf = entity;
            zulu = copyDataProperties(golf, oscar);
            mike['_searchState'] = entity;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 4;
            zulu = report[zulu];
            report = undefined;
            tango = tango.bind(report)(zulu);
            zulu = mike._searchState;
            entity = _closure1_slot6;
            entity = tango.bind(report)(zulu, entity);
            mike['hasDefaultQuery'] = entity;
            entity = true;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'resetSearchState';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = this;
                entity = zulu.hasDefaultQuery;
                entity = !entity;
                if(!entity) { _fun00010_ip = 44; continue _fun00009 }
 15:
                tango = _closure1_slot9;
                mike = undefined;
                mike = tango.bind(mike)();
                zulu['_searchState'] = mike;
                mike = true;
                zulu['hasDefaultQuery'] = mike;
                entity = true;
 44:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'getSearchState';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity._searchState;
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'isMemberIncludedInSearchResults';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                sizing = argFoo;
                entity = this;
                entity = entity._searchState;
                verify = entity.query;
                offset = entity.requireUnusualDmActivity;
                yankee = entity.requireCommunicationDisabled;
                romeo = entity.requireUnusualAccountActivity;
                foxtrot = entity.requireUsernameQuarantined;
                golf = entity.selectedRoleIds;
                tango = entity.selectedJoinDateOption;
                oscar = entity.selectedAccountAgeOption;
                kilo = entity.selectedSourceInviteCode;
                backup = entity.selectedJoinSourceType;
                entity = verify.length;
                zulu = 0;
                mike = entity > zulu;
                if(!mike) { _fun00012_ip = 445; continue _fun00011 }
 88:
                entity = verify.trim;
                options = entity.bind(verify)();
                report = '';
                entity = false;
                if(!(report !== options)) { _fun00012_ip = 442; continue _fun00011 }
 111:
                options = _closure1_slot0;
                output = _closure1_slot2;
                report = 3;
                report = output[report];
                echo = undefined;
                options = options.bind(echo)(report);
                report = options.splitQuery;
                verify = report.bind(options)(verify);
                options = _closure1_slot5;
                report = 2;
                output = options.bind(echo)(verify, report);
                options = output[zulu];
                verify = _closure1_slot7;
                report = 1;
                report = output[report];
                output = verify.bind(echo)(report);
                verify = output.bind(echo)();
                report = verify.done;
                if(report) { _fun00012_ip = 226; continue _fun00011 }
 192:
                control = verify.value;
                report = sizing.userId;
                entity = true;
                if(!(report !== control)) { _fun00012_ip = 442; continue _fun00011 }
 211:
                control = output.bind(echo)();
                report = control.done;
                verify = control;
                if(!report) { _fun00012_ip = 192; continue _fun00011 }
 226:
                report = _closure1_slot7;
                output = report.bind(echo)(options);
                verify = output.bind(echo)();
                report = verify.done;
                if(report) { _fun00012_ip = 291; continue _fun00011 }
 247:
                vacuum = verify.value;
                control = _closure1_slot10;
                report = sizing.nick;
                report = control.bind(echo)(report, vacuum);
                entity = true;
                if(report) { _fun00012_ip = 442; continue _fun00011 }
 276:
                control = output.bind(echo)();
                report = control.done;
                verify = control;
                if(!report) { _fun00012_ip = 247; continue _fun00011 }
 291:
                verify = sizing.user;
                report = null;
                report = report == verify;
                entity = false;
                if(report) { _fun00012_ip = 442; continue _fun00011 }
 310:
                report = sizing.user;
                output = report.globalName;
                vacuum = report.username;
                report = _closure1_slot7;
                control = report.bind(echo)(options);
                verify = control.bind(echo)();
                report = verify.done;
                if(report) { _fun00012_ip = 382; continue _fun00011 }
 347:
                sequence = _closure1_slot10;
                report = verify.value;
                report = sequence.bind(echo)(vacuum, report);
                entity = true;
                if(report) { _fun00012_ip = 442; continue _fun00011 }
 367:
                sequence = control.bind(echo)();
                report = sequence.done;
                verify = sequence;
                if(!report) { _fun00012_ip = 347; continue _fun00011 }
 382:
                report = _closure1_slot7;
                verify = report.bind(echo)(options);
                options = verify.bind(echo)();
                report = options.done;
                entity = false;
                if(report) { _fun00012_ip = 442; continue _fun00011 }
 405:
                control = _closure1_slot10;
                report = options.value;
                report = control.bind(echo)(output, report);
                entity = true;
                if(report) { _fun00012_ip = 442; continue _fun00011 }
 425:
                control = verify.bind(echo)();
                report = control.done;
                options = control;
                entity = false;
                if(!report) { _fun00012_ip = 405; continue _fun00011 }
 442:
                mike = !entity;
 445:
                entity = !mike;
                if(mike) { _fun00012_ip = 970; continue _fun00011 }
 454:
                mike = golf.size;
                zulu = mike > zulu;
                if(!zulu) { _fun00012_ip = 484; continue _fun00011 }
 466:
                report = function(argFoo, argBar) { // Original name: hasSelectedRole
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        report = argBar;
                        entity = argFoo;
                        var _closure4_slot0 = entity;
                        zulu = report.size;
                        entity = 0;
                        entity = entity !== zulu;
                        if(!entity) { _fun00014_ip = 60; continue _fun00013 }
 26:
                        zulu = global;
                        tango = zulu.Array;
                        zulu = tango.from;
                        tango = zulu.bind(tango)(report);
                        zulu = tango.every;
                        mike = function(argFoo) {
                            entity = _closure4_slot0;
                            zulu = entity.roles;
                            mike = zulu.includes;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        entity = zulu.bind(tango)(mike);
 60:
                        return entity;
                    }
                };
                mike = undefined;
                mike = report.bind(mike)(sizing, golf);
                zulu = !mike;
 484:
                mike = !zulu;
                if(zulu) { _fun00012_ip = 967; continue _fun00011 }
 493:
                zulu = tango.afterDate;
                options = null;
                report = options != zulu;
                if(!report) { _fun00012_ip = 524; continue _fun00011 }
 508:
                golf = sizing.joinedAtTimestamp;
                zulu = tango.afterDate;
                report = golf < zulu;
 524:
                zulu = !report;
                if(report) { _fun00012_ip = 964; continue _fun00011 }
 533:
                report = tango.beforeDate;
                report = options != report;
                if(!report) { _fun00012_ip = 562; continue _fun00011 }
 546:
                golf = sizing.joinedAtTimestamp;
                tango = tango.beforeDate;
                report = golf > tango;
 562:
                tango = !report;
                if(report) { _fun00012_ip = 961; continue _fun00011 }
 571:
                report = oscar.afterDate;
                golf = options != report;
                if(!golf) { _fun00012_ip = 635; continue _fun00011 }
 584:
                output = _closure1_slot1;
                verify = _closure1_slot2;
                report = 5;
                verify = verify[report];
                report = undefined;
                output = output.bind(report)(verify);
                verify = output.extractTimestamp;
                report = sizing.userId;
                verify = verify.bind(output)(report);
                report = oscar.afterDate;
                golf = verify < report;
 635:
                report = !golf;
                if(golf) { _fun00012_ip = 958; continue _fun00011 }
 644:
                golf = oscar.beforeDate;
                golf = options != golf;
                if(!golf) { _fun00012_ip = 708; continue _fun00011 }
 657:
                result = _closure1_slot1;
                output = _closure1_slot2;
                verify = 5;
                output = output[verify];
                verify = undefined;
                result = result.bind(verify)(output);
                output = result.extractTimestamp;
                verify = sizing.userId;
                verify = output.bind(result)(verify);
                oscar = oscar.beforeDate;
                golf = verify > oscar;
 708:
                oscar = !golf;
                if(golf) { _fun00012_ip = 955; continue _fun00011 }
 717:
                golf = options == kilo;
                if(golf) { _fun00012_ip = 734; continue _fun00011 }
 724:
                verify = sizing.sourceInviteCode;
                golf = verify === kilo;
 734:
                if(!golf) { _fun00012_ip = 952; continue _fun00011 }
 740:
                options = options == backup;
                if(options) { _fun00012_ip = 757; continue _fun00011 }
 747:
                verify = sizing.joinSourceType;
                options = verify === backup;
 757:
                if(!options) { _fun00012_ip = 949; continue _fun00011 }
 763:
                verify = offset;
                if(verify) { _fun00012_ip = 772; continue _fun00011 }
 769:
                verify = yankee;
 772:
                if(verify) { _fun00012_ip = 778; continue _fun00011 }
 775:
                verify = romeo;
 778:
                if(verify) { _fun00012_ip = 784; continue _fun00011 }
 781:
                verify = foxtrot;
 784:
                verify = !verify;
                if(verify) { _fun00012_ip = 946; continue _fun00011 }
 793:
                backup = !offset;
                if(backup) { _fun00012_ip = 808; continue _fun00011 }
 799:
                offset = sizing.hasUnusualDmActivity;
                backup = !offset;
 808:
                offset = !backup;
                if(!backup) { _fun00012_ip = 943; continue _fun00011 }
 817:
                backup = !yankee;
                if(backup) { _fun00012_ip = 862; continue _fun00011 }
 823:
                output = _closure1_slot0;
                kilo = _closure1_slot2;
                yankee = 6;
                kilo = kilo[yankee];
                yankee = undefined;
                kilo = output.bind(yankee)(kilo);
                yankee = kilo.isMemberCommunicationDisabled;
                yankee = yankee.bind(kilo)(sizing);
                backup = !yankee;
 862:
                yankee = !backup;
                if(!backup) { _fun00012_ip = 940; continue _fun00011 }
 868:
                backup = !romeo;
                if(backup) { _fun00012_ip = 883; continue _fun00011 }
 874:
                romeo = sizing.hasUnusualAccountActivity;
                backup = !romeo;
 883:
                romeo = !backup;
                if(!backup) { _fun00012_ip = 937; continue _fun00011 }
 889:
                foxtrot = !foxtrot;
                if(foxtrot) { _fun00012_ip = 934; continue _fun00011 }
 895:
                output = _closure1_slot0;
                kilo = _closure1_slot2;
                backup = 7;
                kilo = kilo[backup];
                backup = undefined;
                kilo = output.bind(backup)(kilo);
                backup = kilo.hasAutomodQuarantinedProfile;
                backup = backup.bind(kilo)(sizing);
                foxtrot = !backup;
 934:
                romeo = !foxtrot;
 937:
                yankee = romeo;
 940:
                offset = yankee;
 943:
                verify = offset;
 946:
                options = verify;
 949:
                golf = options;
 952:
                oscar = golf;
 955:
                report = oscar;
 958:
                tango = report;
 961:
                zulu = tango;
 964:
                mike = zulu;
 967:
                entity = mike;
 970:
                return entity;
            }
        };
        entity['value'] = report;
        mike[5] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_mod_dash_member_safety/GuildMemberSafetySearch.tsx';
    report = oscar.bind(golf)(report);
    zulu['getDefaultSearchState'] = tango;
    zulu['GuildMemberSafetySearch'] = mike;
    return entity;
})();