// app/modules/user_settings/native/profiles/useGuildProfileEditForm.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FormStates;
    var _closure1_slot9 = tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/native/profiles/useGuildProfileEditForm.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useGuildProfileEditForm
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            offset = 7;
            entity = tango[offset];
            verify = undefined;
            oscar = zulu.bind(verify)(entity);
            report = oscar.useStateFromStores;
            entity = _closure1_slot8;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                mike = _closure1_slot8;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            sequence = report.bind(oscar)(mike, entity);
            var _closure2_slot0 = sequence;
            entity = tango[offset];
            oscar = zulu.bind(verify)(entity);
            report = oscar.useStateFromStoresObject;
            entity = _closure1_slot5;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                zulu = _closure1_slot5;
                entity = zulu.getAllPending;
                mike = entity.bind(zulu)();
                golf = mike.pendingAvatar;
                oscar = mike.pendingNickname;
                report = mike.pendingBio;
                tango = mike.pendingPronouns;
                entity = {};
                entity['pendingAvatar'] = golf;
                entity['pendingNickname'] = oscar;
                oscar = mike.pendingBanner;
                entity['pendingBanner'] = oscar;
                entity['pendingBio'] = report;
                entity['pendingPronouns'] = tango;
                tango = mike.pendingThemeColors;
                entity['pendingThemeColors'] = tango;
                tango = mike.pendingAvatarDecoration;
                entity['pendingAvatarDecoration'] = tango;
                mike = mike.pendingProfileEffectId;
                entity['pendingProfileEffectId'] = mike;
                mike = zulu.showNotice;
                mike = mike.bind(zulu)();
                entity['hasEdits'] = mike;
                mike = zulu.getErrors;
                mike = mike.bind(zulu)();
                entity['errors'] = mike;
                mike = zulu.getGuild;
                mike = mike.bind(zulu)();
                entity['guild'] = mike;
                mike = zulu.getSource;
                mike = mike.bind(zulu)();
                entity['source'] = mike;
                mike = zulu.getFormState;
                mike = mike.bind(zulu)();
                entity['formState'] = mike;
                return entity;
            };
            oscar = report.bind(oscar)(mike, entity);
            vacuum = oscar.pendingAvatar;
            var _closure2_slot1 = vacuum;
            control = oscar.pendingNickname;
            var _closure2_slot2 = control;
            update = oscar.pendingBanner;
            var _closure2_slot3 = update;
            echo = oscar.pendingBio;
            var _closure2_slot4 = echo;
            result = oscar.pendingPronouns;
            var _closure2_slot5 = result;
            output = oscar.pendingThemeColors;
            var _closure2_slot6 = output;
            mike = oscar.guild;
            var _closure2_slot7 = mike;
            romeo = oscar.formState;
            source = oscar.pendingAvatarDecoration;
            var _closure2_slot8 = source;
            sizing = oscar.pendingProfileEffectId;
            var _closure2_slot9 = sizing;
            entity = 8;
            entity = tango[entity];
            tango = zulu.bind(verify)(entity);
            zulu = tango.useGuildAutomodProfileQuarantineErrors;
            report = null;
            options = report == mike;
            entity = undefined;
            if(options) { _fun00002_ip = 230; continue _fun00001 }
 225:
            entity = mike.id;
 230:
            foxtrot = zulu.bind(tango)(entity);
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            zulu = entity[offset];
            kilo = tango.bind(verify)(zulu);
            backup = kilo.useStateFromStores;
            zulu = _closure1_slot5;
            options = new Array(2);
            options[0] = zulu;
            zulu = _closure1_slot6;
            options[1] = zulu;
            zulu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure1_slot5;
                    entity = zulu.getFormState;
                    zulu = entity.bind(zulu)();
                    entity = _closure1_slot9;
                    entity = entity.SUBMITTING;
                    entity = zulu === entity;
                    if(entity) { _fun00004_ip = 44; continue _fun00003 }
 34:
                    mike = _closure1_slot6;
                    entity = mike.isSubmitting;
 44:
                    return entity;
                }
            };
            options = backup.bind(kilo)(options, zulu);
            zulu = {};
            context = oscar.errors;
            papa = zulu;
            backup = copyDataProperties(papa, context);
            papa = zulu;
            context = foxtrot;
            foxtrot = copyDataProperties(papa, context);
            record = _closure1_slot4;
            kilo = record.useMemo;
            backup = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                tango = entity.DelayedCall;
                entity = tango.prototype;
                mike = Object.create(entity, {constructor: {value: tango}});
                oscar = 200;
                report = function() {
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 10;
                    zulu = oscar[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.wait;
                    report = _closure1_slot0;
                    mike = 11;
                    mike = oscar[mike];
                    mike = report.bind(entity)(mike);
                    mike = mike.resetAllPending;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                golf = mike;
                entity = new golf[tango](oscar, report, tango);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            };
            foxtrot = new Array(0);
            kilo = kilo.bind(record)(backup, foxtrot);
            var _closure2_slot10 = kilo;
            config = record.useEffect;
            backup = new Array(1);
            backup[0] = kilo;
            foxtrot = function() {
                entity = function() {
                    mike = _closure2_slot10;
                    entity = mike.cancel;
                    entity = entity.bind(mike)();
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 10;
                    zulu = oscar[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.wait;
                    report = _closure1_slot0;
                    mike = 11;
                    mike = oscar[mike];
                    mike = report.bind(entity)(mike);
                    mike = mike.resetAllPending;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                return entity;
            };
            foxtrot = config.bind(record)(foxtrot, backup);
            backup = _closure1_slot1;
            foxtrot = 12;
            foxtrot = entity[foxtrot];
            foxtrot = backup.bind(verify)(foxtrot);
            foxtrot = foxtrot.bind(verify)();
            var _closure2_slot11 = foxtrot;
            entity = entity[offset];
            foxtrot = tango.bind(verify)(entity);
            offset = foxtrot.useStateFromStores;
            entity = _closure1_slot7;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                zulu = _closure1_slot7;
                mike = zulu.getGuild;
                entity = _closure2_slot11;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = offset.bind(foxtrot)(tango, entity);
            offset = options;
            if(offset) { _fun00002_ip = 454; continue _fun00001 }
 440:
            entity = _closure1_slot9;
            entity = entity.CLOSED;
            offset = romeo === entity;
 454:
            var _closure2_slot12 = offset;
            entity = {};
            backup = _closure1_slot4;
            foxtrot = backup.useCallback;
            romeo = _closure1_slot3;
            yankee = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00006_ip = 674; continue _fun00005 }
 10:
                        mike = _closure2_slot12;
                        if(mike) { _fun00006_ip = 669; continue _fun00005 }
 23:
                        mike = _closure2_slot0;
                        verify = null;
                        if(!(verify != mike)) { _fun00006_ip = 669; continue _fun00005 }
 36:
                        zulu = _closure1_slot0;
                        tango = _closure1_slot2;
                        mike = 13;
                        golf = tango[mike];
                        options = undefined;
                        yankee = zulu.bind(options)(golf);
                        offset = yankee.getGuildMemberChangesForUpdateRequest;
                        golf = {};
                        romeo = _closure2_slot1;
                        golf['pendingAvatar'] = romeo;
                        romeo = _closure2_slot2;
                        golf['pendingNickname'] = romeo;
                        romeo = _closure2_slot8;
                        golf['pendingAvatarDecoration'] = romeo;
                        foxtrot = offset.bind(yankee)(golf);
                        mike = tango[mike];
                        tango = zulu.bind(options)(mike);
                        zulu = tango.getProfileChangesForUpdateRequest;
                        mike = {};
                        golf = _closure2_slot3;
                        mike['pendingBanner'] = golf;
                        golf = _closure2_slot4;
                        mike['pendingBio'] = golf;
                        golf = _closure2_slot5;
                        mike['pendingPronouns'] = golf;
                        golf = _closure2_slot6;
                        mike['pendingThemeColors'] = golf;
                        golf = _closure2_slot9;
                        mike['pendingProfileEffectId'] = golf;
                        romeo = zulu.bind(tango)(mike);
                        zulu = global;
                        tango = zulu.Object;
                        mike = tango.keys;
                        mike = mike.bind(tango)(foxtrot);
                        mike = mike.length;
                        golf = 0;
                        mike = mike > golf;
                        offset = true;
                        if(!mike) { _fun00006_ip = 394; continue _fun00005 }
 205:
                        tango = _closure1_slot0;
                        yankee = _closure1_slot2;
                        mike = 11;
                        mike = yankee[mike];
                        yankee = tango.bind(options)(mike);
                        tango = yankee.saveGuildIdentityChanges;
                        mike = _closure2_slot7;
                        backup = verify == mike;
                        mike = undefined;
                        if(backup) { _fun00006_ip = 253; continue _fun00005 }
 244:
                        backup = _closure2_slot7;
                        mike = backup.id;
 253:
                        mike = tango.bind(yankee)(mike, foxtrot);
                        SaveGenerator(address=263);
 261:
                        return mike;
 263:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun00006_ip = 666; continue _fun00005 }
 272:
                        tango = verify != mike;
                        if(!tango) { _fun00006_ip = 285; continue _fun00005 }
 279:
                        tango = mike.ok;
 285:
                        if(tango) { _fun00006_ip = 321; continue _fun00005 }
 288:
                        foxtrot = verify == mike;
                        yankee = undefined;
                        if(foxtrot) { _fun00006_ip = 317; continue _fun00005 }
 297:
                        foxtrot = mike.body;
                        backup = verify == foxtrot;
                        yankee = undefined;
                        if(backup) { _fun00006_ip = 317; continue _fun00005 }
 311:
                        yankee = foxtrot.avatar;
 317:
                        tango = verify == yankee;
 321:
                        if(tango) { _fun00006_ip = 366; continue _fun00005 }
 324:
                        yankee = _closure1_slot0;
                        foxtrot = _closure1_slot2;
                        tango = 14;
                        tango = foxtrot[tango];
                        foxtrot = yankee.bind(options)(tango);
                        yankee = foxtrot.showGenericGuildProfileUpdateFailureToast;
                        tango = mike.body;
                        tango = tango.avatar;
                        tango = yankee.bind(foxtrot)(tango);
 366:
                        tango = verify == mike;
                        yankee = undefined;
                        if(tango) { _fun00006_ip = 381; continue _fun00005 }
 375:
                        yankee = mike.ok;
 381:
                        tango = verify != yankee;
                        if(!tango) { _fun00006_ip = 391; continue _fun00005 }
 388:
                        tango = yankee;
 391:
                        offset = tango;
 394:
                        tango = zulu.Object;
                        zulu = tango.keys;
                        zulu = zulu.bind(tango)(romeo);
                        zulu = zulu.length;
                        tango = offset;
                        if(!(zulu > golf)) { _fun00006_ip = 643; continue _fun00005 }
 425:
                        golf = _closure1_slot0;
                        yankee = _closure1_slot2;
                        zulu = 15;
                        zulu = yankee[zulu];
                        yankee = golf.bind(options)(zulu);
                        golf = yankee.saveProfileChanges;
                        zulu = _closure2_slot7;
                        foxtrot = verify == zulu;
                        zulu = undefined;
                        if(foxtrot) { _fun00006_ip = 473; continue _fun00005 }
 464:
                        foxtrot = _closure2_slot7;
                        zulu = foxtrot.id;
 473:
                        zulu = golf.bind(yankee)(romeo, zulu);
                        SaveGenerator(address=483);
 481:
                        return zulu;
 483:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(golf) { _fun00006_ip = 663; continue _fun00005 }
 492:
                        if(!(verify != zulu)) { _fun00006_ip = 505; continue _fun00005 }
 496:
                        golf = zulu.ok;
                        if(golf) { _fun00006_ip = 604; continue _fun00005 }
 505:
                        yankee = _closure1_slot0;
                        romeo = _closure1_slot2;
                        golf = 16;
                        golf = romeo[golf];
                        golf = yankee.bind(options)(golf);
                        golf = golf.APIError;
                        yankee = golf.prototype;
                        yankee = Object.create(yankee, {constructor: {value: golf}});
                        output = yankee;
                        sizing = zulu;
                        golf = new output[golf](sizing, kilo);
                        romeo = golf instanceof Object ? golf : yankee;
                        yankee = romeo.getFirstFieldErrorMessage;
                        golf = 'banner';
                        yankee = yankee.bind(romeo)(golf);
                        if(!(verify != yankee)) { _fun00006_ip = 604; continue _fun00005 }
 573:
                        golf = _closure1_slot0;
                        romeo = _closure1_slot2;
                        oscar = 14;
                        oscar = romeo[oscar];
                        golf = golf.bind(options)(oscar);
                        oscar = golf.showGenericGuildProfileUpdateFailureToast;
                        oscar = oscar.bind(golf)(yankee);
 604:
                        oscar = offset;
                        golf = undefined;
                        if(!offset) { _fun00006_ip = 634; continue _fun00005 }
 612:
                        offset = verify == zulu;
                        options = undefined;
                        if(offset) { _fun00006_ip = 627; continue _fun00005 }
 621:
                        options = zulu.ok;
 627:
                        oscar = verify != options;
                        golf = options;
 634:
                        if(!oscar) { _fun00006_ip = 640; continue _fun00005 }
 637:
                        oscar = golf;
 640:
                        tango = oscar;
 643:
                        if(!tango) { _fun00006_ip = 660; continue _fun00005 }
 646:
                        oscar = _closure2_slot10;
                        report = oscar.delay;
                        report = report.bind(oscar)();
 660:
                        return tango;
 663:
                        return zulu;
 666:
                        return mike;
 669:
                        mike = undefined;
                        return mike;
 674:
                        return entity;
                    }
                };
                return entity;
            };
            romeo = romeo.bind(verify)(yankee);
            yankee = new Array(12);
            yankee[0] = offset;
            yankee[1] = sequence;
            yankee[2] = vacuum;
            yankee[3] = control;
            yankee[4] = source;
            yankee[5] = update;
            yankee[6] = echo;
            yankee[7] = result;
            yankee[8] = output;
            yankee[9] = sizing;
            output = report == mike;
            sizing = undefined;
            if(output) { _fun00002_ip = 543; continue _fun00001 }
 538:
            sizing = mike.id;
 543:
            yankee[10] = sizing;
            yankee[11] = kilo;
            yankee = foxtrot.bind(backup)(romeo, yankee);
            entity['handleSubmit'] = yankee;
            entity['isDisabled'] = offset;
            entity['isSubmitting'] = options;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 11;
            golf = offset[golf];
            golf = options.bind(verify)(golf);
            golf = golf.resetAllPending;
            entity['resetPending'] = golf;
            papa = entity;
            context = oscar;
            oscar = copyDataProperties(papa, context);
            if(!(report != mike)) { _fun00002_ip = 620; continue _fun00001 }
 617:
            tango = mike;
 620:
            mike = 'guild';
            entity[mike] = tango;
            mike = 'errors';
            entity[mike] = zulu;
            return entity;
        }
    };
    zulu['default'] = mike;
    mike = 200;
    zulu['RESET_DELAY_MS'] = mike;
    return entity;
})();