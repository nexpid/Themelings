// app/modules/polls/native/ImageInputActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY;
    var _closure1_slot5 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'marginHorizontal': 24};
    tango['emojiContainer'] = verify;
    verify = {};
    offset = 12;
    verify['marginRight'] = offset;
    offset = 5;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.sm;
    verify['borderRadius'] = offset;
    tango['emojiIcon'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/polls/native/ImageInputActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ImageInputAnswerActionSheet
        _fun119447: for(var _fun119447_ip = 0; ; ) switch(_fun119447_ip) {
 0:
            entity = argFoo;
            oscar = entity.channelId;
            var _closure2_slot0 = oscar;
            mike = entity.index;
            var _closure2_slot1 = mike;
            result = entity.answer;
            var _closure2_slot2 = result;
            mike = entity.onSaveAltText;
            var _closure2_slot3 = mike;
            mike = entity.onRemoveAnswerImage;
            var _closure2_slot4 = mike;
            entity = entity.openExpressionPicker;
            var _closure2_slot5 = entity;
            tango = undefined;
            var _closure2_slot6 = tango;
            entity = _closure1_slot8;
            sizing = entity.bind(tango)();
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 6;
            entity = zulu[entity];
            report = mike.bind(tango)(entity);
            context = result.localCreationAnswerId;
            record = result.image;
            entity = 40;
            target = undefined;
            papa = oscar;
            config = entity;
            sequence = entity;
            entity = target[report](papa, context, record, config, sequence, vacuum);
            yankee = entity.renderImage;
            kilo = entity.upload;
            offset = null;
            foxtrot = offset != kilo;
            if(foxtrot) { _fun119447_ip = 176; continue _fun119447 }
 151:
            mike = result.image;
            zulu = offset == mike;
            entity = undefined;
            if(zulu) { _fun119447_ip = 172; continue _fun119447 }
 166:
            entity = mike.emoji;
 172:
            foxtrot = offset != entity;
 176:
            report = _closure1_slot3;
            zulu = report.useCallback;
            mike = function() {
                tango = _closure1_slot0;
                report = _closure1_slot2;
                entity = 7;
                zulu = report[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.dismissKeyboard;
                zulu = zulu.bind(tango)();
                tango = _closure1_slot1;
                zulu = 8;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.hideActionSheet;
                mike = _closure1_slot5;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = new Array(0);
            entity = zulu.bind(report)(mike, entity);
            _closure2_slot6 = entity;
            zulu = _closure1_slot7;
            mike = _closure1_slot0;
            report = _closure1_slot2;
            entity = 9;
            entity = report[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.ActionSheet;
            entity = {};
            report = true;
            entity['startExpanded'] = report;
            oscar = foxtrot;
            if(!oscar) { _fun119447_ip = 429; continue _fun119447 }
 254:
            options = _closure1_slot7;
            golf = _closure1_slot4;
            report = {};
            verify = sizing.emojiContainer;
            report['style'] = verify;
            output = _closure1_slot6;
            verify = {};
            sizing = sizing.emojiIcon;
            verify['style'] = sizing;
            verify['children'] = yankee;
            yankee = output.bind(tango)(golf, verify);
            verify = new Array(2);
            verify[0] = yankee;
            sizing = _closure1_slot0;
            echo = _closure1_slot2;
            yankee = 10;
            yankee = echo[yankee];
            yankee = sizing.bind(tango)(yankee);
            sizing = yankee.Text;
            yankee = {'variant': 'text-md/bold', 'color': 'header-primary'};
            result = result.image;
            echo = offset == result;
            update = undefined;
            if(echo) { _fun119447_ip = 382; continue _fun119447 }
 362:
            result = result.emoji;
            echo = offset == result;
            update = undefined;
            if(echo) { _fun119447_ip = 382; continue _fun119447 }
 377:
            update = result.name;
 382:
            result = global;
            result = result.HermesInternal;
            echo = result.concat;
            result = ':';
            result = echo.bind(result)(update, result);
            yankee['children'] = result;
            yankee = output.bind(tango)(sizing, yankee);
            verify[1] = yankee;
            report['children'] = verify;
            oscar = options.bind(tango)(golf, report);
 429:
            report = new Array(3);
            report[0] = oscar;
            output = _closure1_slot6;
            golf = _closure1_slot1;
            verify = _closure1_slot2;
            oscar = 11;
            oscar = verify[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            options = 21;
            oscar['size'] = options;
            oscar = output.bind(tango)(golf, oscar);
            report[1] = oscar;
            options = _closure1_slot7;
            sizing = _closure1_slot0;
            yankee = 12;
            oscar = verify[yankee];
            oscar = sizing.bind(tango)(oscar);
            oscar = oscar.ActionSheetRow;
            golf = oscar.Group;
            oscar = {};
            result = false;
            oscar['hasIcons'] = result;
            verify = verify[yankee];
            verify = sizing.bind(tango)(verify);
            sizing = verify.ActionSheetRow;
            verify = {};
            update = _closure1_slot0;
            result = _closure1_slot2;
            echo = 13;
            source = result[echo];
            source = update.bind(tango)(source);
            control = source.intl;
            source = control.string;
            result = result[echo];
            result = update.bind(tango)(result);
            update = result.t;
            if(foxtrot) { _fun119447_ip = 598; continue _fun119447 }
 585:
            result = update.dzcU1d;
            result = source.bind(control)(result);
            _fun119447_ip = 609; continue _fun119447;
 598:
            update = update.CZeRhY;
            result = source.bind(control)(update);
 609:
            verify['label'] = result;
            result = function() { // Original name: onPress
                zulu = _closure2_slot6;
                entity = undefined;
                zulu = zulu.bind(entity)();
                mike = _closure2_slot5;
                mike = mike.bind(entity)();
                return entity;
            };
            verify['onPress'] = result;
            sizing = output.bind(tango)(sizing, verify);
            verify = new Array(3);
            verify[0] = sizing;
            sizing = offset != kilo;
            kilo = null;
            if(!sizing) { _fun119447_ip = 741; continue _fun119447 }
 647:
            result = _closure1_slot6;
            vacuum = _closure1_slot0;
            update = _closure1_slot2;
            sizing = update[yankee];
            sizing = vacuum.bind(tango)(sizing);
            output = sizing.ActionSheetRow;
            sizing = {};
            source = update[echo];
            source = vacuum.bind(tango)(source);
            control = source.intl;
            source = control.string;
            update = update[echo];
            update = vacuum.bind(tango)(update);
            update = update.t;
            update = update.w7x2t7;
            update = source.bind(control)(update);
            sizing['label'] = update;
            update = function() { // Original name: onPress
                mike = _closure2_slot6;
                entity = undefined;
                mike = mike.bind(entity)();
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 14;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.openEditPollCreationImageAltTextModal;
                mike = {};
                oscar = _closure2_slot0;
                mike['channelId'] = oscar;
                oscar = _closure2_slot2;
                mike['answer'] = oscar;
                oscar = _closure2_slot1;
                mike['index'] = oscar;
                report = _closure2_slot3;
                mike['onSave'] = report;
                report = 40;
                mike['imageSize'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            sizing['onPress'] = update;
            kilo = result.bind(tango)(output, sizing);
 741:
            verify[1] = kilo;
            offset = null;
            if(!foxtrot) { _fun119447_ip = 844; continue _fun119447 }
 750:
            foxtrot = _closure1_slot6;
            result = _closure1_slot0;
            kilo = _closure1_slot2;
            yankee = kilo[yankee];
            yankee = result.bind(tango)(yankee);
            romeo = yankee.ActionSheetRow;
            yankee = {};
            sizing = kilo[echo];
            sizing = result.bind(tango)(sizing);
            output = sizing.intl;
            sizing = output.string;
            kilo = kilo[echo];
            kilo = result.bind(tango)(kilo);
            kilo = kilo.t;
            kilo = kilo.IhMxgo;
            kilo = sizing.bind(output)(kilo);
            yankee['label'] = kilo;
            backup = function() { // Original name: onPress
                tango = _closure2_slot4;
                zulu = _closure2_slot1;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                mike = _closure2_slot6;
                mike = mike.bind(entity)();
                return entity;
            };
            yankee['onPress'] = backup;
            offset = foxtrot.bind(tango)(romeo, yankee);
 844:
            verify[2] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();