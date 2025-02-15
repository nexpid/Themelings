// app/modules/messages/canEditMessage.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.MessageFlags;
    var _closure1_slot3 = golf;
    tango = tango.MessageStates;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/canEditMessage.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: canEditMessage
        _fun61119: for(var _fun61119_ip = 0; ; ) switch(_fun61119_ip) {
 0:
            yankee = argFoo;
            zulu = argBar;
            options = null;
            entity = options != zulu;
            if(!entity) { _fun61119_ip = 248; continue _fun61119 }
 18:
            mike = yankee.author;
            mike = mike.id;
            mike = mike === zulu;
            if(!mike) { _fun61119_ip = 245; continue _fun61119 }
 39:
            tango = yankee.state;
            zulu = _closure1_slot4;
            zulu = zulu.SENT;
            zulu = tango === zulu;
            if(!zulu) { _fun61119_ip = 242; continue _fun61119 }
 67:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 1;
            tango = oscar[tango];
            offset = undefined;
            tango = report.bind(offset)(tango);
            tango = tango.bind(offset)(yankee);
            tango = !tango;
            if(!tango) { _fun61119_ip = 239; continue _fun61119 }
 103:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 2;
            report = golf[report];
            oscar = oscar.bind(offset)(report);
            report = oscar.canEditMessageWithStickers;
            report = report.bind(oscar)(yankee);
            oscar = !report;
            report = !oscar;
            if(oscar) { _fun61119_ip = 236; continue _fun61119 }
 143:
            golf = yankee.hasFlag;
            oscar = _closure1_slot3;
            oscar = oscar.IS_VOICE_MESSAGE;
            oscar = golf.bind(yankee)(oscar);
            oscar = !oscar;
            if(!oscar) { _fun61119_ip = 233; continue _fun61119 }
 170:
            golf = yankee.referralTrialOfferId;
            golf = options == golf;
            if(!golf) { _fun61119_ip = 230; continue _fun61119 }
 183:
            options = yankee.isPoll;
            options = options.bind(yankee)();
            options = !options;
            if(!options) { _fun61119_ip = 227; continue _fun61119 }
 199:
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            verify = 3;
            verify = foxtrot[verify];
            verify = romeo.bind(offset)(verify);
            verify = verify.bind(offset)(yankee);
            options = !verify;
 227:
            golf = options;
 230:
            oscar = golf;
 233:
            report = oscar;
 236:
            tango = report;
 239:
            zulu = tango;
 242:
            mike = zulu;
 245:
            entity = mike;
 248:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();