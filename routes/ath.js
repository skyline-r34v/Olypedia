const express = require("express")

const router = express.Router();

router.get('/', (req,res) =>
{
      res.send("Athletes Profile")
});
router.get("/:myAth", async (req, res) => {
    const myAth = req.params.myAth;
// athprofile football men
    if (myAth === "fb_mexM") {
        res.send("fb_mexM");
    } 
    else if (myAth === "fb_japM") {
        res.send("fb_japM");
    } 
    else if (myAth === "fb_korM") {
          res.send("fb_korM");
      }
      else if (myAth === "fb_newM") {
        res.send("fb_newM");
    } 
    else if (myAth === "fb_coteM") {
          res.send("fb_coteM");
      }
      else if (myAth === "fb_egyM") {
        res.send("fb_egyM");
    } 
    else if (myAth === "fb_gerM") {
          res.send("fb_gerM");
      }
    
    else if (myAth === "fb_argM") {
        res.send("fb_argM");
    } 
    else if (myAth === "fb_romM") {
          res.send("fB_romM");
      }
      else if (myAth === "fb_ausM") {
        res.send("fb_ausM");
    } 
    else if (myAth === "fb_fraM") {
          res.send("fb_fraM");
      }
      else if (myAth === "fb_honM") {
        res.send("fb_honM");
    } 
    else if (myAth === "fb_sauArM") {
          res.send("fb_sauArM");
      }
      else if (myAth === "fb_sauAfM") {
        res.send("fb_sauAfM");
    }
    else if (myAth === "fB_spaM") {
      res.send("fB_spaM");
  } 
  else if (myAth === "fb_braM") {
        res.send("fb_braM");
    }
  //athprofile football women
  else if (myAth === "fb_canW") {
      res.send("fb_canW");
  } 
  else if (myAth === "fb_sweW") {
        res.send("fb_sweW");
    }
  else if (myAth === "fb_uniW") {
      res.send("fb_uniW");
  } 
  else if (myAth === "fb_ausW") {
        res.send("fb_ausW");
    }
 else if (myAth === "fb_netW") {
      res.send("fb_netW");
  } 
 else if (myAth === "fb_braW") {
        res.send("fb_braW");
    }
  else if (myAth === "fb_greBW") {
        res.send("fb_greBW");
    }
    else if (myAth === "fb_japW") {
        res.send("fb_japW");
    }
    else if (myAth === "fb_zamW") {
        res.send("fb_zamW");
    }
    else if (myAth === "fb_chiW") {
        res.send("fb_chiW");
    }
    else if (myAth === "fb_chilW") {
        res.send("fb_chilW");
    }

//BASKETBALL MEN
else if (myAth === "bb_spaM") {
    res.send("bb_spaM");
}
else if (myAth === "bb_mexM") {
    res.send("bb_mexM");
}
else if (myAth === "bb_braM") {
    res.send("bb_braM");
}
else if (myAth === "bb_japM") {
    res.send("bb_japM");
}
else if (myAth === "bb_korM") {
    res.send("bb_korM");
}
else if (myAth === "bb_newM") {
    res.send("bb_newM");
}
else if (myAth === "bb_coteM") {
    res.send("bb_coteM");
}
else if (myAth === "bb_egyM") {
    res.send("bb_egyM");
}
else if (myAth === "bb_gerM") {
    res.send("bb_gerM");
}
else if (myAth === "bb_argM") {
    res.send("bb_argM");
}
else if (myAth === "bb_romM") {
    res.send("bb_romM");
}
else if (myAth === "bb_ausM") {
    res.send("bb_ausM");
}
else if (myAth === "bb_fraM") {
    res.send("bb_fraM");
}
else if (myAth === "bb_honM") {
    res.send("bb_honM");
}
else if (myAth === "bb_sauArM") {
    res.send("bb_souArM");
}
else if (myAth === "bb_sauAfM") {
    res.send("bb_sauAfM");
}
//BASKETBALL WOMEN
else if (myAth === "bb_uniW") {
    res.send("bb_uniW");
}
else if (myAth === "bb_japW") {
    res.send("bb_japW");
}
else if (myAth === "bb_fraW") {
    res.send("bb_fraW");
}
else if (myAth === "bb_serW") {
    res.send("bb_serW");
}
else if (myAth === "bb_chiW") {
    res.send("bb_chiW");
}
else if (myAth === "bb_spaW") {
    res.send("bb_spaW");
}
else if (myAth === "bb_belW") {
    res.send("bb_belW");
}
else if (myAth === "bb_ausW") {
    res.send("bb_ausW");
}
else if (myAth === "bb_canW") {
    res.send("bb_canW");
}
else if (myAth === "bb_korW") {
    res.send("bb_korW");
}
else if (myAth === "bb_nigW") {
    res.send("bb_nigW");
}
else if (myAth === "bb_pueW") {
    res.send("bb_pueW");
}
//VOLLEYBALL MEN
else if (myAth === "vb_fraM") {
    res.send("Vb_fraM");
}
else if (myAth === "vb_argM") {
    res.send("Vb_argM");
}
else if (myAth === "vb_braM") {
    res.send("Vb_braM");
}
else if (myAth === "vb_polM") {
    res.send("Vb_polM");
}
else if (myAth === "vb_itaM") {
    res.send("Vb_itaM");
}
else if (myAth === "vb_japM") {
    res.send("Vb_japM");
}
else if (myAth === "vb_canM") {
    res.send("Vb_canM");
}
else if (myAth === "vb_iraM") {
    res.send("Vb_iraM");
}
else if (myAth === "vb_uniM") {
    res.send("Vb_uniM");
}
else if (myAth === "vb_tunM") {
    res.send("Vb_tunM");
}
else if (myAth === "vb_venM") {
    res.send("Vb_venM");
}
//sports (not countrywise)
else if (myAth === "tabletennis") {
    res.send("tabletennis");
}
else if (myAth === "golf") {
    res.send("golf");
}
else if (myAth === "shooting") {
    res.send("shooting");
}
else if (myAth === "badminton") {
    res.send("tabletennis");
}
else if (myAth === "athletics") {
    res.send("athletics");
}
else if (myAth === "swimming") {
    res.send("swimming");
}
else if (myAth === "gynmastics") {
    res.send("gynmastics");
}
else if (myAth === "diving") {
    res.send("diving");
}
else if (myAth === "cycling") {
    res.send("cycling");
}
else if (myAth === "tennis") {
    res.send("tennis");
}
else if (myAth === "bmx") {
    res.send("bmx");
}
else if (myAth === "beachvolleyball") {
    res.send("beachvolleyball");
}
else if (myAth === "waterpolo") {
    res.send("waterpolo");
}

//hockey
else if (myAth === "hk_belM") {
    res.send("hk_belM");
}
else if (myAth === "hk_ausM") {
      res.send("hk_ausM");
  }
  else if (myAth === "hk_indM") {
      res.send("hk_indM");
  }
  else if (myAth === "hk_gerM") {
      res.send("hk_gerM");
  }
  else if (myAth === "hk_greBM") {
      res.send("hk_greBM");
  }
  else if (myAth === "hk_netM") {
      res.send("hk_netM");
  }
  else if (myAth === "hk_argM") {
      res.send("hk_argM");
  }
  else if (myAth === "hk_spaM") {
      res.send("hk_spaM");
  }
  else if (myAth === "hk_newM") {
      res.send("hk_newM");
  }
  else if (myAth === "hk_souAfM") {
      res.send("hk_souAfM");
  }
  else if (myAth === "hk_egyM") {
      res.send("hk_egyM");
  }
  else if (myAth === "hk_japM") {
      res.send("hk_japM");
  }
  else if (myAth === "hk_canM") {
      res.send("hk_canM");
  }
  //womens hockey 

  else if (myAth === "hk_netW") {
      res.send("hk_netW");
  }
  else if (myAth === "hk_argW") {
      res.send("hk_argW");
  }
  else if (myAth === "hk_greBW") {
      res.send("hk_argW");
  }
  else if (myAth === "hk_indW") {
      res.send("hk_indW");
  }
  else if (myAth === "hk_ausW") {
      res.send("hk_ausW");
  }
  else if (myAth === "hk_gerW") {
      res.send("hk_gerW");
  }
  else if (myAth === "hk_spaW") {
      res.send("hk_spaMW");
  }
  else if (myAth === "hk_newW") {
      res.send("hk_newW");
  }
  else if (myAth === "hk_chiW") {
      res.send("hk_chiW");
  }
  else if (myAth === "hk_ireW") {
      res.send("hk_ireW");
  }
  else if (myAth === "hk_japW") {
      res.send("hk_japW");
  }
  else if (myAth === "hk_souAfW") {
      res.send("hk_souAfW");
  }
//HANDBALL MENS
else if (myAth === "hb_fraM") {
      res.send("hb_fraM");
  }
  else if (myAth === "hb_denM") {
      res.send("hb_denM");
  }
  else if (myAth === "hb_spaM") {
      res.send("hb_spaM");
  }
  else if (myAth === "hb_egyM") {
      res.send("hb_egyM");
  }
  else if (myAth === "hb_sweM") {
      res.send("hb_sweM");
  }
  else if (myAth === "hb_gerM") {
      res.send("hb_gerM");
  }
  else if (myAth === "hb_norM") {
      res.send("hb_norM");
  }
  else if (myAth === "hb_bahM") {
      res.send("hb_bahM");
  }
  else if (myAth === "hb_porM") {
      res.send("hb_porM");
  }
  else if (myAth === "hb_braM") {
      res.send("hb_braM");
  }
  else if (myAth === "hb_japM") {
      res.send("hb_japM");
  }
  else if (myAth === "hb_argM") {
      res.send("hb_argM");
  }
//HANDBALL WOMEN
else if (myAth === "hb_fraW") {
      res.send("hb_fraW");
  }
  else if (myAth === "hb_rocW") {
      res.send("hb_rocW");
  }
  else if (myAth === "hb_norW") {
      res.send("hb_norW");
  }
  else if (myAth === "hb_sweW") {
      res.send("hb_sweW");
  }
  else if (myAth === "hb_netW") {
      res.send("hb_netW");
  }
  else if (myAth === "hb_monW") {
      res.send("hb_monW");
  }
  else if (myAth === "hb_hunW") {
      res.send("hb_hunW");
  }
  else if (myAth === "hb_korW") {
      res.send("hb_korW");
  }
  else if (myAth === "hb_spaW") {
      res.send("hb_spaW");
  }
  else if (myAth === "hb_angW") {
      res.send("hb_angW");
  }
  else if (myAth === "hb_braW") {
      res.send("hb_braW");
  }
  else if (myAth === "hb_japW") {
      res.send("hb_japW");
  }
//RUGBY MENS
else if (myAth === "rb_fijM") {
      res.send("rb_fijM");
  } 
  else if (myAth === "rb_newM") {
      res.send("rb_newM");
  } 
  else if (myAth === "rb_argM") {
      res.send("rb_argM");
  } 
  else if (myAth === "rb_greBM") {
      res.send("rb_greBM");
  } 
  else if (myAth === "rb_souAfM") {
      res.send("rb_souAfM");
  } 
  else if (myAth === "rb_uniM") {
      res.send("rb_uniM");
  } 
  else if (myAth === "rb_ausM") {
      res.send("rb_ausM");
  } 
  else if (myAth === "rb_canM") {
      res.send("rb_canM");
  } 
  else if (myAth === "rb_kenM") {
      res.send("rb_kenM");
  } 
  else if (myAth === "rb_ireM") {
      res.send("rb_ireM");
  } 
  else if (myAth === "rb_japM") {
      res.send("rb_japM");
  } 
  else if (myAth === "rb_korM") {
      res.send("rb_korM");
  } 
//RUGBY WOMENS
else if (myAth === "rb_newW") {
      res.send("rb_newW");
  } 
  else if (myAth === "rb_fraW") {
      res.send("rb_fraW");
  } 
  else if (myAth === "rb_fijW") {
      res.send("rb_fijW");
  } 
  else if (myAth === "rb_greBW") {
      res.send("rb_greBW");
  } 
  else if (myAth === "rb_ausW") {
      res.send("rb_ausW");
  } 
  else if (myAth === "rb_uniW") {
      res.send("rb_uniW");
  } 
  else if (myAth === "rb_chiW") {
      res.send("rb_chiW");
  } 
  else if (myAth === "rb_rocW") {
      res.send("rb_rocW");
  } 
  else if (myAth === "rb_canW") {
      res.send("rb_canW");
  } 
  else if (myAth === "rb_kenW") {
      res.send("rb_kenW");
  } 
  else if (myAth === "rb_braW") {
      res.send("rb_braW");
  } 
  else if (myAth === "rb_japW") {
      res.send("rb_japW");
  } 
    else {
        // Handle other cases if necessary
        res.send("Invalid parameter");
        res.status(404);
    }
});


module.exports = router;
